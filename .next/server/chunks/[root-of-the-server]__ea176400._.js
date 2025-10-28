module.exports = [
"[project]/.next-internal/server/app/api/export-evidencias-rotineiros/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/lib/pdf/rotineiros-modern.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * ========================================
 * GERADOR DE PDF PARA SERVIÇOS ROTINEIROS - SELIMP
 * ========================================
 * 
 * Este arquivo contém toda a lógica para gerar PDFs de serviços rotineiros.
 * 
 * ESTRUTURA DO PDF:
 * 1. Capa (título "Relatório de Serviços Rotineiros", data, sub-região)
 * 2. Contracapa (título "Relatório de Serviços Rotineiros")
 * 3. Páginas fotográficas por serviço (sem tabelas, apenas fotos)
 * 4. Capa final
 * 
 * FUNÇÕES PRINCIPAIS:
 * - exportEvidenciasRotineirosPdf(): PDF consolidado de múltiplas sub-regiões
 * 
 * PERSONALIZAÇÃO CSS:
 * - Todos os estilos estão inline para facilitar edição
 * - Use @page para configurações de página
 * - Classes principais: .page, .cover-page, .service-photo-page
 */ __turbopack_context__.s([
    "exportEvidenciasRotineirosPdf",
    ()=>exportEvidenciasRotineirosPdf,
    "generateRotineirosHTML",
    ()=>generateRotineirosHTML
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/puppeteer-core [external] (puppeteer-core, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/puppeteer-config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/image-loader.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
;
;
;
function generateRotineirosHTML(mesAno, rotineiros) {
    console.log('🔍 Debug - Dados recebidos para geração de HTML:', JSON.stringify(rotineiros, null, 2));
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório Serviços Rotineiros</title>
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
            width: 297mm; /* A4 landscape */
            min-height: 210mm;
            margin: 0 auto;
            background: white;
            position: relative;
        }
        
        .page.cover-page,
        .page.service-page,
        .page.service-photo-page {
            page-break-after: always;
        }
        
        .page:last-child {
            page-break-after: avoid;
        }
        
        /* PÁGINA DE CAPA */
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
        
        .cover-logo {
            position: absolute;
            top: -90px;
            right: 80px;
            width: 330px;
            height: 330px;
            background: url('${images.logo}') center/contain no-repeat;
            z-index: 3;
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
            position: relative;
            width: 100%;
            height: 210mm;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
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
        
        /* PÁGINA DE SERVIÇO FOTOGRÁFICO */
        .service-photo-page {
            padding: 30px 60px 30px 40px;
            position: relative;
        }
        
        .service-photo-header {
            background: rgb(0, 48, 107);
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .service-photo-header h2 {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
        }
        
        .service-photo-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border-left: 4px solid rgb(0, 48, 107);
        }
        
        .service-photo-info p {
            margin-bottom: 10px;
            font-size: 14px;
            color: #333;
        }
        
        .service-photo-info strong {
            color: rgb(0, 48, 107);
            font-weight: bold;
        }
        
        /* DESCRITORES PARA SERVIÇOS ROTINEIROS */
        .photo-descriptors {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            font-size: 12px;
            line-height: 1.4;
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
        
        /* GRID DE FOTOS DINÂMICO */
        .photos-grid {
            display: grid;
            gap: 15px;
            margin-top: 20px;
            justify-content: center;
            align-items: start;
        }
        
        .photos-grid.one-photo {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 20px auto 0;
        }
        
        .photos-grid.two-photos {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .photos-grid.three-photos {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .photo-item {
            text-align: center;
            border-radius: 12px;
            transition: transform 0.2s ease;
        }
        
        .photo-container {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        
        /* Alturas dinâmicas baseadas no número de fotos - OTIMIZADAS PARA A4 LANDSCAPE */
        .photos-grid.one-photo .photo-container {
            height: 400px;
        }
        
        .photos-grid.two-photos .photo-container {
            height: 400px;
        }
        
        .photos-grid.three-photos .photo-container {
            height: 400px;
        }
        
        .photo-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
        
        .photo-description {
            font-size: 10px;
            color: black;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 8px;
            display: block;
            text-align: center;
            line-height: 1.2;
        }
        
        /* PÁGINA FINAL */
        .final-page {
            position: relative;
            width: 100%;
            height: 210mm;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
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
            background: url('${images.line}') no-repeat;
            background-size: 100% 100%;
            transform: scaleY(-1);
            z-index: 10;
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
        
        /* HEADER COM LOGOS */
        .quantitative-header-line {
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 40px;
            z-index: 10;
            margin-bottom: 20px;
        }

        .quantitative-header-line .prefeitura-logo {
            width: 120px;
            height: 80px;
            background: url('${images.prefeitura}') center/contain no-repeat;
            background-size: contain;
        }

        .quantitative-header-line .company-logo {
            width: 120px;
            height: 80px;
            background: url('${images.logo}') center/contain no-repeat;
            background-size: contain;
        }
    </style>
</head>
<body>
    <!-- CAPA -->
    <div class="page cover-page">
        <div class="cover-background"></div>
        <div class="cover-logo"></div>
        <div class="cover-content">
            <h1 class="cover-title">RELATÓRIO DE <br>EVIDÊNCIAS</h1>
            <div class="cover-date">São Paulo, ${mesAno}</div>
        </div>
    </div>
    
    ${(()=>{
        // Ordenar sub-regiões em ordem específica: CV, JT, MG, ST
        const subregioesOrdenadas = [
            'CV',
            'JT',
            'MG',
            'ST'
        ];
        return subregioesOrdenadas.map((sub)=>{
            // Buscar todos os registros desta sub-região
            const registrosSubregiao = rotineiros.filter((r)=>r.sub === sub);
            if (registrosSubregiao.length === 0) return '';
            // Ordenar registros por data (mais antigo primeiro)
            const registrosOrdenados = registrosSubregiao.sort((a, b)=>new Date(a.data).getTime() - new Date(b.data).getTime());
            return `
                <!-- CONTRACAPA DA SUB-REGIÃO ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sub]} -->
                <div class="page service-page">
                    <div class="service-logo"></div>
                    <div class="service-title">RELATÓRIO DE <br>SERVIÇOS ROTINEIROS</div>
                    <div class="service-period">${mesAno}</div>
                    <div class="service-subregion">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sub]}</div>
                    <div class="service-footer-line"></div>
                </div>
                
                <!-- SERVIÇOS DA SUB-REGIÃO ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sub]} -->
                ${registrosOrdenados.map((rotineiro)=>rotineiro.servicos.map((servico, servicoIndex)=>{
                    // Dividir fotos em páginas de 3 fotos cada
                    const photosPerPage = 3;
                    const totalPages = Math.ceil(servico.fotos.length / photosPerPage);
                    return Array.from({
                        length: totalPages
                    }, (_, pageIndex)=>{
                        const startIndex = pageIndex * photosPerPage;
                        const endIndex = startIndex + photosPerPage;
                        const pagePhotos = servico.fotos.slice(startIndex, endIndex);
                        const isFirstPage = pageIndex === 0;
                        // Só criar página se houver fotos
                        if (pagePhotos.length > 0) {
                            return `
                                  <!-- PÁGINA FOTOGRÁFICA DO SERVIÇO: ${servico.assunto} - Página ${pageIndex + 1} -->
                                  <div class="page service-photo-page">
                                    <div class="quantitative-header-line">
                                        <div class="prefeitura-logo"></div>
                                        <div class="company-logo"></div>
                                    </div>

                                <div class="photo-descriptors">
                                    <div class="descriptor-item">
                                        <strong>Subprefeitura:</strong> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][rotineiro.sub]}
                                    </div>
                                    <div class="descriptor-item">
                                        <strong>Serviços Rotineiros</strong> 
                                    </div>
                                    <div class="descriptor-item">
                                        <strong>Serviço(s):</strong> ${servico.assunto}
                                    </div>
                                    <div class="descriptor-item">
                                        <strong>Data:</strong> ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForPhotos"])(rotineiro.data)}
                                    </div>
                                </div>
                                      
                                      <div class="photos-grid ${pagePhotos.length === 1 ? 'one-photo' : pagePhotos.length === 2 ? 'two-photos' : 'three-photos'}">
                                          ${pagePhotos.map((foto, index)=>{
                                console.log('🔍 Debug - Foto:', foto.url, 'Descrição:', foto.descricao);
                                return `
                                              <div class="photo-item">
                                                  <div class="photo-container">
                                                      <img src="${foto.url}" alt="Foto ${startIndex + index + 1}" />
                                                  </div>
                                                  ${foto.descricao ? `<div class="photo-description">${foto.descricao}</div>` : ''}
                                              </div>
                                          `;
                            }).join('')}
                                      </div>
                                  </div>
                                  `;
                        }
                        return '';
                    }).join('');
                }).join('')).join('')}
            `;
        }).join('');
    })()}
    
    <!-- PÁGINA FINAL -->
    <div class="page final-page">
        <div class="final-top-line"></div>
        <div class="final-logo"></div>
        <div class="final-bottom-line"></div>
    </div>
</body>
</html>`;
}
async function exportEvidenciasRotineirosPdf(mesAno, rotineiros) {
    console.log(`🚀 Iniciando geração de PDF para ${rotineiros.length} serviço(s) rotineiro(s)`);
    console.log('📅 Mês/Ano:', mesAno);
    console.log('📊 Dados dos rotineiros:', rotineiros);
    // Validar dados antes de gerar HTML
    const totalServicos = rotineiros.reduce((total, rotineiro)=>total + rotineiro.servicos.length, 0);
    const totalFotos = rotineiros.reduce((total, rotineiro)=>total + rotineiro.servicos.reduce((servicoTotal, servico)=>servicoTotal + servico.fotos.length, 0), 0);
    console.log(`📊 Total de serviços: ${totalServicos}, Total de fotos: ${totalFotos}`);
    if (totalServicos === 0) {
        throw new Error('Nenhum serviço encontrado para gerar o PDF');
    }
    const html = generateRotineirosHTML(mesAno, rotineiros);
    console.log('📄 HTML gerado:', html.substring(0, 500) + '...');
    // Usar puppeteer completo em desenvolvimento, puppeteer-core em produção
    const puppeteerInstance = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : puppeteerDev;
    if (!puppeteerInstance) {
        throw new Error('Puppeteer não disponível');
    }
    console.log('🔧 Usando puppeteer:', ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'puppeteer');
    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPuppeteerConfig"])();
    console.log('⚙️ Configuração do puppeteer:', config);
    const browser = await puppeteerInstance.launch(config);
    console.log('🚀 Browser lançado com sucesso');
    try {
        const page = await browser.newPage();
        console.log('📄 Página criada com sucesso');
        // Configurar timeout da página
        page.setDefaultTimeout(30000); // 30 segundos
        page.setDefaultNavigationTimeout(30000); // 30 segundos
        // Configurar viewport para A4 landscape
        await page.setViewport({
            width: 1123,
            height: 794,
            deviceScaleFactor: 1
        });
        console.log('🖥️ Viewport configurado');
        // Carregar HTML com estratégia mais robusta
        console.log('📄 Carregando HTML na página...');
        try {
            // Primeiro, carregar HTML sem aguardar todas as imagens
            await page.setContent(html, {
                waitUntil: 'domcontentloaded',
                timeout: 60000 // 1 minuto para carregar HTML
            });
            console.log('📄 HTML carregado na página');
            // Aguardar carregamento de imagens de forma mais inteligente
            console.log('⏳ Aguardando carregamento das imagens...');
            let tentativas = 0;
            const maxTentativas = 30; // 30 tentativas de 10 segundos = 5 minutos máximo
            while(tentativas < maxTentativas){
                const imagesLoaded = await page.evaluate(()=>{
                    const images = document.querySelectorAll('img');
                    const totalImages = images.length;
                    let loadedImages = 0;
                    for (const img of images){
                        if (img.complete && img.naturalHeight !== 0) {
                            loadedImages++;
                        }
                    }
                    return {
                        total: totalImages,
                        loaded: loadedImages,
                        allLoaded: loadedImages === totalImages && totalImages > 0
                    };
                });
                console.log(`📊 Imagens: ${imagesLoaded.loaded}/${imagesLoaded.total} carregadas`);
                if (imagesLoaded.allLoaded || imagesLoaded.total === 0) {
                    console.log('✅ Todas as imagens carregadas!');
                    break;
                }
                // Aguardar 10 segundos antes da próxima verificação
                await new Promise((resolve)=>setTimeout(resolve, 10000));
                tentativas++;
            }
            if (tentativas >= maxTentativas) {
                console.warn('⚠️ Timeout no carregamento de imagens, mas continuando com o PDF...');
            }
        } catch (error) {
            console.error('❌ Erro ao carregar HTML:', error);
            throw error;
        }
        // Verificar se a página ainda está conectada
        if (page.isClosed()) {
            throw new Error('Página foi fechada antes da geração do PDF');
        }
        // Gerar PDF
        console.log('🔄 Iniciando geração do PDF...');
        const pdfBuffer = await page.pdf({
            format: 'A4',
            landscape: true,
            printBackground: true,
            margin: {
                top: '0',
                right: '0',
                bottom: '0',
                left: '0'
            },
            preferCSSPageSize: true,
            timeout: 1200000 // 20 minutos de timeout para geração de PDFs muito grandes
        });
        console.log(`✅ PDF gerado com sucesso! Tamanho: ${pdfBuffer.length} bytes`);
        return pdfBuffer;
    } catch (error) {
        console.error('❌ Erro durante a geração do PDF:', error);
        console.error('❌ Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
        // Tratamento específico para erro de target fechado
        if (error instanceof Error && error.message.includes('Target closed')) {
            console.error('🔍 Browser foi fechado prematuramente. Tentando novamente...');
            throw new Error('Browser foi fechado durante a geração do PDF. Tente novamente.');
        }
        throw error;
    } finally{
        await browser.close();
        console.log('🔒 Browser fechado');
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
"[project]/app/api/export-evidencias-rotineiros/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$rotineiros$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/rotineiros-modern.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/filename-generator.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$rotineiros$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$rotineiros$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function POST(request) {
    try {
        const { mesAno, rotineiros } = await request.json();
        if (!rotineiros || rotineiros.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Nenhum serviço rotineiro fornecido'
            }, {
                status: 400
            });
        }
        console.log(`📊 Gerando PDF de evidências para ${rotineiros.length} serviço(s) rotineiro(s) do mês ${mesAno}`);
        const pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$rotineiros$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportEvidenciasRotineirosPdf"])(mesAno, rotineiros);
        const fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateRotineirosConsolidadoFileName"])(mesAno);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${fileName}"`,
                'Content-Length': pdfBuffer.length.toString()
            }
        });
    } catch (error) {
        console.error('Erro ao gerar PDF de evidências de serviços rotineiros:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Erro interno do servidor ao gerar PDF'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ea176400._.js.map