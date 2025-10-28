# Sistema de Relatórios - Limpebras

Sistema completo para gestão de relatórios operacionais.

## 🚀 Funcionalidades Principais

### 📋 Sistema de Relatórios
- **Mutirões**: Gestão completa de mutirões com evidências fotográficas
- **Registros**: Registros fotográficos de ações
- **Revitalizações**: Controle de revitalizações
- **Serviços Rotineiros**: Gestão de serviços rotineiros
- **Evidências**: Geração de evidências em PDF

### 📁 Upload de Documentos
- **Upload Simples**: Envio direto para nuvem via Supabase
- **Múltiplos Formatos**: PDF, Excel, Word, Fotos/Imagens
- **Tamanho máximo**: 50MB por arquivo

## 🛠️ Tecnologias

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Storage**: IndexedDB (local) + Supabase (uploads opcional)
- **PDF**: Puppeteer para geração de relatórios
- **Deploy**: Vercel

## ⚙️ Configuração

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar Projeto (sem .env necessário)
```bash
npm run dev
```

**Observação**: A aplicação funciona SEM .env. Os relatórios são salvos localmente (IndexedDB).

### 3. Upload de Documentos (Opcional - requer Supabase)
Se quiser usar uploads de documentos, crie `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

## 📱 Como Usar

### Sistema de Relatórios
1. Acesse **/relatorios** para ver seus relatórios
2. Clique em **Cadastro** → escolha o tipo de relatório
3. Preencha os dados e adicione fotos
4. Clique em **Gerar PDF** ou **Salvar Evidências**

### Upload de Documentos (Opcional)
1. Acesse **/upload**
2. Faça upload de documentos para Supabase Storage

## 🔧 Deploy na Vercel

### Configuração Inicial
1. Conecte o repositório: https://github.com/MarcosSantos-1/limpebras-relatorios
2. A Vercel vai detectar automaticamente as configurações do `vercel.json`
3. Se usar uploads, configure as variáveis de ambiente no painel da Vercel

### Atualizar Deploy
- **Método 1**: Push para `main` ou `master` → Deploy automático
- **Método 2**: Acesse Vercel Dashboard → Deployments → Redeploy

### Timeout dos PDFs
O `vercel.json` já está configurado com timeouts aumentados:
- PDFs: 300 segundos (5 minutos)
- Evidências: 300 segundos
- Outras APIs: 30 segundos

## 📋 Armazenamento

- **Relatórios**: IndexedDB (navegador do usuário)
- **Uploads**: Supabase Storage (se configurado)
- **Sem Backend**: Sistema funciona 100% sem servidor

## 🐛 Solução de Problemas

### PDF não gera
- Verifique timeout configurado no `vercel.json`
- Limite de imagens por relatório

### Upload não funciona
- Verifique se `.env.local` está configurado
- Verifique credenciais do Supabase

### Deploy na Vercel não atualiza
1. Verifique se o push foi feito: `git log --oneline -1`
2. Force deploy: Vercel Dashboard → Redeploy
3. Verifique build logs na Vercel

---

**Sistema pronto para produção!** 🚀

## 📝 Notas Técnicas

- **Sem Autenticação**: Sistema funciona sem login (auth desativada)
- **Local First**: Todos os dados ficam no navegador
- **Offline Ready**: Funciona sem internet (exceto uploads)
- **Mobile Friendly**: Responsivo e otimizado
