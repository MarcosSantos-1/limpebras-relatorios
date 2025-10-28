"use client";
import { MutiraoRelatorio, RegistroRelatorio, RevitalizacaoRelatorio, DDSRelatorio, MonumentosRelatorio, EventosRelatorio, RotineirosRelatorio, Relatorio, ReportSummary } from "./types";
import { relatoriosService, authService } from "./api-client";

// Sistema de armazenamento híbrido: backend + fallback local
class RelatoriosStorage {
  private useBackend = true;
  private localStorage = new LocalStorageFallback();

  // Inicializar autenticação
  async init() {
    try {
      // Tentar inicializar token do localStorage
      authService.initToken();
      
      // Testar conexão com backend
      await relatoriosService.list();
      this.useBackend = true;
      console.log("✅ Usando backend para armazenamento");
    } catch (error) {
      console.warn("⚠️ Backend não disponível, usando armazenamento local:", error);
      this.useBackend = false;
      await this.localStorage.init();
    }
  }

  // Salvar relatório
  async saveRelatorio(relatorio: Relatorio): Promise<Relatorio> {
    if (this.useBackend) {
      try {
        // Converter para formato do backend
        const backendData = this.convertToBackendFormat(relatorio);
        const result = await relatoriosService.create(backendData);
        return this.convertFromBackendFormat(result);
      } catch (error) {
        console.error("Erro ao salvar no backend:", error);
        // Fallback para local
        return await this.localStorage.saveRelatorio(relatorio);
      }
    } else {
      return await this.localStorage.saveRelatorio(relatorio);
    }
  }

  // Buscar relatório por ID
  async getRelatorio(id: string): Promise<Relatorio | null> {
    if (this.useBackend) {
      try {
        const result = await relatoriosService.getById(id);
        return this.convertFromBackendFormat(result);
      } catch (error) {
        console.error("Erro ao buscar no backend:", error);
        return await this.localStorage.getRelatorio(id);
      }
    } else {
      return await this.localStorage.getRelatorio(id);
    }
  }

  // Listar todos os relatórios
  async getAllRelatorios(): Promise<Relatorio[]> {
    if (this.useBackend) {
      try {
        const result = await relatoriosService.list();
        return result.relatorios.map((r: any) => this.convertFromBackendFormat(r));
      } catch (error) {
        console.error("Erro ao listar do backend:", error);
        return await this.localStorage.getAllRelatorios();
      }
    } else {
      return await this.localStorage.getAllRelatorios();
    }
  }

  // Deletar relatório
  async deleteRelatorio(id: string): Promise<void> {
    if (this.useBackend) {
      try {
        await relatoriosService.delete(id);
      } catch (error) {
        console.error("Erro ao deletar no backend:", error);
        await this.localStorage.deleteRelatorio(id);
      }
    } else {
      await this.localStorage.deleteRelatorio(id);
    }
  }

  // Listar resumos dos relatórios
  async listRelatorios(): Promise<ReportSummary[]> {
    if (this.useBackend) {
      try {
        const result = await relatoriosService.list();
        return result.relatorios.map((r: any) => this.convertToReportSummary(r));
      } catch (error) {
        console.error("Erro ao listar resumos do backend:", error);
        return await this.localStorage.listRelatorios();
      }
    } else {
      return await this.localStorage.listRelatorios();
    }
  }

  // Informações sobre o armazenamento
  async getStorageInfo() {
    if (this.useBackend) {
      try {
        const result = await relatoriosService.list();
        return {
          documentCount: result.pagination.total,
          maxCapacity: "Ilimitado (Backend)",
          availableCapacity: "Ilimitado (Backend)",
          usedCapacity: "N/A",
          percentage: 0,
          storageType: "Backend PostgreSQL"
        };
      } catch (error) {
        console.error("Erro ao obter info do backend:", error);
        return await this.localStorage.getStorageInfo();
      }
    } else {
      return await this.localStorage.getStorageInfo();
    }
  }

  // Limpar relatórios antigos
  async clearOldReports(keepCount: number = 100): Promise<void> {
    if (this.useBackend) {
      // No backend, não precisamos limpar manualmente
      console.log("Backend gerencia automaticamente o armazenamento");
    } else {
      await this.localStorage.clearOldReports(keepCount);
    }
  }

  // Converter formato do frontend para backend
  private convertToBackendFormat(relatorio: Relatorio): any {
    return {
      tipo_servico: relatorio.tipoServico,
      titulo: this.getTitle(relatorio),
      data_relatorio: this.getDate(relatorio),
      sub_regiao: this.getSubRegiao(relatorio),
      local: this.getLocal(relatorio),
      descricao: this.getDescription(relatorio),
      dados_jsonb: relatorio
    };
  }

  // Converter formato do backend para frontend
  private convertFromBackendFormat(backendData: any): Relatorio {
    return backendData.dados_jsonb || backendData;
  }

