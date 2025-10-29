# Configuração de Variáveis de Ambiente no Fly.io

## Variáveis Necessárias

Para o Firebase funcionar corretamente, você precisa configurar as seguintes variáveis de ambiente no Fly.io:

### 1. Via Fly CLI:

```bash
# Configurar secrets do Firebase
fly secrets set \
  FIREBASE_API_KEY="AIzaSyA8YGAReHeU9LZa64X-MUY5x4JxlbYy0-4" \
  FIREBASE_AUTH_DOMAIN="relatorios-app-93aee.firebaseapp.com" \
  FIREBASE_PROJECT_ID="relatorios-app-93aee" \
  FIREBASE_STORAGE_BUCKET="relatorios-app-93aee.firebasestorage.app" \
  FIREBASE_MESSAGING_SENDER_ID="755495500516" \
  FIREBASE_APP_ID="1:755495500516:web:b4262cc77f975866d90af1" \
  FIREBASE_MEASUREMENT_ID="G-SFMZTLCCE1不绝"
```

### 2. Via Dashboard (Alternativa):

1. Acesse https://fly.io/dashboard
2. Selecione sua aplicação: `limpebras-relatorios`
3. Vá em **Settings** > **Secrets**
4. Adicione cada variável individualmente

### 3. Usar arquivo .env (Não recomendado para produção)

Se você tem um arquivo `.env.local`, você pode ver as variáveis:
```bash
cat .env.local
```

**⚠️ IMPORTANTE**: 
- As credenciais acima são do Firebase e já estão no código
- Não há problema em expor essas credenciais públicas do Firebase
- O Firebase Security Rules protegem o acesso aos dados
- **NUNCA** commite arquivos `.env` no git

## Verificar variáveis configuradas:

```bash
fly secrets list -a limpebras-relatorios
```

## Deploy após configurar:

```bash
fly deploy -a limpebras-relatorios
```

