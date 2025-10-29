# ☁️ Configuração Cloud Storage (R2 + Supabase)

## 📋 Pré-requisitos

1. **Cloudflare R2**
   - Bucket: `limpebras-relatorios`
   - Endpoint: `https://3748a7a88f3f2e8b3806b8340bf6fe1a.r2.cloudflarestorage.com`

2. **Supabase Database**
   - Host: `db.rzurwjixlqremctcpwhk.supabase.co`
   - Port: 5432
   - Database: `postgres`

## 🚀 Setup

### 1. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://rzurwjixlqremctcpwhk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui

# Cloudflare R2
NEXT_PUBLIC_R2_ACCOUNT_ID=3748a7a88f3f2e8b3806b8340bf6fe1a
NEXT_PUBLIC_R2_ACCESS_KEY_ID=sua_access_key
NEXT_PUBLIC_R2_SECRET_ACCESS_KEY=sua_secret_key
```

### 2. Criar Tabela no Supabase

Execute o SQL em `supabase-migration.sql` no Supabase SQL Editor:

```bash
# Acesse: https://supabase.com/dashboard/project/_/sql
# Cole e execute o conteúdo de supabase-migration.sql
```

### 3. Configurar CORS no R2

O CORS já está configurado para `http://localhost:3000`. Para produção, adicione:

```
Origins: https://seu-dominio.vercel.app
Methods: GET, PUT, POST, DELETE
Headers: *
```

### 4. Atualizar Código

O sistema agora usa automaticamente R2 + Supabase quando as variáveis estão configuradas.

```typescript
import { cloudStorage } from '@/lib/cloud-storage';

// Verificar se está configurado
if (cloudStorage.isReady()) {
  await cloudStorage.saveRelatorio(relatorio);
} else {
  // Usar IndexedDB como fallback
  await saveToIndexedDB(relatorio);
}
```

## 📊 Estrutura

```
📁 lib/
  ├── r2-storage.ts          # Upload/download R2
  ├── supabase-db.ts         # CRUD Supabase DB
  └── cloud-storage.ts       # Sistema unificado

📁 Supabase DB:
  └── relatorios (tabela)
      ├── id
      ├── tipo_servico
      ├── titulo
      ├── data
      ├── dados (JSONB completo)
      └── created_at, updated_at

📁 Cloudflare R2:
  └── limpebras-relatorios/
      ├── fotos/{relatorio_id}/
      ├── equipe/{relatorio_id}/
      ├── mapas/{relatorio_id}/
      └── servicos/{relatorio_id}/
```

## 💰 Custos

| Volume | Custo Mensal |
|--------|--------------|
| 0-10 GB | **Grátis** |
| 50 GB | ~R$ 6.00 |
| 100 GB | ~R$ 13.50 |

**Nota:** Egress (download) é gratuito no R2!

## 🔄 Migração de Dados

### Migrar IndexedDB → Cloud

```typescript
// app/api/migrate-data/route.ts
import { listReports } from '@/lib/storage';
import { cloudStorage } from '@/lib/cloud-storage';

export async function POST() {
  const localReports = await listReports();
  
  for (const report of localReports) {
    await cloudStorage.saveRelatorio(report);
  }
  
  return { migrated: localReports.length };
}
```

## ⚠️ Troubleshooting

### "Cloud storage não configurado"
- Verifique se `.env.local` existe
- Verifique se as variáveis estão corretas
- Reinicie o servidor de desenvolvimento

### "Erro ao fazer upload no R2"
- Verifique CORS no bucket
- Verifique credenciais R2
- Verifique tamanho do arquivo (máx 5GB)

### "Erro ao salvar no Supabase"
- Verifique conexão com banco
- Verifique se a tabela existe
- Verifique RLS policies

## ✅ Teste

```typescript
import { cloudStorage } from '@/lib/cloud-storage';

// Verificar configuração
console.log('Configurado?', cloudStorage.isReady());

// Testar upload
const relatorio = { /* ... */ };
await cloudStorage.saveRelatorio(relatorio);
```

