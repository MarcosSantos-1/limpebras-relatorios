# Deploy no Render

## Passo a Passo para Deploy no Render

### Opção 1: Deploy via Git (Automático)

1. **Acesse o Render Dashboard**
   - Vá para https://render.com
   - Faça login ou crie uma conta

2. **Criar Novo Web Service**
   - Clique em "New +" → "Web Service"
   - Conecte seu repositório do GitHub: https://github.com/MarcosSantos-1/limpebras-relatorios
   - Selecione o repositório

3. **Configurar o Serviço**
   - **Name**: `relatorios-app` (ou o nome que preferir)
   - **Region**: São Paulo (ou a região mais próxima)
   - **Branch**: `main`
   - **Runtime**: Docker
   - **Dockerfile Path**: `./Dockerfile`
   - **Docker Context**: `.` (raiz do projeto)
   - **Instance Type**: Recomendado `Standard` ou maior para melhor performance

4. **Variáveis de Ambiente** (se necessário)
   - `NODE_ENV`: `production`
   - `NEXT_PUBLIC_SUPABASE_URL`: (se configurou Supabase)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (se configurou Supabase)

5. **Health Check Path**
   - Deixe como `/` ou `/_health`

6. **Auto-Deploy**
   - ✅ Habilitar "Auto-Deploy"

7. **Criar o Serviço**
   - Clique em "Create Web Service"
   - Aguarde o build e deploy (5-10 minutos)

### Opção 2: Deploy via CLI

```bash
# Instalar Render CLI
npm install -g render-cli

# Fazer login
render login

# Deploy
render deploy
```

### Após o Deploy

1. **Acesse a URL fornecida pelo Render**
   - Exemplo: `https://relatorios-app.onrender.com`

2. **Verificar logs se houver problemas**
   - Na dashboard do Render, vá em "Logs"

3. **Monitorar saúde do serviço**
   - Verificar se o health check está passando

### Troubleshooting

**Se o build falhar:**
- Verifique os logs no Render Dashboard
- Certifique-se que todas as dependências estão no `package.json`

**Se o serviço não iniciar:**
- Verifique se a porta está correta (Render usa PORT dinâmico)
- Verifique os logs de runtime

**Se os PDFs não gerarem:**
- Verifique se o Chromium foi instalado corretamente
- Veja os logs de erro no Render

### Custos

- Render oferece plano gratuito limitado
- Para produção, considere o plano Standard ($7/mês)
- Verifique os limites de timeout e recursos

### Suporte

- Dashboard Render: https://dashboard.render.com
- Documentação: https://render.com/docs

