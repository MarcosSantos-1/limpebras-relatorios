FROM node:18-alpine

# Instalar Chromium e dependências necessárias
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    font-noto-emoji \
    tzdata

# Definir variável de ambiente para o Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
    CHROMIUM_PATH=/usr/bin/chromium-browser

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar TODAS as dependências (incluindo dev para build)
RUN npm ci

# Copiar código fonte
COPY . .

# Construir aplicação Next.js
RUN npm run build

# Remover devDependencies após build
RUN npm prune --production

# Expor porta
EXPOSE 10000

# Variável de ambiente do Render
ENV PORT=10000

# Comando de inicialização
CMD ["npm", "start"]

