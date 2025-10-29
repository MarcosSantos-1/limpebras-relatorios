# Deploy no Fly.io

## Configuração inicial

1. Instale o Fly CLI:
```bash
# macOS
brew install flyctl

# Outros sistemas
curl -L https://fly.io/install.sh | sh
```

2. Faça login:
```bash
fly auth login
```

3. Crie a aplicação:
```bash
fly launch
```

## Deploy

Para fazer deploy, execute:
```bash
fly deploy
```

## Variáveis de ambiente

Configure as variáveis de ambiente necessárias no Fly.io:
```bash
fly secrets set FIREBASE_API_KEY="..."
fly secrets set FIREBASE_AUTH_value="..."
# etc
```

Ou configure via dashboard:
1. Acesse https://fly.io/dashboard
2. Selecione sua aplicação
3. Vá em Settings > Secrets
4. Adicione as variáveis necessárias

## Comandos úteis

```bash
# Ver logs
fly logs

# Ver status
fly status

# SSH na máquina
.Items deploy

# Ver variáveis de ambiente
fly secrets list

# Escalar aplicação
fly scale count 1
```

