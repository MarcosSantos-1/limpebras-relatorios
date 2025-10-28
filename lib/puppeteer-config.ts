/**
 * Configuração centralizada do Puppeteer para Vercel
 * 
 * Esta função centraliza a configuração do Puppeteer para funcionar
 * corretamente em ambientes serverless como a Vercel.
 */

import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

// Importar puppeteer completo para desenvolvimento
let puppeteerDev: any = null;
if (process.env.NODE_ENV !== 'production') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    puppeteerDev = require('puppeteer');
  } catch (error) {
    console.log('Puppeteer completo não disponível, usando puppeteer-core');
  }
}

export async function getPuppeteerConfig() {
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Verificar se está em Docker com Chromium instalado
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    console.log('🐳 Usando Chromium do Docker:', process.env.PUPPETEER_EXECUTABLE_PATH);
 элемен return {
      headless: true as any,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=IsolateOrigins,site-per-process',
        '--disable-site-isolation-trials',
        '--disable-background-networking',
        '--disable-background-timer-throttling',
        '--disable-breakpad',
        '--disable-client-side-phishing-detection',
        '--disable-default-apps',
        '--disable-hang-monitor',
        '--disable-popup-blocking',
        '--disable-prompt-on-repost',
        '--disable-sync',
        '--disable-translate',
        '--metrics-recording-only',
        '--no-crash-upload',
        '--no-default-browser-check',
        '--no-pings',
        '--password-store=basic',
        '--use-mock-keychain',
        '--single-process'
      ],
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      timeout: 60000,
    };
  }
  
  if (isProduction) {
    // Vercel - usar chromium do sparticuz
    console.log('☁️ Usando Chromium do Sparticuz para Vercel');
    if (!process.env.CHROMIUM_EXECUTABLE_PATH) {
      chromium.font(process.env.CHROMIUM_FONTS_PATH || '/tmp/fonts');
    }
    
    return {
      headless: chromium.headless as boolean,
      args: [...chromium.args, '--single-process', '--disable-dev-shm-usage'],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
    };
  } else {
    // Configuração para desenvolvimento local
    if (puppeteerDev) {
      // Usar puppeteer completo se disponível (sem executablePath necessário)
      return {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-accelerated-2d-canvas',
          '--no-first-run',
          '--disable-gpu',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding'
        ],
        timeout: 600000 // 10 minutos de timeout para relatórios grandes
      };
    } else {
      // Tentar usar Chrome instalado no sistema
      const possibleChromePaths = [
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Windows
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // Windows
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // macOS
        '/usr/bin/google-chrome', // Linux
        '/usr/bin/chromium-browser', // Linux
      ];

      const { default: fs } = await import('fs');
      const executablePath = possibleChromePaths.find(path => {
        try {
          return fs.existsSync(path);
        } catch {
          return false;
        }
      });

      if (!executablePath) {
        throw new Error('Chrome/Chromium não encontrado no sistema. Instale o Google Chrome ou use `npm install puppeteer` para desenvolvimento.');
      }

      return {
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu'
        ],
        executablePath,
        timeout: 600000
      };
    }
  }
}

/**
 * Função auxiliar para gerar PDF a partir de HTML
 * Configurada especificamente para Vercel
 */
export async function generatePDFFromHTML(html: string): Promise<Buffer> {
  // Usar puppeteer completo diretamente em desenvolvimento
  const puppeteerInstance = (process.env.NODE_ENV !== 'production' && puppeteerDev) ? puppeteerDev : puppeteer;
  
  const browser = await puppeteerInstance.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });
  
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1123, height: 794 }); // A4 landscape em pixels
    
    // Carregar HTML na página
    await page.setContent(html, { 
      waitUntil: 'networkidle0',
      timeout: 300000 // 5 minutos para carregar HTML com muitas imagens
    });
    
    // Aguardar um pouco mais para garantir que as imagens carreguem
    await new Promise(resolve => setTimeout(resolve, 10000)); // Aumentado para 10 segundos
    
    const pdfBuffer = await page.pdf({
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm'
      }
    });
    
    return Buffer.from(pdfBuffer);
  } finally {
    await browser.close();
  }
}
