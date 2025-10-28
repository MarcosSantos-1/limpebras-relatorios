"use client";
import { MutiraoRelatorio, RegistroRelatorio, RevitalizacaoRelatorio, DDSRelatorio, MonumentosRelatorio, EventosRelatorio, RotineirosRelatorio, Relatorio, ReportSummary } from "./types";

// Sistema de armazenamento usando IndexedDB para capacidade muito maior
class RelatoriosStorage {
  private dbName = 'RelatoriosDB';
  private version = 1;
  private db: IDBDatabase | null = null;
  private maxStorageSize = 2 * 1024 * 1024 * 1024; // 2GB limite configurado

  // Inicializar o banco de dados
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
        
        // Criar object store para relatórios
        if (!db.objectStoreNames.contains('relatorios')) {
          const store = db.createObjectStore('relatorios', { keyPath: 'id' });
          store.createIndex('tipoServico', 'tipoServico', { unique: false });
          store.createIndex('createdAt', 'createdAt', { unique: false });
          store.createIndex('updatedAt', 'updatedAt', { unique: false });
        }
      };
    });
  }

  // Garantir que o banco está inicializado
  private async ensureDB(): Promise<IDBDatabase> {
    if (!this.db) {
      await this.init();
    }
    return this.db!;
  }

  // Migrar dados do localStorage para IndexedDB
  async migrateFromLocalStorage(): Promise<void> {
    if (typeof window === "undefined") return;
    
    const KEY = "relatorios-mutirao";
    const raw = localStorage.getItem(KEY);
    
    if (!raw) return;
    
    try {
      const reports = JSON.parse(raw) as Relatorio[];
      console.log(`🔄 Migrando ${reports.length} relatórios do localStorage para IndexedDB...`);
      
      for (const report of reports) {
        await this.saveRelatorio(report);
      }
      
      // Limpar localStorage após migração
      localStorage.removeItem(KEY);
      
      console.log(`✅ Migrados ${reports.length} relatórios com sucesso!`);
    } catch (error) {
      console.error("❌ Erro na migração:", error);
    }
  }

  // Salvar relatório
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

  // Buscar relatório por ID
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

  // Listar todos os relatórios
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

  // Deletar relatório
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

  // Listar resumos dos relatórios (para performance)
  async listRelatorios(): Promise<ReportSummary[]> {
    const reports = await this.getAllRelatorios();
    
    return reports.map((r) => {
      // Determinar a data correta baseada no tipo de relatório
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

      // Contar fotos baseado no tipo de relatório
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
      } else if (r.tipoServico === "DDS") {
        fotoCount = (r as DDSRelatorio).fotos?.length || 0;
      } else if (r.tipoServico === "HIGIENIZACAO") {
        fotoCount = (r as any).fotos?.length || 0;
      } else if (r.tipoServico === "VARRICAO_MECANIZADA") {
        fotoCount = (r as any).fotos?.length || 0;
      } else if (r.tipoServico === "FEIRAS") {
        fotoCount = (r as any).fotos?.length || 0;
      } else if (r.tipoServico === "EVENTOS") {
        fotoCount = (r as EventosRelatorio).fotos?.length || 0;
      }

      // Mapear tipo de serviço
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
          endereco: "", // Serviços Rotineiros não têm local
        };
      }

      return {
        ...base,
        tipoServico: r.tipoServico,
        endereco: "",
      };
    });
  }

  // Informações sobre o armazenamento
  async getStorageInfo() {
    const db = await this.ensureDB();
    
    return new Promise((resolve) => {
      const transaction = db.transaction(['relatorios'], 'readonly');
      const store = transaction.objectStore('relatorios');
      
      const request = store.count();
      
      request.onsuccess = () => {
        // Verificar quota real disponível
        navigator.storage.estimate().then(estimate => {
          resolve({
            documentCount: request.result,
            maxCapacity: this.maxStorageSize, // 2GB configurado
            availableCapacity: estimate.quota || 0,
            usedCapacity: estimate.usage || 0,
            percentage: Math.round(((estimate.usage || 0) / this.maxStorageSize) * 100),
            capacityInfo: {
              localStorage: "5MB (sistema anterior)",
              indexedDB: `${Math.round(this.maxStorageSize / 1024 / 1024)}MB (sistema atual)`,
              improvement: `${Math.round(this.maxStorageSize / (5 * 1024 * 1024))}x mais capacidade`
            }
          });
        });
      };
    });
  }

  // Limpar relatórios antigos (manter apenas os mais recentes)
  async clearOldReports(keepCount: number = 100): Promise<void> {
    const reports = await this.getAllRelatorios();
    
    if (reports.length <= keepCount) return;
    
    const sortedReports = reports.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    const reportsToKeep = sortedReports.slice(0, keepCount);
    const reportsToDelete = sortedReports.slice(keepCount);
    
    for (const report of reportsToDelete) {
      await this.deleteRelatorio(report.id);
    }
    
    console.log(`🗑️ Removidos ${reportsToDelete.length} relatórios antigos`);
  }

  // Limpar relatórios inválidos
  async clearInvalidReports(): Promise<void> {
    const reports = await this.getAllRelatorios();
    const validReports = reports.filter(report => 
      report.tipoServico && 
      String(report.tipoServico) !== 'undefined' &&
      (report as any).title &&
      (report as any).title !== 'undefined'
    );
    
    // Limpar todos e salvar apenas os válidos
    for (const report of reports) {
      await this.deleteRelatorio(report.id);
    }
    
    for (const report of validReports) {
      await this.saveRelatorio(report);
    }
    
    console.log(`🧹 Removidos ${reports.length - validReports.length} relatórios inválidos`);
  }
}

// Instância singleton
const storage = new RelatoriosStorage();

// Exportar funções compatíveis com a API atual
export const upsertReport = async (item: Relatorio): Promise<Relatorio> => {
  await storage.migrateFromLocalStorage(); // Migrar automaticamente
  return await storage.saveRelatorio(item);
};

export const deleteReport = async (id: string): Promise<void> => {
  await storage.migrateFromLocalStorage();
  return await storage.deleteRelatorio(id);
};

export const getReport = async (id: string): Promise<Relatorio | null> => {
  await storage.migrateFromLocalStorage();
  return await storage.getRelatorio(id);
};

export const readAll = async (): Promise<Relatorio[]> => {
  await storage.migrateFromLocalStorage();
  return await storage.getAllRelatorios();
};

export const listReports = async (): Promise<ReportSummary[]> => {
  await storage.migrateFromLocalStorage();
  return await storage.listRelatorios();
};

export const getStorageInfo = async () => {
  await storage.migrateFromLocalStorage();
  return await storage.getStorageInfo();
};

export const clearOldReports = async (): Promise<void> => {
  await storage.migrateFromLocalStorage();
  return await storage.clearOldReports();
};

export const clearInvalidReports = async (): Promise<void> => {
  await storage.migrateFromLocalStorage();
  return await storage.clearInvalidReports();
};

