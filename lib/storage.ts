"use client";
import { MutiraoRelatorio, RegistroRelatorio, RevitalizacaoRelatorio, DDSRelatorio, MonumentosRelatorio, EventosRelatorio, RotineirosRelatorio, Relatorio, ReportSummary } from "./types";
import { saveRelatorioToFirebase, getRelatorioFromFirebase, listRelatoriosFromFirebase, deleteRelatorioFromFirebase } from "./firebase-storage";

// Sistema de armazenamento híbrido: Firebase ou IndexedDB
class RelatoriosStorage {
  private localStorage = new LocalStorageFallback();

  // Inicializar
  async init() {
    console.log("🔄 Inicializando armazenamento IndexedDB...");
    await this.localStorage.init();
    console.log("✅ Usando IndexedDB para armazenamento");
  }

  // Salvar relatório
  async saveRelatorio(relatorio: Relatorio): Promise<Relatorio> {
    console.log("💾 Salvando relatório:", relatorio);
    
    // Tentar usar Firebase primeiro
    try {
      console.log("🔥 Tentando Firebase...");
      const result = await saveRelatorioToFirebase(relatorio);
      console.log("✅ Salvo no Firebase com sucesso");
      return result;
    } catch (error) {
      console.error("❌ Erro no Firebase, usando IndexedDB:", error);
    }
    
    // Fallback para IndexedDB
    console.log("💾 Usando IndexedDB (fallback)");
    return await this.localStorage.saveRelatorio(relatorio);
  }

  // Buscar relatório por ID
  async getRelatorio(id: string): Promise<Relatorio | null> {
    try {
      const rel = await getRelatorioFromFirebase(id);
      if (rel) return rel;
    } catch (error) {
      console.error("Erro ao buscar no Firebase:", error);
    }
    return await this.localStorage.getRelatorio(id);
  }

  // Listar todos os relatórios
  async getAllRelatorios(): Promise<Relatorio[]> {
    return await this.localStorage.getAllRelatorios();
  }

  // Deletar relatório
  async deleteRelatorio(id: string): Promise<void> {
    try {
      await deleteRelatorioFromFirebase(id);
      return;
    } catch (error) {
      console.error("Erro ao deletar no Firebase:", error);
    }
    await this.localStorage.deleteRelatorio(id);
  }

  // Listar resumos dos relatórios
  async listRelatorios(): Promise<ReportSummary[]> {
    console.log("📋 Listando relatórios...");
    
    try {
      const firebaseReports = await listRelatoriosFromFirebase();
      if (firebaseReports.length > 0) {
        console.log(`🔥 Encontrados ${firebaseReports.length} relatórios no Firebase`);
        return firebaseReports;
      }
    } catch (error) {
      console.error("Erro ao listar no Firebase:", error);
    }
    
    return await this.localStorage.listRelatorios();
  }

  // Informações sobre o armazenamento
  async getStorageInfo() {
    return await this.localStorage.getStorageInfo();
  }

  // Limpar relatórios antigos
  async clearOldReports(keepCount: number = 100): Promise<void> {
    await this.localStorage.clearOldReports(keepCount);
  }

}

