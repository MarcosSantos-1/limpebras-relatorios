module.exports = [
"[project]/.next-internal/server/app/api/export-evidencias-revitalizacoes/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/puppeteer-core [external] (puppeteer-core, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("puppeteer-core");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@sparticuz/chromium-min [external] (@sparticuz/chromium-min, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@sparticuz/chromium-min");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/puppeteer [external] (puppeteer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("puppeteer", () => require("puppeteer"));

module.exports = mod;
}),
"[project]/lib/puppeteer-config.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Configuração centralizada do Puppeteer para Vercel
 * 
 * Esta função centraliza a configuração do Puppeteer para funcionar
 * corretamente em ambientes serverless como a Vercel.
 */ __turbopack_context__.s([
    "generatePDFFromHTML",
    ()=>generatePDFFromHTML,
    "getPuppeteerConfig",
    ()=>getPuppeteerConfig
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/puppeteer-core [external] (puppeteer-core, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$sparticuz$2f$chromium$2d$min__$5b$external$5d$__$2840$sparticuz$2f$chromium$2d$min$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@sparticuz/chromium-min [external] (@sparticuz/chromium-min, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$sparticuz$2f$chromium$2d$min__$5b$external$5d$__$2840$sparticuz$2f$chromium$2d$min$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$sparticuz$2f$chromium$2d$min__$5b$external$5d$__$2840$sparticuz$2f$chromium$2d$min$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// Importar puppeteer completo para desenvolvimento
let puppeteerDev = null;
if ("TURBOPACK compile-time truthy", 1) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        puppeteerDev = __turbopack_context__.r("[externals]/puppeteer [external] (puppeteer, cjs)");
    } catch (error) {
        console.log('Puppeteer completo não disponível, usando puppeteer-core');
    }
}
async function getPuppeteerConfig() {
    const isProduction = ("TURBOPACK compile-time value", "development") === 'production';
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // Configuração para desenvolvimento local
        if (puppeteerDev) {
            // Usar puppeteer completo se disponível
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
            // Fallback para puppeteer-core com executablePath
            return {
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-gpu'
                ],
                executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
                timeout: 600000
            };
        }
    }
}
async function generatePDFFromHTML(html) {
    // Usar puppeteer completo diretamente em desenvolvimento
    const puppeteerInstance = ("TURBOPACK compile-time value", "development") !== 'production' && puppeteerDev ? puppeteerDev : __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__["default"];
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
        await page.setViewport({
            width: 1123,
            height: 794
        }); // A4 landscape em pixels
        // Carregar HTML na página
        await page.setContent(html, {
            waitUntil: 'networkidle0',
            timeout: 300000 // 5 minutos para carregar HTML com muitas imagens
        });
        // Aguardar um pouco mais para garantir que as imagens carreguem
        await new Promise((resolve)=>setTimeout(resolve, 10000)); // Aumentado para 10 segundos
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
    } finally{
        await browser.close();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ECOPONTOS_POR_SUBREGIAO",
    ()=>ECOPONTOS_POR_SUBREGIAO,
    "SERVICOS_DDS",
    ()=>SERVICOS_DDS,
    "SERVICOS_MUTIRAO",
    ()=>SERVICOS_MUTIRAO,
    "SERVICOS_REGISTRO",
    ()=>SERVICOS_REGISTRO,
    "SUB_REGIOES",
    ()=>SUB_REGIOES,
    "TIPOS_SERVICO",
    ()=>TIPOS_SERVICO,
    "TITULOS_RELATORIOS",
    ()=>TITULOS_RELATORIOS
]);
const SUB_REGIOES = {
    SP: "SÃO PAULO",
    CV: "CASA VERDE / LIMÃO / CACHOEIRINHA",
    JT: "JAÇANÃ / TREMEMBÉ",
    MG: "VILA MARIA / VILA GUILHERME",
    ST: "SANTANA / TUCURUVI"
};
const TIPOS_SERVICO = {
    MUTIRAO: "Mutirão - SELIMP",
    REVITALIZACAO: "Revitalização de Pontos Viciados",
    ACUMULADOR: "Ação de Acumulador",
    ALAGAMENTOS: "Limpeza Pós Alagamento",
    ZELADORIA: "Zeladoria",
    DDS: "DDS",
    HIGIENIZACAO: "Higienização, manutenção, instalação, remoção e reposição de Papeleiras",
    VARRICAO_MECANIZADA: "Varrição Mecanizada",
    FEIRAS: "Feiras",
    EVENTOS: "Eventos",
    ROTINEIROS: "Serviços Rotineiros"
};
const TITULOS_RELATORIOS = {
    MUTIRAO: "RELATÓRIO OPERAÇÃO SÃO PAULO LIMPA",
    REVITALIZACAO: "RELATÓRIO DE REVITALIZAÇÃO",
    ACUMULADOR: "RELATÓRIO DE AÇÃO ACUMULADOR",
    ALAGAMENTOS: "RELATÓRIO DE LIMPEZA PÓS ALAGAMENTO",
    ZELADORIA: "RELATÓRIO DE ZELADORIA",
    DDS: "DDS",
    HIGIENIZACAO: "RELATÓRIO DE HIGIENIZAÇÃO",
    VARRICAO_MECANIZADA: "RELATÓRIO DE VARRICAO MECANIZADA",
    FEIRAS: "RELATÓRIO DE FEIRAS",
    EVENTOS: "RELATÓRIO DE EVENTOS",
    ROTINEIROS: "RELATÓRIO DE SERVIÇOS ROTINEIROS"
};
const SERVICOS_REGISTRO = [
    "Acumulador",
    "Alagamentos",
    "Zeladoria"
];
const SERVICOS_MUTIRAO = [
    "Capinação e Roçagem",
    "Cata Bagulho",
    "Coleta manual e transporte de materiais diversos/entulho",
    "Coleta mecanizada e transporte de materiais diversos e de entulho",
    "Grandes Objetos - Coleta e transporte de objetos volumosos",
    "Higienização, manutenção, instalação, remoção e reposição de Papeleiras",
    "Lavagem Especial de Equipamentos Públicos",
    "Limpeza de Boca de Lobo",
    "Equipe de Mutirão de Vias",
    "Raspagem da terra e areia nas sarjetas de vias públicas",
    "Remoção de faixas e propagandas irregulares",
    "Serviço de pintura de meio fio",
    "Varrição Manual de Vias e Logradouros Publicos",
    "Varrição Mecanizada",
    "Equipe de Asseio em Locais com População em Situação de Rua",
    "Varrição de Praça",
    "Feiras",
    "Ecopontos"
];
const SERVICOS_DDS = [
    "Casa Verde / Limão / Cachoeirinha",
    "Jaçanã / Tremembé",
    "Vila Maria / Vila Guilherme",
    "Santana / Tucuruvi",
    "Equipe Diurna - Mutirão de zeladoria de vias",
    "Equipe Noturna- Mutirão de zeladoria de vias",
    "Tráfego",
    "Evidências"
];
const ECOPONTOS_POR_SUBREGIAO = {
    CV: [
        "Ecoponto Vila Nova Cachoeirinha",
        "Ecoponto Vila Santa Maria",
        "Ecoponto Parque Peruche",
        "Ecoponto Jardim Antártica",
        "Ecoponto São Leandro"
    ],
    MG: [
        "Ecoponto Vila Sabrina",
        "Ecoponto Vila Guilherme",
        "Ecoponto Vila Maria"
    ],
    ST: [
        "Ecoponto Santana",
        "Ecoponto Tucuruvi"
    ],
    JT: [
        "Ecoponto Anselmo Machado",
        "Ecoponto Silvio Bittencourt"
    ]
};
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lib/pdf/image-loader.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImageUrls",
    ()=>getImageUrls
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
/**
 * Carrega uma imagem do diretório public e converte para base64
 * @param imagePath - Caminho da imagem relativo ao diretório public
 * @returns String base64 da imagem ou string vazia em caso de erro
 */ function loadImageAsBase64(imagePath) {
    try {
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', imagePath);
        const imageBuffer = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath);
        const base64 = imageBuffer.toString('base64');
        const extension = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(imagePath).slice(1);
        return `data:image/${extension};base64,${base64}`;
    } catch (error) {
        console.error(`Erro ao carregar imagem ${imagePath}:`, error);
        return '';
    }
}
function getImageUrls() {
    return {
        cover: loadImageAsBase64('imgs/cover.png'),
        logo: loadImageAsBase64('imgs/logo.png'),
        line: loadImageAsBase64('imgs/line.png'),
        prefeitura: loadImageAsBase64('imgs/prefeitura.png'),
        info156: loadImageAsBase64('imgs/156.png')
    };
}
}),
"[project]/lib/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Funções utilitárias para formatação e manipulação de dados
__turbopack_context__.s([
    "formatDateBR",
    ()=>formatDateBR,
    "formatDateForCover",
    ()=>formatDateForCover,
    "formatDateForPhotos",
    ()=>formatDateForPhotos,
    "formatDateISO",
    ()=>formatDateISO,
    "formatDateWithWeekday",
    ()=>formatDateWithWeekday,
    "formatPeriodForPhotos",
    ()=>formatPeriodForPhotos,
    "formatPeriodForServicePage",
    ()=>formatPeriodForServicePage
]);
function formatDateBR(dateStr) {
    if (!dateStr) return "";
    // Se já está no formato DD/MM/YYYY, retorna como está
    if (dateStr.includes('/')) {
        return dateStr;
    }
    // Se é uma data ISO com horário, extrair apenas a parte da data
    let datePart = dateStr;
    if (dateStr.includes('T')) {
        datePart = dateStr.split('T')[0];
    }
    // Converte de YYYY-MM-DD para DD/MM/YYYY
    const parts = datePart.split('-');
    if (parts.length === 3) {
        const [year, month, day] = parts;
        return `${day}/${month}/${year}`;
    }
    return dateStr;
}
function formatDateWithWeekday(dateStr) {
    if (!dateStr) return "";
    // Se é uma data ISO com horário, extrair apenas a parte da data
    let datePart = dateStr;
    if (dateStr.includes('T')) {
        datePart = dateStr.split('T')[0];
    }
    // Converter para objeto Date
    const date = new Date(datePart + 'T00:00:00');
    // Dias da semana em português
    const weekdays = [
        'DOM',
        'SEG',
        'TER',
        'QUA',
        'QUI',
        'SEX',
        'SAB'
    ];
    const weekday = weekdays[date.getDay()];
    // Formatar data no padrão DD/MM/YYYY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${weekday} - ${day}/${month}/${year}`;
}
function formatDateISO(dateStr) {
    if (!dateStr) return "";
    // Se já está no formato YYYY-MM-DD, retorna como está
    if (dateStr.includes('-')) {
        return dateStr;
    }
    // Converte de DD/MM/YYYY para YYYY-MM-DD
    const parts = dateStr.split('/');
    if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${year}-${month}-${day}`;
    }
    return dateStr;
}
function formatDateForCover(dateStr) {
    if (!dateStr) return "";
    let day, month, year;
    // Parse da data no formato DD/MM/YYYY ou YYYY-MM-DD
    if (dateStr.includes('/')) {
        const parts = dateStr.split('/');
        day = parseInt(parts[0]);
        month = parseInt(parts[1]);
        year = parseInt(parts[2]);
    } else {
        const parts = dateStr.split('-');
        year = parseInt(parts[0]);
        month = parseInt(parts[1]);
        day = parseInt(parts[2]);
    }
    const monthNames = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    return `São Paulo, ${day} de ${monthNames[month - 1]} de ${year}`;
}
function formatDateForPhotos(dateStr) {
    if (!dateStr) return "";
    let day, month, year;
    // Parse da data no formato DD/MM/YYYY ou YYYY-MM-DD
    if (dateStr.includes('/')) {
        const parts = dateStr.split('/');
        day = parseInt(parts[0]);
        month = parseInt(parts[1]);
        year = parseInt(parts[2]);
    } else {
        const parts = dateStr.split('-');
        year = parseInt(parts[0]);
        month = parseInt(parts[1]);
        day = parseInt(parts[2]);
    }
    // Formatar com zeros à esquerda se necessário
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    return `${dayStr}/${monthStr}/${year}`;
}
function formatPeriodForPhotos(dataInicio, dataTermino) {
    const inicioFormatado = formatDateForPhotos(dataInicio);
    if (!dataTermino || dataInicio === dataTermino) {
        return inicioFormatado;
    }
    const terminoFormatado = formatDateForPhotos(dataTermino);
    return `${inicioFormatado} a ${terminoFormatado}`;
}
function formatPeriodForServicePage(relatorio) {
    if (relatorio.tipoServico === 'MUTIRAO' && 'data' in relatorio) {
        // Para mutirão, usar formato "São Paulo, 18 de Setembro de 2025"
        return formatDateForCover(relatorio.data);
    } else if ('dataInicio' in relatorio && 'dataTermino' in relatorio) {
        // Para outros serviços com período
        const inicioFormatado = formatDateForPhotos(relatorio.dataInicio || '');
        if (!relatorio.dataTermino || relatorio.dataInicio === relatorio.dataTermino) {
            return `Data: ${inicioFormatado}`;
        }
        const terminoFormatado = formatDateForPhotos(relatorio.dataTermino);
        return `Período: ${inicioFormatado} a ${terminoFormatado}`;
    } else if ('data' in relatorio) {
        // Para revitalização (data única)
        return `Data: ${formatDateForPhotos(relatorio.data)}`;
    }
    return "";
}
}),
"[project]/lib/pdf/relatorios-modern.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "exportRevitalizacoesConsolidadoPdf",
    ()=>exportRevitalizacoesConsolidadoPdf,
    "exportUnifiedPdf",
    ()=>exportUnifiedPdf,
    "generateRevitalizacoesConsolidadoHTML",
    ()=>generateRevitalizacoesConsolidadoHTML
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/puppeteer-core [external] (puppeteer-core, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/puppeteer-config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/image-loader.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
// Função para formatar data para a capa
function formatDateForCover(date) {
    let d;
    if (typeof date === 'string') {
        // Parse manual para evitar problemas de fuso horário
        if (date.includes('/')) {
            const parts = date.split('/');
            const day = parseInt(parts[0]);
            const month = parseInt(parts[1]) - 1; // JavaScript months are 0-based
            const year = parseInt(parts[2]);
            d = new Date(year, month, day);
        } else {
            // Formato ISO (YYYY-MM-DD)
            const parts = date.split('-');
            const year = parseInt(parts[0]);
            const month = parseInt(parts[1]) - 1; // JavaScript months are 0-based
            const day = parseInt(parts[2]);
            d = new Date(year, month, day);
        }
    } else {
        d = date;
    }
    const month = d.toLocaleDateString('pt-BR', {
        month: 'long'
    });
    const year = d.getFullYear();
    return `São Paulo, ${month.charAt(0).toUpperCase() + month.slice(1)} de ${year}`;
}
// Função para obter o título do serviço baseado no tipo
function getServiceTitle(tipoServico) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TITULOS_RELATORIOS"][tipoServico] || 'RELATÓRIO DE SERVIÇO';
}
// Função para obter a sub-região baseada no tipo de relatório
function getSubRegion(rel) {
    if ('sub' in rel) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][rel.sub] || rel.sub;
    }
    if ('secoes' in rel && rel.secoes.length > 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][rel.secoes[0].sub] || rel.secoes[0].sub;
    }
    return 'N/A';
}
// Função para obter a data baseada no tipo de relatório
function getReportDate(rel) {
    // Para DDS, usar apenas dataInicio (mês inicial)
    if (rel.tipoServico === 'DDS' && 'dataInicio' in rel && rel.dataInicio) {
        return formatDateForCover(rel.dataInicio);
    }
    // Para outros tipos, verificar se data é uma data válida (não contém " a ")
    if ('data' in rel && rel.data && !rel.data.includes(' a ')) {
        return formatDateForCover(rel.data);
    }
    // Fallback para dataInicio/dataTermino
    if ('dataInicio' in rel && 'dataTermino' in rel) {
        if (rel.dataInicio && rel.dataTermino) {
            if (rel.dataInicio === rel.dataTermino) {
                return formatDateForCover(rel.dataInicio);
            }
            return `${formatDateForCover(rel.dataInicio)} a ${formatDateForCover(rel.dataTermino)}`;
        }
        if (rel.dataInicio) {
            return formatDateForCover(rel.dataInicio);
        }
    }
    return formatDateForCover(new Date());
}
// Função para gerar HTML unificado para todos os tipos de relatório
function generateUnifiedHTML(rel) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    const serviceTitle = getServiceTitle(rel.tipoServico);
    const subRegion = getSubRegion(rel);
    const reportDate = getReportDate(rel);
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIPOS_SERVICO"][rel.tipoServico]}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Anton:wght@400&display=swap');
        
        /* ========================================
         * CONFIGURAÇÕES DE PÁGINA E AJUSTES
         * ========================================
         * 
         * ALTURA DAS CAPAS:
         * - Todas as capas: 100vh (altura total da viewport)
         * - Evita quebras de página desnecessárias
         * 
         * QUEBRAS DE PÁGINA:
         * - Última página: page-break-after: avoid (evita página em branco)
         * - Demais páginas: page-break-after: always
         */
        
        @page {
            size: A4 landscape;
            margin: 0;
        }
        
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 12px;
            line-height: 1.4;
        }
        
        .page {
            width: 297mm;
            height: 210mm;
            position: relative;
            overflow: hidden;
        }
        
        .page.cover-page,
        .page.service-page,
        .page.content-page {
            page-break-after: always;
        }
        
        .page:not(:last-child) {
            page-break-after: always;
        }
        
        .page:last-child {
            page-break-after: avoid;
        }
        
        /* CAPA */
        .cover-page {
            position: relative;
            width: 100%;
            height: 100vh; /* Altura total da viewport - AJUSTE PARA EVITAR QUEBRA DE PÁGINA */
            overflow: hidden;
        }
        
        .cover-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('${images.cover}') center/cover no-repeat;
            z-index: 1;
        }
        
        .cover-logo {
            position: absolute;
            top: -90px;
            right: 80px;
            width: 330px;
            height: 330px;
            background: url('${images.logo}') center/contain no-repeat;
            z-index: 3;
        }
        
        .cover-content {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: right;
            text-align: right;
        }
        
        .cover-title {
            font-family: 'Anton', sans-serif;
            font-size: 80px;
            font-weight: 600;
            color: rgb(0, 48, 107);
            line-height: 1.25;
            text-transform: uppercase;
            max-width: 440px;
            overflow-wrap: break-word;
            text-shadow: 2px 2px 4px rgba(255,255,255,0.8);
            letter-spacing: 0.25px;
            position: absolute;
            top: 270px;
            right: 50px;
            text-align: center;
            margin: 0;
        }
        .cover-title .break {
            display: block;
            margin-top: 0px;
        }
        
        .cover-date {
            font-size: 26px;
            color: rgb(0, 48, 107);
            font-weight: bold;
            position: absolute;
            right: 80px;
            top: 520px;
            margin-top: 0;
            margin-right: 0;
            text-align: right;
            width: auto;
        }
        
        /* PÁGINA DE SERVIÇO */
        .service-page {
            page-break-before: always;
            position: relative;
            width: 100%;
            min-height: calc(210mm - 0px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-sizing: border-box;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        .service-logo {
            position: absolute;
            top: -70px;
            left: 50%;
            transform: translateX(-50%);
            width: 280px;
            height: 280px;
            background: url('${images.logo}') center/contain no-repeat;
        }
        
        .service-title {
            font-family: 'Anton', sans-serif;
            font-size: 76px;
            font-weight: 600;
            color: rgb(0, 48, 107);
            margin-bottom: 100px;
            text-transform: uppercase;
            margin-top: 100px;
            max-width: 19.5cm;
            line-height: 1.2;
            letter-spacing: 1px;
        }
        
        .service-period {
            font-size: 26px;
            color: rgb(0, 48, 107);
            margin-bottom: 10px;
            font-weight: bold;
        }
        
        .service-subregion {
            font-size: 24px;
            color: rgb(0, 48, 107);
            margin-bottom: 50px;
        }
        
        .service-footer-line {
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 100%;
            height: 40px;
            background: url('${images.line}') no-repeat;
            background-size: 100% 100%;
            z-index: 10;
        }
        
        /* PÁGINA DE CONTEÚDO */
        .content-page {
            min-height: 210mm;;
        }
        .largura-fotografico {
            padding: 0px 60px 30px 30px;
        }

        .content-header {
            padding: 10px 20px;
            margin: 0 0 10px 0;
        }
        
        .content-header h2 {
            font-size: 20px;
            font-weight: bold;
        }
        
        .content-info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .content-info h3 {
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .content-info p {
            margin: 5px 0;
            color: #555;
        }
        
        /* GRID DE FOTOS DINÂMICO PARA REVITALIZAÇÃO - REFATORADO */
        .photos-grid {
            display: grid;
            gap: 15px;
            margin-top: 20px;
            justify-content: center;
            align-items: start;
            width: 100%;
            max-width: 100%;
        }
        
        /* Grid unificado - sempre 3 colunas */
        .photos-grid.one-photo {
            grid-template-columns: repeat(3, 1fr);
            max-width: 100%;
            margin: 15px 0 0 0;
        }
        
        .photos-grid.two-photos {
            grid-template-columns: repeat(3, 1fr);
            max-width: 100%;
            margin: 15px 0 0 0;
        }
        
        .photos-grid.three-photos {
            grid-template-columns: repeat(3, 1fr);
            max-width: 100%;
            margin: 15px 0 0 0;
        }
        
        /* Container da foto */
        .photo-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        
        .photo-container {
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 8px;
            background: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        /* Alturas dinâmicas baseadas no número de fotos - OTIMIZADAS PARA A4 LANDSCAPE */
        .photos-grid.one-photo .photo-container {
            min-height: 320px;
            max-height: 380px;
        }
        
        .photos-grid.two-photos .photo-container {
            min-height: 320px;
            max-height: 380px;
        }
        
        .photos-grid.three-photos .photo-container {
            min-height: 320px;
            max-height: 380px;
        }
        
        .photo-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
        
        .photo-description {
            font-size: 11px ;
            color: #2c3e50;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 5px;
            text-align: center;
            line-height: 1.2;
        }
        
        /* CABEÇALHO DA PÁGINA FOTOGRÁFICA */
        .photo-page-header {
            position: relative;
            color: white;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* Removido page-break-after e break-after */
        }
        
        .photo-page-header h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
        }
        
        .photo-logo {
            width: 40px;
            height: 40px;
            background: url('${images.logo}') center/contain no-repeat;
        }
        
        /* DESCRITORES */
        .photo-descriptors {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 20px;
            font-size: 12px;
            line-height: 1.0;
        }
        
        .descriptor-item {
            margin-bottom: 8px;
            color: #2c3e50;
        }
        
        .descriptor-item:last-child {
            margin-bottom: 0;
        }
        
        .descriptor-item strong {
            color: #34495e;
        }
        
        /* CABEÇALHO COM LOGOS PARA PÁGINAS FOTOGRÁFICAS */
        .photo-header-with-logos {
            position: relative;
            color: white;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 60px;
            /* Removido page-break-after e break-after */
        }
        
        .photo-header-with-logos h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            flex: 1;
            text-align: center;
        }
        
        .prefeitura-logo {
            width: 120px;
            height: 120px;
            background: url('${images.prefeitura}') center/contain no-repeat;
            margin-right: 20px;
        }
        
        .company-logo {
            width: 120px;
            height: 120px;
            background: url('${images.logo}') center/contain no-repeat;
            margin-left: 20px;
        }

        /* Controle específico para seção fotográfica */
        @media print {
            .content-page {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            .photos-grid {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            .photo-item {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            .photo-container {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            .photo-page-header,
            .photo-header-with-logos,
            .photo-descriptors {
                page-break-after: avoid;
                break-after: avoid;
            }
        }
        
        /* PÁGINA FINAL */
         .final-page {
            page-break-before: always;
            position: relative;
            width: 100%;
            min-height: calc(210mm - 0px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-sizing: border-box;
            break-inside: avoid;
            page-break-inside: avoid;
            /* Removido o padding da contracapa */
        }
        
        .final-logo {
            width: 18cm;
            height: 18cm;
            background: url('${images.logo}') center/contain no-repeat;
            margin-bottom: 50px;
        }
        
        .final-top-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 40px;
            background: url('${images.line}') repeat-x;
            background-size: contain;
            transform: scaleY(-1);
            z-index: 10;
        }
        
        .final-bottom-line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40px;
            background: url('${images.line}') repeat-x;
            background-size: contain;
            z-index: 10;
        }
        @media print {
            .page {
                margin: 0;
                box-shadow: none;
                break-inside: avoid;
                page-break-inside: avoid;
                /* padding já está aplicado */
            }
            
            /* Configurações específicas para quebra de página */
            .page.cover-page,
            .page.service-page,
            .page.content-page {
                page-break-after: always;
            }
            
            .page:last-child {
                page-break-after: avoid;
            }
            
            /* Evitar quebras dentro de elementos importantes */
            .photo-header-with-logos,
            .photo-descriptors {
                page-break-after: avoid;
                break-after: avoid;
            }
            
            /* Controle específico para seção fotográfica */
            .content-page {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            .photos-grid {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            .photo-item {
                page-break-inside: avoid;
                break-inside: avoid;
            }
            
            .photo-container {
                page-break-inside: avoid;
                break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <!-- CAPA -->
    <div class="page cover-page">
        <div class="cover-background"></div>
        <div class="cover-logo"></div>
        <div class="cover-content">
            <h1 class="cover-title">RELATÓRIO DE <br> EVIDÊNCIAS</h1>
            <div class="cover-date">${reportDate}</div>
        </div>
    </div>
    
    <!-- PÁGINA DE SERVIÇO -->
    <div class="page service-page">
        <div class="service-logo"></div>
        <div class="service-title">${serviceTitle}</div>
        <div class="service-period">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPeriodForServicePage"])(rel)}</div>
        <div class="service-subregion">${subRegion}</div>
        <div class="service-footer-line"></div>
    </div>
    
    ${rel.tipoServico !== 'MUTIRAO' && 'fotos' in rel && rel.fotos && rel.fotos.length > 0 ? `
    ${(()=>{
        // Ordenar fotos pela ordem de upload
        const fotosOrdenadas = rel.fotos.sort((a, b)=>{
            const ordemA = a.ordem || 0;
            const ordemB = b.ordem || 0;
            return ordemA - ordemB;
        });
        const totalPages = Math.ceil(fotosOrdenadas.length / 3);
        let html = '';
        for(let pageIndex = 0; pageIndex < totalPages; pageIndex++){
            const startIndex = pageIndex * 3;
            const endIndex = startIndex + 3;
            const pagePhotos = fotosOrdenadas.slice(startIndex, endIndex);
            const isFirstPage = pageIndex === 0;
            // Só criar página se houver fotos
            if (pagePhotos.length > 0) {
                html += `
          <!-- PÁGINA FOTOGRÁFICA ${pageIndex + 1} -->
          <div class="page content-page">
            <div class="largura-fotografico"> 
           

              <div class="photo-header-with-logos">
                  <div class="prefeitura-logo"></div>
                  <div class="company-logo"></div>
              </div>
              
              ${isFirstPage || rel.tipoServico === 'ACUMULADOR' || rel.tipoServico === 'ALAGAMENTOS' || rel.tipoServico === 'DDS' ? `
              <div class="photo-descriptors">
                  <div class="descriptor-item">
                      <strong>PREFEITURA REGIONAL:</strong> ${subRegion}
                  </div>
                  <div class="descriptor-item">
                      <strong>Serviço(s):</strong> ${rel.tipoServico === 'ACUMULADOR' ? 'Ação Acumulador: Coleta e Limpeza' : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIPOS_SERVICO"][rel.tipoServico]}
                  </div>
                  ${rel.tipoServico !== 'DDS' ? `
                  <div class="descriptor-item">
                      <strong>Local / Evento:</strong> ${rel.tipoServico === 'REVITALIZACAO' && 'local' in rel ? rel.local : 'endereco' in rel ? rel.endereco : 'N/A'}
                  </div>
                  ` : ''}
                  ${rel.tipoServico === 'REVITALIZACAO' ? `
                  <div class="descriptor-item">
                      <strong>Frequência:</strong> ${'frequencia' in rel ? rel.frequencia : 'N/A'}
                  </div>
                  <div class="descriptor-item">
                      <strong>Peso Coletado:</strong> ${'peso' in rel && typeof rel.peso === 'string' && rel.peso.trim() !== '' ? rel.peso : 'N/A'}
                  </div>
                  ` : rel.tipoServico !== 'DDS' ? `
                  <div class="descriptor-item">
                      <strong>Descrição:</strong> ${'descricao' in rel ? rel.descricao : 'N/A'}
                  </div>
                  ` : ''}
                  <div class="descriptor-item">
                      <strong>${rel.tipoServico === 'DDS' ? 'Período:' : 'Período/ Data:'}</strong> ${'dataInicio' in rel && 'dataTermino' in rel && rel.dataInicio && rel.dataTermino ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPeriodForPhotos"])(rel.dataInicio, rel.dataTermino) : 'data' in rel && rel.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForPhotos"])(rel.data) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForPhotos"])(new Date().toLocaleDateString('pt-BR'))}
                  </div>
              </div>
              ` : ''}
              
              <div class="photos-grid ${pagePhotos.length === 1 ? 'one-photo' : pagePhotos.length === 2 ? 'two-photos' : 'three-photos'}">
                  ${pagePhotos.map((foto, index)=>`
                      <div class="photo-item">
                          <div class="photo-container">
                              <img src="${foto.url}" alt="Foto ${startIndex + index + 1}" />
                          </div>
                          ${foto.descricao || ('etapa' in foto ? foto.etapa : '') ? `<div class="photo-description">${foto.descricao || ('etapa' in foto ? foto.etapa : '')}</div>` : ''}
                      </div>
                  `).join('')}
              </div>
            </div>

          </div>
          `;
            }
        }
        return html;
    })()}
    ` : ''}
    
    <!-- PÁGINA FINAL -->
    <div class="page final-page">
        <div class="final-top-line"></div>
        <div class="final-logo"></div>
        <div class="final-bottom-line"></div>
    </div>
</body>
</html>
  `;
}
async function exportUnifiedPdf(rel) {
    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPuppeteerConfig"])();
    const browser = await __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__["default"].launch(config);
    try {
        const page = await browser.newPage();
        await page.setViewport({
            width: 1123,
            height: 794
        }); // A4 landscape em pixels
        const html = generateUnifiedHTML(rel);
        await page.setContent(html, {
            waitUntil: 'networkidle0'
        });
        // Aguardar um pouco mais para garantir que as imagens carregaram
        await new Promise((resolve)=>setTimeout(resolve, 2000));
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
        return new Uint8Array(pdfBuffer);
    } finally{
        await browser.close();
    }
}
function generateRevitalizacoesConsolidadoHTML(revitalizacoes, mesAno) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    // Agrupar revitalizações por sub-região
    const revitalizacoesPorSub = revitalizacoes.reduce((acc, rev)=>{
        if (!acc[rev.sub]) {
            acc[rev.sub] = [];
        }
        acc[rev.sub].push(rev);
        return acc;
    }, {});
    // Ordem das sub-regiões
    const ordemSubs = [
        'CV',
        'JT',
        'MG',
        'ST',
        'SP'
    ];
    const subsOrdenadas = ordemSubs.filter((sub)=>revitalizacoesPorSub[sub]);
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório Consolidado de Revitalizações</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Anton:wght@400&display=swap');
        
        @page {
            size: A4 landscape;
            margin: 0;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
        }
        
        .page {
            width: 297mm;
            min-height: 210mm;
            margin: 0 auto;
            background: white;
            position: relative;
        }
        
        .page.cover-page,
        .page.service-page,
        .page.content-page {
            page-break-after: always;
        }
        
        .page:last-child {
            page-break-after: avoid;
        }
        
        /* CAPA */
        .cover-page {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
        }
        
        .cover-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('${images.cover}') center/cover no-repeat;
            z-index: 1;
        }
        
        .cover-logo {
            position: absolute;
            top: -90px;
            right: 80px;
            width: 330px;
            height: 330px;
            background: url('${images.logo}') center/contain no-repeat;
            z-index: 3;
        }
        
        .cover-content {
            position: relative;
            z-index: 2;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: right;
            text-align: right;
        }
        
        .cover-title {
            font-family: 'Anton', sans-serif;
            font-size: 80px;
            font-weight: 600;
            color: rgb(0, 48, 107);
            line-height: 1.25;
            text-transform: uppercase;
            max-width: 440px;
            overflow-wrap: break-word;
            text-shadow: 2px 2px 4px rgba(255,255,255,0.8);
            letter-spacing: 0.25px;
            position: absolute;
            top: 270px;
            right: 50px;
            text-align: center;
            margin: 0;
        }
        
        .cover-date {
            font-size: 26px;
            color: rgb(0, 48, 107);
            font-weight: bold;
            position: absolute;
            right: 80px;
            top: 520px;
            margin-top: 0;
            margin-right: 0;
            text-align: right;
            width: auto;
        }
        
        /* PÁGINA DE SERVIÇO */
        .service-page {
            page-break-before: always;
            position: relative;
            width: 100%;
            min-height: calc(210mm - 0px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-sizing: border-box;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        .service-logo {
            position: absolute;
            top: -70px;
            left: 50%;
            transform: translateX(-50%);
            width: 280px;
            height: 280px;
            background: url('${images.logo}') center/contain no-repeat;
            z-index: 2;
        }
        
        .service-title {
            font-family: 'Anton', sans-serif;
            font-size: 48px;
            font-weight: 600;
            color: rgb(0, 48, 107);
            text-transform: uppercase;
            line-height: 1.2;
            margin-bottom: 20px;
            z-index: 3;
            position: relative;
        }
        
        .service-period {
            font-size: 24px;
            color: rgb(0, 48, 107);
            font-weight: bold;
            margin-bottom: 15px;
            z-index: 3;
            position: relative;
        }
        
        .service-subregion {
            font-size: 28px;
            color: rgb(0, 48, 107);
            font-weight: bold;
            text-transform: uppercase;
            z-index: 3;
            position: relative;
        }
        
        .service-footer-line {
            position: absolute;
            bottom: 0px;
            left: 0;
            width: 100%;
            height: 40px;
            background: url('${images.line}') no-repeat;
            background-size: 100% 100%;
            z-index: 10;
        }
        
        /* SEÇÃO FOTOGRÁFICA */
        .content-page {
            page-break-before: always;
            position: relative;
            width: 100%;
            min-height: calc(210mm - 0px);
            break-inside: avoid;
            page-break-inside: avoid;
            background: #fff !important;
        }
        .largura-fotografico {
            padding: 0px 60px 30px 30px;
        }
        
        .photo-page-header {
            background: #fff !important;
            color: #00306b;
            padding: 15px 20px 0 20px;
            text-align: left;
            break-after: avoid;
            page-break-after: avoid;
        }
        
        .photo-page-header p {
            font-size: 12px;
            opacity: 0.9;
            color: #00306b;
            margin-bottom: 0;
        }
        .photo-header-with-logos {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff !important;
            padding: 20px 60px 0 30px;
            break-after: avoid;
            page-break-after: avoid;
        }
        .prefeitura-logo {
            width: 120px;
            height: 120px;
            background: url('${images.prefeitura}') center/contain no-repeat;
        }
        .company-logo {
            width: 120px;
            height: 120px;
            background: url('${images.logo}') center/contain no-repeat;
        }
        .photo-descriptors {
            background: #fff !important;
            padding: 15px 20px 10px 20px;
            font-size: 12px;
            break-after: avoid;
            page-break-after: avoid;
            margin-bottom: 10px;
        }
       
        /* GRID DINÂMICO PARA FOTOS */
        .photos-grid {
            display: grid;
            gap: 15px;
            margin-top: 20px;
            justify-content: center;
            align-items: start;
            width: 100%;
            max-width: 100%;
            padding: 20px;
            break-inside: avoid;
            page-break-inside: avoid;
            background: #fff !important;
        }
        .photos-grid.one-photo {
            grid-template-columns: repeat(3, 1fr);
            max-width: 100%;
            margin: 15px 0 0 0;
        }
        .photos-grid.two-photos {
            grid-template-columns: repeat(3, 1fr);
            max-width: 100%;
            margin: 15px 0 0 0;
        }
        .photos-grid.three-photos {
            grid-template-columns: repeat(3, 1fr);
            max-width: 100%;
            margin: 15px 0 0 0;
        }
        .photo-item {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            break-inside: avoid;
            page-break-inside: avoid;
            background: #fff !important;
        }
        .photo-container {
            width: 100%;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 8px;
            background: #fff !important;
            display: flex;
            align-items: center;
            justify-content: center;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        .photos-grid.one-photo .photo-container {
            min-height: 320px;
            max-height: 380px;
        }
        .photos-grid.two-photos .photo-container {
            min-height: 320px;
            max-height: 380px;
        }
        .photos-grid.three-photos .photo-container {
            min-height: 320px;
            max-height: 380px;
        }
        .photo-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
            background: #fff !important;
        }
        .photo-caption {
            font-size: 12px;
            color: #666;
            font-weight: bold;
            text-align: center;
            margin-bottom: 5px;
            background: #fff !important;
        }
        .photo-description {
            font-size: 11px;
            color: #555;
            text-align: center;
            font-style: italic;
            background: #fff !important;
        }
        /* PÁGINA FINAL */
        .final-page {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
        }
        .final-top-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 40px;
            background: url('${images.line}') no-repeat;
            background-size: 100% 100%;
            z-index: 10;
        }
        .final-logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 18cm;
            height: 18cm;
            background: url('${images.logo}') center/contain no-repeat;
            z-index: 5;
        }
        .final-bottom-line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40px;
            background: url('${images.line}') no-repeat;
            background-size: 100% 100%;
            z-index: 10;
        }
        @media print {
            .page {
                margin: 0;
                box-shadow: none;
            }
            .page.cover-page,
            .page.service-page,
            .page.content-page {
                page-break-after: always;
            }
            .page:last-child {
                page-break-after: avoid;
            }
            .photo-page-header,
            .photo-header-with-logos,
            .photo-descriptors {
                page-break-after: avoid;
                break-after: avoid;
            }
            .content-page,
            .photos-grid,
            .photo-item,
            .photo-container {
                page-break-inside: avoid;
                break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <!-- CAPA -->
    <div class="page cover-page">
        <div class="cover-background"></div>
        <div class="cover-logo"></div>
        <div class="cover-content">
            <h1 class="cover-title">RELATÓRIO DE <br> EVIDÊNCIAS</h1>
            <div class="cover-date">São Paulo, ${mesAno}</div>
        </div>
    </div>
    
    <!-- CONTRA CAPA -->
    <div class="page service-page">
        <div class="service-logo"></div>
        <div class="service-title">RELATÓRIO DE REVITALIZAÇÃO DE <br> PONTOS VICIADOS</div>
        <div class="service-subregion">EVIDÊNCIAS CONSOLIDADAS</div>
        <div class="service-period">${mesAno}</div>
        <div class="service-footer-line"></div>
    </div>
    
    ${subsOrdenadas.map((sub)=>{
        const revitalizacoesSub = revitalizacoesPorSub[sub];
        const subNome = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sub];
        return `
        <!-- CONTRA CAPA ${subNome} -->
        <div class="page service-page">
            <div class="service-logo"></div>
            <div class="service-title">REVITALIZAÇÕES</div>
            <div class="service-subregion">${subNome}</div>
            <div class="service-period">${mesAno}</div>
            <div class="service-footer-line"></div>
        </div>
        
        ${revitalizacoesSub.map((rev)=>{
            const fotos = rev.fotos || [];
            const fotosCount = fotos.length;
            const gridClass = fotosCount === 1 ? 'one-photo' : fotosCount === 2 ? 'two-photos' : 'three-photos';
            return `
            <!-- SEÇÃO FOTOGRÁFICA - ${rev.local} -->
            <div class="page content-page">
                <div class="largura-fotografico">
                    <div class="photo-header-with-logos">
                        <div class="prefeitura-logo"></div>
                        <div class="company-logo"></div>
                    </div>
                    
                    <div class="photo-descriptors">
                        <div class="descriptor-item">
                            <strong>PREFEITURA REGIONAL:</strong> ${subNome}
                        </div>
                        <div class="descriptor-item">
                            <strong>Serviço(s):</strong> Revitalização de Pontos Viciados
                        </div>
                        <div class="descriptor-item">
                            <strong>Local / Evento:</strong> ${rev.local}
                        </div>
                        <div class="descriptor-item">
                            <strong>Frequência:</strong> ${rev.frequencia || 'N/A'}
                        </div>
                        <div class="descriptor-item">
                            <strong>Peso Coletado:</strong> ${rev.peso || 'N/A'}
                        </div>
                        <div class="descriptor-item">
                            <strong>Período/ Data:</strong> ${new Date(rev.data).toLocaleDateString('pt-BR')}
                        </div>
                    </div>
                    
                    <div class="photos-grid ${gridClass}">
                        ${fotos.map((foto)=>`
                            <div class="photo-item">
                                <div class="photo-container">
                                    <img src="${foto.url}" alt="${foto.etapa}" />
                                </div>
                                ${foto.descricao || foto.etapa ? `<div class="photo-description">${foto.descricao || foto.etapa}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            `;
        }).join('')}
        `;
    }).join('')}
    
    <!-- PÁGINA FINAL -->
    <div class="page final-page">
        <div class="final-top-line"></div>
        <div class="final-logo"></div>
        <div class="final-bottom-line"></div>
    </div>
</body>
</html>
  `;
}
async function exportRevitalizacoesConsolidadoPdf(revitalizacoes, mesAno) {
    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPuppeteerConfig"])();
    const browser = await __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__["default"].launch(config);
    try {
        const page = await browser.newPage();
        await page.setViewport({
            width: 1123,
            height: 794
        }); // A4 landscape em pixels
        // Gerar HTML
        const html = generateRevitalizacoesConsolidadoHTML(revitalizacoes, mesAno);
        // Carregar HTML na página
        await page.setContent(html, {
            waitUntil: 'networkidle0'
        });
        // Aguardar um pouco mais para garantir que as imagens carreguem
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        // Gerar PDF
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
        return new Uint8Array(pdfBuffer);
    } finally{
        await browser.close();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/filename-generator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateConsolidatedFileName",
    ()=>generateConsolidatedFileName,
    "generateFileName",
    ()=>generateFileName,
    "generateRevitalizacoesConsolidadoFileName",
    ()=>generateRevitalizacoesConsolidadoFileName,
    "generateRotineirosConsolidadoFileName",
    ()=>generateRotineirosConsolidadoFileName
]);
function generateFileName(relatorio) {
    // Obter a data do relatório
    let reportDate;
    if (relatorio.tipoServico === 'MUTIRAO' && 'data' in relatorio) {
        reportDate = new Date(relatorio.data + 'T00:00:00'); // Evita problema de timezone
    } else if (relatorio.tipoServico === 'ACUMULADOR' || relatorio.tipoServico === 'ALAGAMENTOS' || relatorio.tipoServico === 'ZELADORIA') {
        reportDate = new Date(relatorio.dataInicio + 'T00:00:00'); // Evita problema de timezone
    } else if (relatorio.tipoServico === 'REVITALIZACAO' && 'data' in relatorio) {
        reportDate = new Date(relatorio.data + 'T00:00:00'); // Evita problema de timezone
    } else if (relatorio.tipoServico === 'HIGIENIZACAO' && 'data' in relatorio) {
        reportDate = new Date(relatorio.data + 'T00:00:00'); // Evita problema de timezone
    } else if (relatorio.tipoServico === 'VARRICAO_MECANIZADA' && 'data' in relatorio) {
        reportDate = new Date(relatorio.data + 'T00:00:00'); // Evita problema de timezone
    } else if (relatorio.tipoServico === 'FEIRAS' && 'data' in relatorio) {
        reportDate = new Date(relatorio.data + 'T00:00:00'); // Evita problema de timezone
    } else if (relatorio.tipoServico === 'ROTINEIROS' && 'data' in relatorio) {
        reportDate = new Date(relatorio.data + 'T00:00:00'); // Evita problema de timezone
    } else {
        reportDate = new Date();
    }
    const dateStr = reportDate.toLocaleDateString('pt-BR').replace(/\//g, '.');
    switch(relatorio.tipoServico){
        case 'MUTIRAO':
            // Para multirão será (por sub): Relatório Operação SP Limpa {CV} - {13.09.2025} - Limpebras
            if ('secoes' in relatorio && relatorio.secoes.length > 0) {
                const sub = relatorio.secoes[0].sub;
                return `Relatório Operação SP Limpa ${sub} - ${dateStr} - Limpebras`;
            }
            return `Relatório Operação SP Limpa - ${dateStr} - Limpebras`;
        case 'ACUMULADOR':
            // Para Acumulador será: Relatório Ação de Acumulador {ST} - {12.09.2025} - Limpebras
            if ('sub' in relatorio) {
                return `Relatório Ação de Acumulador ${relatorio.sub} - ${dateStr} - Limpebras`;
            }
            return `Relatório Ação de Acumulador - ${dateStr} - Limpebras`;
        case 'ZELADORIA':
        case 'REVITALIZACAO':
        case 'HIGIENIZACAO':
        case 'VARRICAO_MECANIZADA':
        case 'FEIRAS':
        case 'ROTINEIROS':
            // Para os demais serão: Relatório Fotográfico - {12.09.2025} - Limpebras
            return `Relatório Fotográfico - ${dateStr} - Limpebras`;
        case 'ALAGAMENTOS':
            // Para Alagamentos será: Relatório Pós Alagamentos {ST} - {12.09.2025} - Limpebras
            if ('sub' in relatorio) {
                return `Relatório Pós Alagamento ${relatorio.sub} - ${dateStr} - Limpebras`;
            }
            return `Relatório Pós Alagamento - ${dateStr} - Limpebras`;
        default:
            return `Relatório - ${dateStr} - Limpebras`;
    }
}
function generateConsolidatedFileName(dateFilter) {
    let reportDate;
    if (dateFilter) {
        // Usar a data filtrada, adicionando T00:00:00 para evitar problemas de timezone
        reportDate = new Date(dateFilter + 'T00:00:00');
    } else {
        reportDate = new Date();
    }
    const dateStr = reportDate.toLocaleDateString('pt-BR').replace(/\//g, '.');
    return `Relatório Operação SP Limpa - ${dateStr} - Limpebras`;
}
function generateRevitalizacoesConsolidadoFileName(mesAno) {
    // mesAno vem no formato "Setembro de 2025"
    return `Relatório Revitalizações - ${mesAno} - LimpaSP`;
}
function generateRotineirosConsolidadoFileName(mesAno) {
    // mesAno vem no formato "Setembro de 2025"
    return `Relatorio Servicos Rotineiros - ${mesAno} - LimpaSP`;
}
}),
"[project]/app/api/export-evidencias-revitalizacoes/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$relatorios$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/relatorios-modern.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/filename-generator.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$relatorios$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$relatorios$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function POST(request) {
    try {
        console.log('🔍 Iniciando geração de evidências de revitalizações...');
        const body = await request.json();
        const { mesAno, revitalizacoes } = body;
        console.log('📊 Dados recebidos:', {
            mesAno,
            revitalizacoesCount: revitalizacoes?.length
        });
        if (!mesAno || !revitalizacoes || revitalizacoes.length === 0) {
            console.log('❌ Dados inválidos recebidos');
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Dados inválidos'
            }, {
                status: 400
            });
        }
        // Gerar PDF usando a função de evidências de revitalizações
        console.log('🚀 Iniciando geração de PDF...');
        const pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$relatorios$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportRevitalizacoesConsolidadoPdf"])(revitalizacoes, mesAno);
        console.log('✅ PDF gerado com sucesso!');
        // Gerar nome do arquivo baseado no mês/ano
        const fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRevitalizacoesConsolidadoFileName"])(mesAno);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](new Uint8Array(pdfBuffer), {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}.pdf`
            }
        });
    } catch (error) {
        console.error('❌ Erro ao gerar evidências de revitalizações:', error);
        console.error('❌ Stack trace:', error instanceof Error ? error.stack : 'No stack trace available');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Erro interno do servidor',
            details: error instanceof Error ? error.message : 'Erro desconhecido'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__11277a13._.js.map