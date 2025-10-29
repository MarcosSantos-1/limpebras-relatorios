import { db, storage } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  deleteDoc,
  query,
  orderBy 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL,
  deleteObject 
} from 'firebase/storage';
import { Relatorio, ReportSummary } from './types';

/**
 * Salvar relatório no Firestore e fotos no Storage
 */
export async function saveRelatorioToFirebase(relatorio: Relatorio): Promise<Relatorio> {
  try {
    console.log('🔥 Salvando no Firebase:', relatorio.id);
    
    // Upload fotos primeiro
    const relatorioWithUrls = await migrateFotosToStorage(relatorio);
    
    // Salvar metadados no Firestore
    await addDoc(collection(db, 'relatorios'), {
      id: relatorioWithUrls.id,
      tipo_servico: relatorioWithUrls.tipoServico,
      titulo: relatorioWithUrls.title,
      dados: relatorioWithUrls,
      createdAt: new Date(relatorioWithUrls.createdAt),
      updatedAt: new Date(relatorioWithUrls.updatedAt),
    });
    
    console.log('✅ Salvo no Firebase com sucesso');
    return relatorioWithUrls;
  } catch (error) {
    console.error('❌ Erro ao salvar no Firebase:', error);
    throw error;
  }
}

/**
 * Migrar fotos para Firebase Storage
 */
async function migrateFotosToStorage(relatorio: Relatorio): Promise<Relatorio> {
  const relatorioCopy = { ...relatorio };
  
  // Processar diferentes tipos de relatório
  if ('secoes' in relatorioCopy && Array.isArray(relatorioCopy.secoes)) {
    for (const secao of relatorioCopy.secoes) {
      if (secao.equipeFotoUrl && secao.equipeFotoUrl.startsWith('data:')) {
        const url = await uploadBase64ToStorage(secao.equipeFotoUrl, relatorio.id, 'equipe');
        secao.equipeFotoUrl = url;
      }
      
      if (secao.mapaFotoUrl && secao.mapaFotoUrl.startsWith('data:')) {
        const url = await uploadBase64ToStorage(secao.mapaFotoUrl, relatorio.id, 'mapa');
        secao.mapaFotoUrl = url;
      }
      
      if (secao.servicos && Array.isArray(secao.servicos)) {
        for (let i = 0; i < secao.servicos.length; i++) {
          const servico = secao.servicos[i];
          if (servico.fotos && Array.isArray(servico.fotos)) {
            for (let j = 0; j < servico.fotos.length; j++) {
              const foto = servico.fotos[j];
              if (foto.url && foto.url.startsWith('data:')) {
                const url = await uploadBase64ToStorage(foto.url, relatorio.id, `servico-${i}-${j}`);
                foto.url = url;
              }
            }
          }
        }
      }
    }
  } else if ('fotos' in relatorioCopy && Array.isArray(relatorioCopy.fotos)) {
    for (let i = 0; i < relatorioCopy.fotos.length; i++) {
      const foto = relatorioCopy.fotos[i];
      if (foto.url && foto.url.startsWith('data:')) {
        const url = await uploadBase64ToStorage(foto.url, relatorio.id, `foto-${i}`);
        foto.url = url;
      }
    }
  }
  
  return relatorioCopy;
}

/**
 * Upload base64 para Firebase Storage
 */
async function uploadBase64ToStorage(base64: string, relatorioId: string, name: string): Promise<string> {
  try {
    // Converter base64 para blob
    const response = await fetch(base64);
    const blob = await response.blob();
    
    // Criar referência no Storage
    const storageRef = ref(storage, `relatorios/${relatorioId}/${name}_${Date.now()}.jpg`);
    
    // Upload
    const snapshot = await uploadBytes(storageRef, blob);
    
    // Obter URL pública
    const url = await getDownloadURL(snapshot.ref);
    
    return url;
  } catch (error) {
    console.error('Erro ao fazer upload:', error);
    // Retornar base64 original em caso de erro
    return base64;
  }
}

/**
 * Listar todos os relatórios
 */
export async function listRelatoriosFromFirebase(): Promise<ReportSummary[]> {
  try {
    const q = query(collection(db, 'relatorios'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const reports: ReportSummary[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const rel: Relatorio = data.dados;
      
      // Extrair sub e endereco de diferentes estruturas de relatório
      let subValue = (rel as any).sub || '';
      let enderecoValue = (rel as any).local || (rel as any).endereco || '';
      
      // Para Mutirão, tentar extrair da primeira seção
      if ('secoes' in rel && Array.isArray(rel.secoes) && rel.secoes.length > 0) {
        const primeiraSecao = rel.secoes[0];
        if (primeiraSecao) {
          subValue = (primeiraSecao as any).sub || subValue;
          enderecoValue = (primeiraSecao as any).local || enderecoValue;
        }
      }
      
      reports.push({
        id: rel.id,
        title: rel.title,
        tipoServico: rel.tipoServico,
        data: (rel as any).data || '',
        sub: subValue,
        endereco: enderecoValue,
        fotoCount: countFotos(rel),
      });
    });
    
    return reports;
  } catch (error) {
    console.error('Erro ao listar relatórios:', error);
    return [];
  }
}

/**
 * Buscar relatório por ID
 */
export async function getRelatorioFromFirebase(id: string): Promise<Relatorio | null> {
  try {
    const q = query(collection(db, 'relatorios'));
    const querySnapshot = await getDocs(q);
    
    for (const docSnap of querySnapshot.docs) {
      const data = docSnap.data();
      if (data.id === id) {
        return data.dados;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Erro ao buscar relatório:', error);
    return null;
  }
}

/**
 * Deletar relatório
 */
export async function deleteRelatorioFromFirebase(id: string): Promise<void> {
  try {
    const q = query(collection(db, 'relatorios'));
    const querySnapshot = await getDocs(q);
    
    for (const docSnap of querySnapshot.docs) {
      const data = docSnap.data();
      if (data.id === id) {
        await deleteDoc(doc(db, 'relatorios', docSnap.id));
        break;
      }
    }
  } catch (error) {
    console.error('Erro ao deletar relatório:', error);
    throw error;
  }
}

/**
 * Contar fotos em um relatório
 */
function countFotos(relatorio: Relatorio): number {
  let count = 0;

  if ('secoes' in relatorio && Array.isArray(relatorio.secoes)) {
    for (const secao of relatorio.secoes) {
      if (secao.equipeFotoUrl) count++;
      if (secao.mapaFotoUrl) count++;
      if (secao.servicos && Array.isArray(secao.servicos)) {
        for (const servico of secao.servicos) {
          if (servico.fotos && Array.isArray(servico.fotos)) {
            count += servico.fotos.length;
          }
        }
      }
    }
  } else if ('fotos' in relatorio && Array.isArray(relatorio.fotos)) {
    count = relatorio.fotos.filter(f => f.url).length;
  }

  return count;
}