// Fallback para armazenamento local (IndexedDB)
class LocalStorageFallback {
  private dbName = 'RelatoriosDB';
  private version = 1;
  private db: IDBDatabase | null = null;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains('relatorios')) {
          const store = db.createObjectStore('relatorios', { keyPath: 'id' });
          store.createIndex('tipoServico', 'tipoServico', { unique: false });
          store.createIndex('createdAt', 'createdAt', { unique: false });
          store.createIndex('updatedAt', 'updatedAt', { unique: false });
        }
      };
    });
  }

  private async ensureDB(): Promise<IDBDatabase> {
    if (!this.db) {
      await this.init();
    }
    return this.db!;
  }

  async saveRelatorio(relatorio: Relatorio): Promise<Relatorio> {
    const db = await this.ensureDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['relatorios'], 'readwrite');
      const store = transaction.objectStore('relatorios');
      
      const request = store.put({
        ...relatorio,
        updatedAt: Date.now()
      });
      
      request.onsuccess = () => resolve(relatorio);
      request.onerror = () => reject(request.error);
    });
  }

  async getRelatorio(id: string): Promise<Relatorio | null> {
    const db = await this.ensureDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['relatorios'], 'readonly');
      const store = transaction.objectStore('relatorios');
      
      const request = store.get(id);
      
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  async getAllRelatorios(): Promise<Relatorio[]> {
    const db = await this.ensureDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['relatorios'], 'readonly');
      const store = transaction.objectStore('relatorios');
      
      const request = store.getAll();
      
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => reject(request.error);
    });
  }

  async deleteRelatorio(id: string): Promise<void> {
    const db = await this.ensureDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(['relatorios'], 'readwrite');
      const store = transaction.objectStore('relatorios');
      
      const request = store.delete(id);
      
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async listRelatorios(): Promise<ReportSummary[]> {
    const reports = await this.getAllRelatorios();
    
    return reports.map((r) => {
      let data = '';
      if (r.tipoServico === "MUTIRAO") {
        data = (r as MutiraoRelatorio).data || '';
      } else if (r.tipoServico === "ACUMULADOR" || r.tipoServico === "ALAGAMENTOS" || r.tipoServico === "ZELADORIA") {
        data = (r as RegistroRelatorio).dataInicio || '';
      } else if (r.tipoServico === "REVITALIZACAO") {
        data = (r as RevitalizacaoRelatorio).data || '';
      } else if (r.tipoServico === "ROTINEIROS") {
        data = (r as RotineirosRelatorio).data || '';
      } else {
        data = (r as any).dataInicio || (r as any).data || '';
      }

      let fotoCount = 0;
      if (r.tipoServico === "MUTIRAO") {
        const mutirao = r as MutiraoRelatorio;
        fotoCount = mutirao.secoes?.reduce((total, secao) => {
          return total + secao.servicos?.reduce((servicoTotal, servico) => {
            return servicoTotal + (servico.fotos?.length || 0);
          }, 0) + (secao.equipeFotoUrl ? 1 : 0) + (secao.mapaFotoUrl ? 1 : 0);
        }, 0) || 0;
      } else if (r.tipoServico === "ACUMULADOR" || r.tipoServico === "ALAGAMENTOS" || r.tipoServico === "ZELADORIA") {
        fotoCount = (r as RegistroRelatorio).fotos?.length || 0;
      } else if (r.tipoServico === "REVITALIZACAO") {
        fotoCount = (r as RevitalizacaoRelatorio).fotos?.length || 0;
      } else if (r.tipoServico === "ROTINEIROS") {
        const rotineiros = r as RotineirosRelatorio;
        fotoCount = rotineiros.servicos?.reduce((total, servico) => {
          return total + (servico.fotos?.length || 0);
        }, 0) || 0;
      }

      const tipoServicoMap: { [key: string]: string } = {
        'MUTIRAO': 'Mutirão',
        'ACUMULADOR': 'Acumulador',
        'ALAGAMENTOS': 'Alagamentos',
        'REVITALIZACAO': 'Revitalização',
        'ZELADORIA': 'Zeladoria',
        'DDS': 'DDS',
        'HIGIENIZACAO': 'Higienização, manutenção, instalação, remoção e reposição de Papeleiras',
        'VARRICAO_MECANIZADA': 'Varrição Mecanizada',
        'FEIRAS': 'Feiras',
        'EVENTOS': 'Eventos',
        'ROTINEIROS': 'Serviços Rotineiros',
        'REGISTROS_FOTOGRAFICOS': 'Registros Fotográficos'
      };

      const base = {
        id: r.id,
        title: tipoServicoMap[r.tipoServico] || r.tipoServico,
        data: data,
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
        fotoCount: fotoCount,
      };

      if (r.tipoServico === "MUTIRAO") {
        return {
          ...base,
          tipoServico: r.tipoServico,
          sub: (r as MutiraoRelatorio).secoes?.[0]?.sub,
          endereco: (r as MutiraoRelatorio).secoes?.[0]?.local || "",
        };
      } else if (r.tipoServico === "ACUMULADOR" || r.tipoServico === "ALAGAMENTOS" || r.tipoServico === "ZELADORIA") {
        return {
          ...base,
          tipoServico: r.tipoServico,
          sub: (r as RegistroRelatorio).sub,
          endereco: (r as RegistroRelatorio).local || "",
        };
      } else if (r.tipoServico === "REVITALIZACAO") {
        return {
          ...base,
          tipoServico: r.tipoServico,
          sub: (r as RevitalizacaoRelatorio).sub,
          endereco: (r as RevitalizacaoRelatorio).local || "",
        };
      } else if (r.tipoServico === "ROTINEIROS") {
        return {
          ...base,
          tipoServico: r.tipoServico,
          sub: (r as RotineirosRelatorio).sub,
          endereco: "",
        };
      }

      return {
        ...base,
        tipoServico: r.tipoServico,
        endereco: "",
      };
    });
  }

  async getStorageInfo() {
    const db = await this.ensureDB();
    
    return new Promise((resolve) => {
      const transaction = db.transaction(['relatorios'], 'readonly');
      const store = transaction.objectStore('relatorios');
      
      const request = store.count();
      
      request.onsuccess = () => {
        navigator.storage.estimate().then(estimate => {
          resolve({
            documentCount: request.result,
            maxCapacity: 2 * 1024 * 1024 * 1024,
            availableCapacity: estimate.quota || 0,
            usedCapacity: estimate.usage || 0,
            percentage: Math.round(((estimate.usage || 0) / (2 * 1024 * 1024 * 1024)) * 100),
            storageType: "Local (IndexedDB)"
          });
        });
      };
    });
  }

  async clearOldReports(keepCount: number = 100): Promise<void> {
    const reports = await this.getAllRelatorios();
    
    if (reports.length <= keepCount) return;
    
    const sortedReports = reports.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    const reportsToDelete = sortedReports.slice(keepCount);
    
    for (const report of reportsToDelete) {
      await this.deleteRelatorio(report.id);
    }
    
    console.log(`🗑️ Removidos ${reportsToDelete.length} relatórios antigos`);
  }
}

// Instância singleton
const storage = new RelatoriosStorage();

// Inicializar automaticamente
if (typeof window !== 'undefined') {
  // Aguardar um pouco para garantir que o token esteja disponível
  setTimeout(() => {
    storage.init().catch(console.error);
  }, 1000);
}

// Exportar funções compatíveis com a API atual
export const upsertReport = async (item: Relatorio): Promise<Relatorio> => {
  return await storage.saveRelatorio(item);
};

export const deleteReport = async (id: string): Promise<void> => {
  return await storage.deleteRelatorio(id);
};

export const getReport = async (id: string): Promise<Relatorio | null> => {
  return await storage.getRelatorio(id);
};

export const readAll = async (): Promise<Relatorio[]> => {
  return await storage.getAllRelatorios();
};

export const listReports = async (): Promise<ReportSummary[]> => {
  return await storage.listRelatorios();
};

export const getStorageInfo = async () => {
  return await storage.getStorageInfo();
};

export const clearOldReports = async (): Promise<void> => {
  return await storage.clearOldReports();
};

export const clearInvalidReports = async (): Promise<void> => {
  // No backend, não precisamos limpar manualmente
  console.log("Backend gerencia automaticamente os dados");
};