  // Converter para ReportSummary
  private convertToReportSummary(backendData: any): ReportSummary {
    const relatorio = this.convertFromBackendFormat(backendData);
    
    return {
      id: backendData.id,
      title: backendData.titulo || this.getTitle(relatorio),
      data: backendData.data_relatorio || this.getDate(relatorio),
      createdAt: new Date(backendData.created_at).getTime(),
      updatedAt: new Date(backendData.updated_at).getTime(),
      fotoCount: this.countPhotos(relatorio),
      tipoServico: backendData.tipo_servico,
      sub: backendData.sub_regiao,
      endereco: backendData.local || ""
    };
  }

  // Métodos auxiliares para extrair dados dos diferentes tipos de relatório
  private getTitle(relatorio: Relatorio): string {
    if (relatorio.tipoServico === "MUTIRAO") {
      return (relatorio as MutiraoRelatorio).title || "Mutirão";
    }
    return relatorio.tipoServico;
  }

  private getDate(relatorio: Relatorio): string {
    if (relatorio.tipoServico === "MUTIRAO") {
      return (relatorio as MutiraoRelatorio).data || "";
    } else if (relatorio.tipoServico === "ROTINEIROS") {
      return (relatorio as RotineirosRelatorio).data || "";
    } else if (relatorio.tipoServico === "REVITALIZACAO") {
      return (relatorio as RevitalizacaoRelatorio).data || "";
    } else if (relatorio.tipoServico === "ACUMULADOR" || relatorio.tipoServico === "ALAGAMENTOS" || relatorio.tipoServico === "ZELADORIA") {
      return (relatorio as RegistroRelatorio).dataInicio || "";
    }
    return (relatorio as any).data || "";
  }

  private getSubRegiao(relatorio: Relatorio): string {
    if (relatorio.tipoServico === "MUTIRAO") {
      return (relatorio as MutiraoRelatorio).secoes?.[0]?.sub || "";
    } else if (relatorio.tipoServico === "ROTINEIROS") {
      return (relatorio as RotineirosRelatorio).sub || "";
    } else if (relatorio.tipoServico === "REVITALIZACAO") {
      return (relatorio as RevitalizacaoRelatorio).sub || "";
    } else if (relatorio.tipoServico === "ACUMULADOR" || relatorio.tipoServico === "ALAGAMENTOS" || relatorio.tipoServico === "ZELADORIA") {
      return (relatorio as RegistroRelatorio).sub || "";
    }
    return "";
  }

  private getLocal(relatorio: Relatorio): string {
    if (relatorio.tipoServico === "MUTIRAO") {
      return (relatorio as MutiraoRelatorio).secoes?.[0]?.local || "";
    } else if (relatorio.tipoServico === "REVITALIZACAO") {
      return (relatorio as RevitalizacaoRelatorio).local || "";
    } else if (relatorio.tipoServico === "ACUMULADOR" || relatorio.tipoServico === "ALAGAMENTOS" || relatorio.tipoServico === "ZELADORIA") {
      return (relatorio as RegistroRelatorio).local || "";
    }
    return "";
  }

  private getDescription(relatorio: Relatorio): string {
    if (relatorio.tipoServico === "MUTIRAO") {
      return (relatorio as MutiraoRelatorio).secoes?.[0]?.descricao || "";
    } else if (relatorio.tipoServico === "REVITALIZACAO") {
      return (relatorio as RevitalizacaoRelatorio).descricao || "";
    } else if (relatorio.tipoServico === "ACUMULADOR" || relatorio.tipoServico === "ALAGAMENTOS" || relatorio.tipoServico === "ZELADORIA") {
      return (relatorio as RegistroRelatorio).descricao || "";
    }
    return "";
  }

  private countPhotos(relatorio: Relatorio): number {
    if (relatorio.tipoServico === "MUTIRAO") {
      const mutirao = relatorio as MutiraoRelatorio;
      return mutirao.secoes?.reduce((total, secao) => {
        return total + secao.servicos?.reduce((servicoTotal, servico) => {
          return servicoTotal + (servico.fotos?.length || 0);
        }, 0) + (secao.equipeFotoUrl ? 1 : 0) + (secao.mapaFotoUrl ? 1 : 0);
      }, 0) || 0;
    } else if (relatorio.tipoServico === "ROTINEIROS") {
      const rotineiros = relatorio as RotineirosRelatorio;
      return rotineiros.servicos?.reduce((total, servico) => {
        return total + (servico.fotos?.length || 0);
      }, 0) || 0;
    } else if (relatorio.tipoServico === "REVITALIZACAO") {
      return (relatorio as RevitalizacaoRelatorio).fotos?.length || 0;
    } else if (relatorio.tipoServico === "ACUMULADOR" || relatorio.tipoServico === "ALAGAMENTOS" || relatorio.tipoServico === "ZELADORIA") {
      return (relatorio as RegistroRelatorio).fotos?.length || 0;
    }
    return 0;
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
  storage.init().catch(console.error);
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
