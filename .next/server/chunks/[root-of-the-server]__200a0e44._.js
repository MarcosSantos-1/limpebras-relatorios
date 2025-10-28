module.exports = [
"[project]/.next-internal/server/app/api/generate-pdf/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[externals]/puppeteer [external] (puppeteer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("puppeteer", () => require("puppeteer"));

module.exports = mod;
}),
"[project]/lib/pdf/mutirao-modern.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * ========================================
 * GERADOR DE PDF PARA MUTIRÕES - SELIMP
 * ========================================
 * 
 * Este arquivo contém toda a lógica para gerar PDFs de mutirões.
 * 
 * ESTRUTURA DO PDF:
 * 1. Capa (título, data, quantitativo)
 * 2. Páginas por sub-região:
 *    - Informações da sessão
 *    - Foto da equipe (se disponível)
 *    - Foto do mapa (se disponível) 
 *    - Tabela de informações
 *    - Páginas fotográficas por serviço
 * 
 * FUNÇÕES PRINCIPAIS:
 * - exportMutiraoPdf(): PDF individual por sub-região
 * - exportEvidenciasMutiroesPdf(): PDF consolidado de múltiplas sub-regiões
 * - exportRegistroPdf(): PDF para registros fotográficos
 * 
 * PERSONALIZAÇÃO CSS:
 * - Todos os estilos estão inline para facilitar edição
 * - Use @page para configurações de página
 * - Classes principais: .page, .cover-page, .subregion-page, .service-photo-page
 */ __turbopack_context__.s([
    "exportEvidenciasMutiroesPdf",
    ()=>exportEvidenciasMutiroesPdf,
    "exportMutiraoPdf",
    ()=>exportMutiraoPdf,
    "exportRegistroPdf",
    ()=>exportRegistroPdf,
    "generateEvidenciasMutiroesHTML",
    ()=>generateEvidenciasMutiroesHTML,
    "generateMutiraoHTML",
    ()=>generateMutiraoHTML,
    "generateRegistroHTML",
    ()=>generateRegistroHTML
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/puppeteer-core [external] (puppeteer-core, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/image-loader.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
function generateMutiraoHTML(rel) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório Mutirão</title>
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
        .page.quantitative-page {
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
            
        /* PÁGINA DE QUANTITATIVO (CONSOLIDADO) */
        .quantitative-page {
            min-height: 210mm;
            padding: 40px 60px 20px 40px;
            position: relative;
        }

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

        .quantitative-header {
            background: #304057;
            color: white;
            padding: 15px 20px;
            margin: 0 0 10px 0;
            text-align: center;
        }

        .quantitative-header h2 {
            font-size: 22px;
            font-weight: bold;
            margin: 0;
            text-align: center;
        }

        .quantitative-header-total {
            background: #00255f;
            color: white;
            padding: 15px 20px;
            margin: 0 0 5px 0;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }

        .subprefeituras-list {
            color: #2c3e50;
            padding: 5px 20px;
            margin: 0 0 5px 0;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
        }

        .quantitative-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 5px;
            font-size: 15px;
        }

        .quantitative-table th,
        .quantitative-table td {
            border: 1px solid #ddd;
            padding: 12px 20px;
            text-align: center;
        }

        .quantitative-table th {
            background: #f8f9fa;
            font-weight: bold;
            color: #2c3e50;
        }

        .quantitative-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        /* PÁGINA DE CAPA DA Subprefeitura - CÓPIA DA CONTRACAPA */
        .subregion-cover-page {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
        }
        
        .subregion-cover-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('${images.cover}') center/cover no-repeat;
            z-index: 1;
        }
        
        .subregion-cover-date {
            font-family: 'Arial', sans-serif;
            font-size: 26px;
            color: white;
            position: absolute;
            right: 80px;
            top: 520px;
            margin-top: 0;
            margin-right: 0;
            text-align: right;
            width: auto;
        }
        
        /* PÁGINA DE Subprefeitura */
        .subregion-page {
            padding: 10mm 60px 10mm 40px;
        }
        
        /* PÁGINA DE DESCRIÇÃO DOS ITENS */
        .items-description-page {
            padding: 10mm 60px 10mm 40px;
        }
        
        .items-description-header {
            background: #34495e;
            color: white;
            padding: 15px 20px;
            margin: 0 0 10px 0;
            text-align: center;
        }
        
        .items-description-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
        }
        
        .items-description-table th,
        .items-description-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        .items-description-table th {
            background: #f8f9fa;
            font-weight: bold;
            color: #2c3e50;
        }
        
        .items-description-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        .subregion-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            margin-top: 20px;
        }
        
        .subregion-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
        }
        
        .subregion-info h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 16px;
        }
        
        .subregion-info p {
            margin-bottom: 10px;
            font-size: 14px;
        }
        
        .team-photo {
            text-align: center;
        }
        
        .team-photo img {
            max-width: 450px;
            max-height: 400px;
            width: auto;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            object-fit: contain;
        }
        
        .team-photo-caption {
            font-size: 12px;
            color: #666;
            margin-top: 10px;
            font-style: italic;
        }
        
        /* PÁGINA DA TABELA DE INFORMAÇÕES */
        .info-table-page {
            padding: 10mm 60px 10mm 40px;
            min-height: 210mm;
        }
        
        .info-table-header {
            background: #34495e;
            color: white;
            padding: 15px 20px;
            margin: 0 0 10px 0;
            text-align: center;
        }
        
        .info-table-header h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            text-align: center;
        }
        
        /* TABELA DE INFORMAÇÕES */
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 16px;
            font-weight: 600;
        }
        
        .info-table th,
        .info-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
            word-wrap: break-word;
        }
        
        .info-table th {
            background: #f8f9fa;
            font-weight: bold;
            color: #2c3e50;
            text-align: center;
        }
        
        .info-table tr {
            /* Quebra de linha natural */
        }
        
        .info-table tr:nth-child(even) {
            background: #f8f9fa;
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
        
        .photo-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-top: 20px;
        }
        
        .photo-item {
            text-align: center;
            border-radius: 12px;
            transition: transform 0.2s ease;
        }
        
        
        .photo-item img {
            max-width: 100%;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
        }
        
        .photo-caption {
            font-size: 14px;
            color: rgb(0, 48, 107);
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        /* PÁGINA FOTOGRÁFICA SIMPLES */
        .photo-page {
            padding: 10mm 60px 10mm 40px;
            position: relative;
        }
        
        .photo-header {
            background: rgb(0, 48, 107);
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .photo-header h2 {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
        }
        
        .photo-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border-left: 4px solid rgb(0, 48, 107);
        }
        
        .photo-info p {
            margin-bottom: 10px;
            font-size: 14px;
            color: #333;
        }
        
        .photo-info strong {
            color: rgb(0, 48, 107);
            font-weight: bold;
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
        
        /* GRID DE FOTOS DINÂMICO PARA MUTIRÃO - REFATORADO */
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
            min-height: 380px;
            max-height: 430px;
        }
        
        .photos-grid.two-photos .photo-container {
            min-height: 380px;
            max-height: 430px;
        }
        
        .photos-grid.three-photos .photo-container {
            min-height: 380px;
            max-height: 430px;
        }
        
        .photo-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
        
        .photo-description {
            font-size: 12px;
            color: #2c3e50;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 5px;
            text-align: center;
            line-height: 1.2;
        }
        
        
        /* CABEÇALHO DA PÁGINA FOTOGRÁFICA PARA MUTIRÃO */
        .photo-page-header {
            position: relative;
            background: #34495e;
            color: white;
            padding: 15px 20px;
            margin: 0 0 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
        
        /* DESCRITORES PARA MUTIRÃO */
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
        
        /* CABEÇALHO COM LOGOS PARA PÁGINAS FOTOGRÁFICAS */
        .photo-header-with-logos {
            position: relative;
            background: #34495e;
            color: white;
            padding: 15px 20px;
            margin: -20mm -60px 20px -40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 60px;
        }
        
        .photo-header-with-logos h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            flex: 1;
            text-align: center;
        }
        
        .prefeitura-logo {
            width: 50px;
            height: 50px;
            background: url('${images.prefeitura}') center/contain no-repeat;
            margin-right: 20px;
        }
        
        .company-logo {
            width: 50px;
            height: 50px;
            background: url('${images.logo}') center/contain no-repeat;
            margin-left: 20px;
        }
        
        @media print {
            .page {
                margin: 0;
                box-shadow: none;
            }
            
            /* Configurações específicas para quebra de página */
            .page.cover-page,
            .page.service-page,
            .page.quantitative-page {
                page-break-after: always;
            }
            
            .page:last-child {
                page-break-after: avoid;
            }
            
            /* Evitar quebras dentro de elementos importantes */
            .photo-header-with-logos,
            .photo-descriptors,
            .info-table-header {
                page-break-after: avoid;
                break-after: avoid;
            }
            
            /* Controle específico para seção fotográfica */
            .service-photo-page {
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
            
            .info-table {
                page-break-inside: auto;
            }
            
            .info-table tr {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <!-- PÁGINA DE CAPA -->
    <div class="page cover-page">
        <div class="cover-background"></div>
        <div class="cover-logo"></div>
        <div class="cover-content">
            <h1 class="cover-title">RELATÓRIO DE <br>EVIDÊNCIAS</h1>
            <div class="cover-date">São Paulo, ${new Date(rel.data).toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric'
    })}</div>
        </div>
    </div>
    
    <!-- PÁGINA DE SERVIÇO -->
    <div class="page service-page">
        <div class="service-logo"></div>
        <div class="service-title">RELATÓRIO OPERAÇÃO <br> SÃO PAULO LIMPA</div>
        <div class="service-period">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForCover"])(rel.data)}</div>
        <div class="service-subregion">${rel.secoes.length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][rel.secoes[0].sub] : 'N/A'}</div>
        <div class="service-footer-line"></div>
    </div>
    
    <!-- PÁGINA DE QUANTITATIVO -->
    <div class="page quantitative-page">
        <div class="quantitative-header-line">
            <div class="prefeitura-logo"></div>
            <div class="company-logo"></div>
        </div>
        <div class="quantitative-header"> 
            <h2>Quantitativo Estimado</h2>
        </div>
        
        <table class="quantitative-table">
            <thead>
                <tr>
                    <th>Descrição do Serviço</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                ${rel.quantitativo.map((q)=>{
        let valor = String(q.quantidade ?? "");
        if (!valor.trim()) {
            valor = q.descricao.includes("km") || q.descricao.includes("Ton") ? "0,0" : "0";
        }
        return `
                    <tr>
                        <td>${q.descricao}</td>
                        <td>${valor}</td>
                    </tr>
                  `;
    }).join('')}
            </tbody>
        </table>
    </div>
    
    ${rel.secoes.map((sec, idx)=>`
        ${sec.mapaFotoUrl ? `
            <!-- PÁGINA DO MAPA -->
            <div class="page subregion-page">
                <div class="quantitative-header-line">
                    <div class="prefeitura-logo"></div>
                    <div class="company-logo"></div>
                </div>
                <div class="subregion-content">
                    <div class="subregion-info">
                        <h3>Mapa da Operação</h3>
                        <p><strong>Subprefeitura:</strong> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sec.sub]}</p>
                        <p><strong>Local/Evento:</strong> ${sec.local ?? "-"}</p>
                        <p><strong>Data:</strong> ${sec.data.split('-').reverse().join('/')}</p>
                        <p><strong>Descrição:</strong> ${sec.descricao || "Nenhuma descrição disponível"}</p>
                    </div>
                    
                    <div class="team-photo">
                        <img src="${sec.mapaFotoUrl}" alt="Mapa da Operação" style="max-width: 400px; max-height: 500px; object-fit: contain;" />
                        <div class="team-photo-caption">Mapa da Operação</div>
                    </div>
                </div>
            </div>
        ` : ''}
        <!-- PÁGINA DA Subprefeitura ${idx + 1} -->
        <div class="page subregion-page">
            <div class="quantitative-header-line">
                <div class="prefeitura-logo"></div>
                <div class="company-logo"></div>
            </div>
            <div class="subregion-content">
                <div class="subregion-info">
                    <h3>Subprefeitura: ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sec.sub]}</h3>
                    <p><strong>Local/Evento:</strong> ${sec.local ?? "-"}</p>
                    <p><strong>Data:</strong> ${sec.data.split('-').reverse().join('/')}</p>
                    <p><strong>Descrição:</strong> ${sec.descricao || "Nenhuma descrição disponível"}</p>
                </div>
                
                ${sec.equipeFotoUrl ? `
                <div class="team-photo">
                    <img src="${sec.equipeFotoUrl}" alt="Foto da Equipe" />
                    <div class="team-photo-caption">Foto da Equipe</div>
                </div>
                ` : ''}
            </div>
        </div>
            ${sec.informacoes.filter((i)=>i.descricao.trim() !== "").length > 0 ? `
                <!-- PÁGINA DA TABELA DE INFORMAÇÕES -->
                <div class="page info-table-page">
                    <div class="info-table-header">
                        <h2>Informações da Sub </h2>
                    </div>
                    
                    <table class="info-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${sec.informacoes.filter((i)=>i.descricao.trim() !== "").map((i)=>`
                                <tr>
                                    <td>${i.ordem}</td>
                                    <td>${i.descricao}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            ` : ''}
        </div>
        
        ${sec.servicos.map((servico)=>`
            ${servico.fotos.length > 0 ? `
                ${(()=>{
                const totalPages = Math.ceil(servico.fotos.length / 3);
                let html = '';
                for(let pageIndex = 0; pageIndex < totalPages; pageIndex++){
                    const startIndex = pageIndex * 3;
                    const endIndex = startIndex + 3;
                    const pagePhotos = servico.fotos.slice(startIndex, endIndex);
                    const isFirstPage = pageIndex === 0;
                    // Só criar página se houver fotos
                    if (pagePhotos.length > 0) {
                        html += `
                      <!-- PÁGINA FOTOGRÁFICA DO SERVIÇO: ${servico.assunto} - Página ${pageIndex + 1} -->
                      <div class="page service-photo-page">
                        <div class="quantitative-header-line">
                            <div class="prefeitura-logo"></div>
                            <div class="company-logo"></div>
                        </div>

                    ${isFirstPage ? `
                    <div class="photo-descriptors">
                        <div class="descriptor-item">
                            <strong>Subprefeitura:</strong> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sec.sub]}
                        </div>
                        <div class="descriptor-item">
                            <strong>Operação São Paulo Limpa:</strong> 
                        </div>
                        <div class="descriptor-item">
                            <strong>Serviço(s):</strong> ${servico.assunto}
                        </div>
                        <div class="descriptor-item">
                            <strong>Data:</strong> ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForPhotos"])(sec.data)}
                        </div>
                    </div>
                    ` : ''}
                          
                          <div class="photos-grid ${pagePhotos.length === 1 ? 'one-photo' : pagePhotos.length === 2 ? 'two-photos' : 'three-photos'}">
                              ${pagePhotos.map((foto, index)=>`
                                  <div class="photo-item">
                                      <div class="photo-container">
                                          <img src="${foto.url}" alt="Foto ${startIndex + index + 1}" />
                                      </div>
                                      ${foto.descricao ? `<div class="photo-description">${foto.descricao}</div>` : ''}
                                  </div>
                              `).join('')}
                          </div>
                      </div>
                      `;
                    }
                }
                return html;
            })()}
            ` : ''}
        `).join('')}
    `).join('')}
    
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
async function exportMutiraoPdf(rel) {
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
        // Gerar HTML
        const html = generateMutiraoHTML(rel);
        // Carregar HTML na página
        await page.setContent(html, {
            waitUntil: 'networkidle0'
        });
        // Aguardar um pouco mais para garantir que as imagens carreguem
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        // Gerar PDF
        const pdf = await page.pdf({
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
        return pdf;
    } finally{
        await browser.close();
    }
}
function generateRegistroHTML(rel) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Evidências</title>
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
            width: 297mm; /* A4 landscape */
            min-height: 210mm;
            padding: 10mm 60px 10mm 40px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            position: relative;
            page-break-after: always;
        }
        
        /* PÁGINA DE CAPA */
        .cover-page {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding-top: 50mm;
            position: relative;
            overflow: hidden;
        }
        
        .cover-page::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('${images.cover}') center/cover;
            opacity: 0.3;
            z-index: 1;
        }
        
        .cover-content {
            position: relative;
            z-index: 2;
        }
        
        .logo {
            width: 240px;
            height: 240px;
            margin: 0 auto 30px;
            background: url('${images.logo}') center/contain no-repeat;
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
        
        .cover-subtitle {
            font-size: 24px;
            margin-bottom: 40px;
            opacity: 0.9;
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
        
        .service-header {
            background: #2c3e50;
            color: white;
            padding: 15px 20px;
        }
        
        .service-header h2 {
            font-size: 24px;
            font-weight: bold;
        }
        
        .service-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #3498db;
        }
        
        .service-info h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .service-info p {
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .service-info strong {
            color: #2c3e50;
        }
        
        /* PÁGINA FOTOGRÁFICA */
        .photo-page {
            page-break-before: always;
        }
        
        .photo-header {
            background: #e74c3c;
            color: white;
            padding: 15px 20px;
            margin: 0 0 10px 0;
        }
        
        .photo-header h2 {
            font-size: 20px;
            font-weight: bold;
        }
        
        .photo-info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .photo-info p {
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .photo-info strong {
            color: #2c3e50;
        }
        
        .photo-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
        }
        
        .photo-item {
            text-align: center;
            border-radius: 8px
        }
        
        .photo-item img {
            max-width: 100%;
            max-height: 750px;
            object-fit: cover;
            border-radius: 4px;
            margin-bottom: 10px;
        }
        
        .photo-caption {
            font-size: 12px;
            color: #666;
            font-style: italic;
        }
        
        @media print {
            .page {
                margin: 0;
                box-shadow: none;
            }
            
            .service-page,
            .photo-page {
                page-break-before: always;
            }
        }
    </style>
</head>
<body>
    <!-- PÁGINA DE CAPA -->
    <div class="page cover-page">
        <div class="cover-background"></div>
        <div class="cover-logo"></div>
        <div class="cover-content">
            <h1 class="cover-title">RELATÓRIO DE<br> EVIDÊNCIAS</h1>
            <div class="cover-date">São Paulo, ${new Date(rel.dataInicio).toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric'
    })}</div>
        </div>
    </div>
    
    <!-- PÁGINA DE SERVIÇO -->
    <div class="page service-page">
        <div class="service-logo"></div>
        <div class="service-title">RELATÓRIO OPERAÇÃO <br> SÃO PAULO LIMPA</div>
        <div class="service-period">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPeriodForServicePage"])(rel)}</div>
        <div class="service-subregion">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][rel.sub]}</div>
        <div class="service-footer-line"></div>
    </div>
    
    <!-- PÁGINA FOTOGRÁFICA -->
    <div class="page photo-page">
        <div class="photo-header">
            <h2>Registro Fotográfico</h2>
        </div>
        
        <div class="photo-info">
            <p><strong>Assunto:</strong> ${rel.assunto}</p>
            <p><strong>Subprefeitura:</strong> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][rel.sub] || rel.sub}</p>
            <p><strong>Data:</strong> ${rel.dataInicio === rel.dataTermino ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForCover"])(rel.dataInicio) : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForCover"])(rel.dataInicio)} a ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForCover"])(rel.dataTermino)}`}</p>
            <p><strong>Local:</strong> ${rel.local || "-"}</p>
            <p><strong>Total de Fotos:</strong> ${rel.fotos.length}</p>
        </div>
        
        <div class="photo-grid">
            ${rel.fotos.map((foto, fotoIndex)=>`
                <div class="photo-item">
                    <img src="${foto.url}" alt="Foto ${fotoIndex + 1}" />
                    ${foto.descricao ? `<div class="photo-caption">${foto.descricao}</div>` : ''}
                </div>
            `).join('')}
        </div>
    </div>
</body>
</html>
  `;
}
async function exportRegistroPdf(rel) {
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
        // Gerar HTML
        const html = generateRegistroHTML(rel);
        // Carregar HTML na página
        await page.setContent(html, {
            waitUntil: 'networkidle0'
        });
        // Aguardar um pouco mais para garantir que as imagens carreguem
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        // Gerar PDF
        const pdf = await page.pdf({
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
        return pdf;
    } finally{
        await browser.close();
    }
}
// Função para gerar HTML de evidências de mutirões (consolidado por subs)
// Função para obter o nome completo da Subprefeitura
function getSubregionFullName(sub) {
    const subprefeiturasMap = {
        'CV': 'CASA VERDE / LIMÃO / CACHOEIRINHA',
        'JT': 'JAÇANÃ / TREMEMBÉ',
        'MG': 'VILA MARIA / VILA GUILHERME',
        'ST': 'SANTANA / TUCURUVI'
    };
    return subprefeiturasMap[sub] || sub;
}
// Função para gerar dados da tabela de informações gerais
function generateInfoTableData(mutiroes) {
    // Mapeamento das sub-regiões para subprefeituras
    const subprefeiturasMap = {
        'CV': 'Casa Verde / Limão / Cachoeirinha',
        'JT': 'Jaçanã / Tremembé',
        'MG': 'Vila Maria / Vila Guilherme',
        'ST': 'Santana / Tucuruvi'
    };
    // Agrupar mutirões por Subprefeitura
    const mutiroesPorSub = mutiroes.reduce((acc, mutirao)=>{
        const subRegional = mutirao.secoes[0]?.sub || 'SP';
        if (!acc[subRegional]) {
            acc[subRegional] = [];
        }
        acc[subRegional].push(mutirao);
        return acc;
    }, {});
    // Gerar dados para cada sub-região
    const dados = Object.entries(mutiroesPorSub).map(([sub, mutiroesSub])=>{
        // Pegar o primeiro endereço da sub-região (assumindo que todos são iguais)
        const endereco = mutiroesSub[0]?.secoes[0]?.local || '';
        // Somar quantitativos
        let colaboradores = 0;
        let veiculos = 0;
        let bocasLobo = 0;
        let volumeResiduos = 0;
        mutiroesSub.forEach((mutirao)=>{
            mutirao.quantitativo.forEach((q)=>{
                const quantidade = typeof q.quantidade === 'number' ? q.quantidade : typeof q.quantidade === 'string' && q.quantidade.trim() ? parseFloat(q.quantidade.replace(',', '.')) || 0 : 0;
                const descricao = q.descricao.toLowerCase();
                if (descricao.includes('colaborador')) {
                    colaboradores += quantidade;
                } else if (descricao.includes('equipamento')) {
                    veiculos += quantidade;
                } else if (descricao.includes('boca') || descricao.includes('lobo')) {
                    bocasLobo += quantidade;
                } else if (descricao.includes('volume') || descricao.includes('resíduo') || descricao.includes('residuo')) {
                    volumeResiduos += quantidade;
                }
            });
        });
        return {
            subprefeitura: subprefeiturasMap[sub] || sub,
            endereco,
            colaboradores,
            veiculos,
            bocasLobo,
            volumeResiduos
        };
    });
    // Ordenar por sub-região
    const orderMap = {
        'CV': 1,
        'JT': 2,
        'MG': 3,
        'ST': 4,
        'SP': 5
    };
    return dados.sort((a, b)=>{
        const subA = Object.keys(subprefeiturasMap).find((key)=>subprefeiturasMap[key] === a.subprefeitura) || 'SP';
        const subB = Object.keys(subprefeiturasMap).find((key)=>subprefeiturasMap[key] === b.subprefeitura) || 'SP';
        const orderA = orderMap[subA] || 999;
        const orderB = orderMap[subB] || 999;
        return orderA - orderB;
    });
}
// Função para gerar lista de subprefeituras baseada nos dados dos mutirões
function generateSubprefeiturasList(mutiroes) {
    // Mapeamento das sub-regiões para subprefeituras
    const subprefeiturasMap = {
        'CV': [
            'Casa Verde',
            'Limão',
            'Cachoeirinha'
        ],
        'JT': [
            'Jaçanã',
            'Tremembé'
        ],
        'MG': [
            'Vila Maria',
            'Vila Guilherme'
        ],
        'ST': [
            'Santana',
            'Tucuruvi'
        ]
    };
    // Extrair sub-regiões únicas dos mutirões
    const subRegioes = [
        ...new Set(mutiroes.map((m)=>m.secoes[0]?.sub || 'SP'))
    ];
    // Ordenar alfabeticamente
    const orderMap = {
        'CV': 1,
        'JT': 2,
        'MG': 3,
        'ST': 4,
        'SP': 5
    };
    subRegioes.sort((a, b)=>{
        const orderA = orderMap[a] || 999;
        const orderB = orderMap[b] || 999;
        return orderA - orderB;
    });
    // Gerar lista de subprefeituras
    const subprefeiturasList = subRegioes.map((sub)=>subprefeiturasMap[sub] || [
            sub
        ]).map((subprefeituras)=>subprefeituras.join(' / ')).join(' | ');
    return `Subprefeituras: ${subprefeiturasList}`;
}
function generateEvidenciasMutiroesHTML(mutiroes, data) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    // Ordenar mutirões alfabeticamente por sub-região antes de agrupar
    const mutiroesOrdenados = mutiroes.sort((a, b)=>{
        const subA = a.secoes[0]?.sub || 'SP';
        const subB = b.secoes[0]?.sub || 'SP';
        // Ordenação alfabética: CV, JT, MG, ST
        const orderMap = {
            'CV': 1,
            'JT': 2,
            'MG': 3,
            'ST': 4,
            'SP': 5 // fallback para outras sub-regiões
        };
        const orderA = orderMap[subA] || 999;
        const orderB = orderMap[subB] || 999;
        return orderA - orderB;
    });
    // Agrupar mutirões por sub-região (já ordenados)
    const mutiroesPorSub = mutiroesOrdenados.reduce((acc, mutirao)=>{
        const subRegional = mutirao.secoes[0]?.sub || 'SP';
        if (!acc[subRegional]) {
            acc[subRegional] = [];
        }
        acc[subRegional].push(mutirao);
        return acc;
    }, {});
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Evidências - Mutirões</title>
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
            width: 297mm; /* A4 landscape */
            min-height: 210mm;
            margin: 0 auto;
            background: white;
            position: relative;
        }
        
        .page.cover-page,
        .page.service-page,
        .page.quantitative-page,
        .page.subregion-page {
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
        
        /* PÁGINA DE QUANTITATIVO */
              .quantitative-page {
            min-height: 210mm;
            padding: 20mm;
        }
        
        .quantitative-header-line{
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: space-between;
            width: 100%;
            height: 50px;
            z-index: 10;
        }
        .quantitative-header {
            background: #304057;
            color: white;
            padding: 15px 20px;
            margin: 0 0 10px 0;
            text-align: center;
        }
        .quantitative-header-total {
            background: #00255f;
            color: white;
            padding: 15px 20px;
            margin: 0 0 5px 0;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        
        .subprefeituras-list {
            color: #2c3e50;
            padding: 5px 20px;
            margin: 0 0 5px 0;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
        }
        
        /* PÁGINA DE INFORMAÇÕES GERAIS */
        .info-page {
            min-height: 210mm;
            padding: 25mm 60px 10mm 40px;
            position: relative;
        }
        
        .info-header-line {
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: space-between;
            width: 100%;
            height: 40px;
            z-index: 10;
            margin-bottom: 20px;
        }
        
        .info-header-line .prefeitura-logo {
            position: absolute;
            left: 20px;
            top: 0px;
            transform: translateY(-50%);
            width: 120px;
            height: 120px;
            background: url('${images.prefeitura}') center/contain no-repeat;
        }
        
        .info-header-line .company-logo {
            position: absolute;
            right: 20px;
            top: 0px;
            transform: translateY(-50%);
            width: 120px;
            height: 100px;
            background: url('${images.logo}') center/contain no-repeat;
        }
        
        .info-header {
            color: #29571b;
            position: relative;
            display: flex;
            align-items: left;
            justify-content: center;
        }
        
        .info-header h2 {
            font-size: 24px;
            font-weight: bold;
            flex-grow: 1;
            text-align: left;
        }
        
        .info-date {
            color: black;
            background: #f8f9fa;
            padding: 0px;
            margin-top: 10px;
            font-size: 16px;
            font-weight: 600;
            text-align: left;
            border-radius: 8px;
        }
        
        .info-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 18px;
            margin-bottom: 10px;
        }
        
        .info-table th,
        .info-table td {
            border: 1px solid #f8a562;
            padding: 12px;
            text-align: center;
            font-weight: bold;
            font-size: 14px;
        }
        
        .info-table th {
            background: #dce6f2;
            font-weight: bold;
            color: #2c3e50;
            font-size: 16px;
            text-align: center;
        }
        
        .info-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        .info-table td:nth-child(3),
        .info-table td:nth-child(4),
        .info-table td:nth-child(5),
        .info-table td:nth-child(6) {
            text-align: center;
        }
        
        .info-footer-image {
            position: absolute;
            bottom: -10px;
            left: 70px;
            width: 120px;
            height: 120px;
            background: url('${images.info156}') center/contain no-repeat;
        }
        

        .quantitative-header h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            top: 300px;
            flex-grow: 1;
            text-align: center;
        }
        

        .quantitative-header-line .prefeitura-logo {
            position: absolute;
            left: 20px;
            top: 0px;
            transform: translateY(-50%);
            width: 120px;
            height: 120px;
            background: url('${images.prefeitura}') center/contain no-repeat;
        }
        
        .quantitative-header-line .company-logo {
            position: absolute;
            right: 20px;
            top: 0px;
            transform: translateY(-50%);
            width: 120px;
            height: 100px;
            background: url('${images.logo}') center/contain no-repeat;
        }
        
        .quantitative-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 16px;
            border-radius: 0 0 8px 8px;
        }
        
        .quantitative-table th,
        .quantitative-table td {
            border: 1px solid #ddd;
            padding: 5px;
            padding-left: 20px;
            text-align: left;
        }
        
        .quantitative-table th {
            background: #dce6f2;
            font-weight: bold;
            color: #2c3e50;
            font-size: 18px;
            line-height: 2.5;
            text-align: center;

        }
        
        .quantitative-table tr:nth-child(even) {
            background: #dce6f2;
        }
        
        .quantitative-table td:nth-child(2) {
            text-align: center;
        }
        
        /* PÁGINA DE Subprefeitura */
        .subregion-page {
            padding: 20mm 60px 10mm 40px;
        }
     .subregion-cover-title {
            font-size: 26px;
            color: rgb(0, 48, 107);
            margin-bottom: 10px;
            font-weight: bold;
     }

    .subregion-cover-date {
            font-size: 24px;
            color: rgb(0, 48, 107);
            margin-bottom: 10px;
            font-weight: bold;
        
    }
        /* PÁGINA DE DESCRIÇÃO DOS ITENS */
        .items-description-page {
            padding: 20mm 60px 10mm 40px;
        }
        
        .subregion-name{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .items-description-header {
            background: #34495e;
            color: white;
            padding: 15px 20px;
            text-align: center;
        }
        
        .items-description-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 14px;
            border-radius: 8px;
            margin-top: 15px;
        }
        
        .items-description-table th,
        .items-description-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        /* Centralizar apenas a coluna "Item" (primeira coluna) */
        .items-description-table th:first-child,
        .items-description-table td:first-child {
            text-align: center;
        }
        
        .items-description-table th {
            background: #f8f9fa;
            font-weight: bold;
            color: #2c3e50;
        }
        
        .items-description-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        .subregion-header {
            background: #3498db;
            color: white;
            padding: 15px 20px;
            margin: 0 0 10px 0;
        }
        
        .subregion-header h2 {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
        }
        
        .subregion-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 20px;
        }
        
        .subregion-info {
            background: #f8f9fa;
            padding: 10px;
            border-radius: 8px;
        }
        
        .subregion-info h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .subregion-info p {
            margin-bottom: 10px;
            font-size: 14px;
        }
        
        .team-photo {
            text-align: center;
        }
        
        .team-photo img {
            max-width: 500px;
            max-height: 500px;
            width: auto;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            object-fit: contain;
        }
        
        .team-photo-caption {
            font-size: 12px;
            color: #666;
            margin-top: 10px;
            font-style: italic;
        }
        
        /* PÁGINA DA TABELA DE INFORMAÇÕES */
        .info-table-page {
            padding: 10mm 60px 10mm 40px;
            min-height: 210mm;
        }
        
        .info-table-header {
            background: #34495e;
            color: white;
            padding: 15px 20px;
            margin: 0px 60px 0px 30px;
        }
        
        .info-table-header h2 {
            font-size: 20px;
            font-weight: bold;
            margin: 0;
        }
        
        /* TABELA DE INFORMAÇÕES */
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 12px;
        }
        
        .info-table th,
        .info-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            word-wrap: break-word;
        }
        
        .info-table th {
            background: #f8f9fa;
            font-weight: bold;
            color: #2c3e50;
        }
        
        .info-table tr {
            /* Quebra de linha natural */
        }
        
        .info-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        /* PÁGINA DE SERVIÇO FOTOGRÁFICO */
        .service-photo-page {
            padding: 20mm 60px 10mm 40px;
            position: relative;
        }
        
        .service-photo-header {
            background: rgb(0, 48, 107);
            color: white;
            padding: 20px;
            margin: -20mm -20mm 30px -20mm;
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
        
        .photo-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-top: 20px;
        }
        
        .photo-item {
            text-align: center;
            border-radius: 12px;
            background: #fff;
            box-shadow: 0 2px 10px 0 rgba(44, 62, 80, 0.10), 0 1.5px 4px 0 rgba(52, 152, 219, 0.08);
            border: 1.5px solid #e0e6ed;
            padding: 4px 2px 8px 2px;
            margin-bottom: 4px;
            transition: box-shadow 0.2s;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    
        
        .photo-item img {
            max-width: 100%;
            max-height: 750px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 15px;

        }
        
        .photo-caption {
            margin-top: 5px;
            font-size: 14px;
            color: rgb(0, 48, 107);
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        /* GRID DE FOTOS DINÂMICO PARA MUTIRÃO CONSOLIDADO - REFATORADO */
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
            min-height: 380px;
            max-height: 430px;
        }
        
        .photos-grid.two-photos .photo-container {
            min-height: 380px;
            max-height: 430px;
        }
        
        .photos-grid.three-photos .photo-container {
            min-height: 380px;
            max-height: 430px;
        }
        
        .photo-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
        
        .photo-description {
            font-size: 12px;
            color: #2c3e50;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 5px;
            text-align: center;
            line-height: 1.2;
        }
        
        /* CABEÇALHO DA PÁGINA FOTOGRÁFICA PARA MUTIRÃO */
        .photo-page-header {
            position: relative;
            background: #34495e;
            color: white;
            padding: 15px 20px;
            margin: 0px 60px 0px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
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
        
        /* DESCRITORES PARA MUTIRÃO */
        .photo-descriptors {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 12px;
            line-height: 1.4;
        }
        
        .descriptor-item {
            margin-bottom: 8px;
            color: #2c3e50;
            line-height: 0.8;
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
            padding: 20px 60px 0px 40px;
            margin: -20mm -60px 0px -40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 60px;
        }
        
        
        .prefeitura-logo {
            width: 120px;
            height: 120px;
            background: url('${images.prefeitura}') center/contain no-repeat;
            margin-right: 30px;
        }
        
        .company-logo {
            width: 120px;
            height: 120px;
            background: url('${images.logo}') center/contain no-repeat;
            margin-left: 30px;
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
        
        @media print {
            .page {
                margin: 0;
                box-shadow: none;
            }
            
            /* Configurações específicas para quebra de página */
            .page.cover-page,
            .page.service-page,
            .page.quantitative-page {
                page-break-after: always;
            }
            
            .page:last-child {
                page-break-after: avoid;
            }
            
            /* Evitar quebras dentro de elementos importantes */
            .photo-header-with-logos,
            .photo-descriptors,
            .info-table-header {
                page-break-after: avoid;
                break-after: avoid;
            }
            
            /* Controle específico para seção fotográfica */
            .service-photo-page {
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
            
            .info-table {
                page-break-inside: auto;
            }
            
            .info-table tr {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    <!-- PÁGINA DE CAPA -->
    <div class="page cover-page">
        <div class="cover-background"></div>
        <div class="cover-logo"></div>
        <div class="cover-content">
            <h1 class="cover-title">RELATÓRIO DE<br> EVIDÊNCIAS</h1>
            <div class="cover-date">São Paulo, ${new Date(data).toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric'
    })}</div>
        </div>
    </div>
    
    <!-- PÁGINA DE SERVIÇO -->
    <div class="page service-page">
        <div class="service-logo"></div>
        <div class="service-title">RELATÓRIO OPERAÇÃO <br> SÃO PAULO LIMPA</div>
        <div class="service-period">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForCover"])(data)}</div>
        <div class="service-subregion">EVIDÊNCIAS CONSOLIDADAS</div>
        <div class="service-footer-line"></div>
    </div>
    
    <!-- PÁGINA DE INFORMAÇÕES GERAIS -->
    <div class="page info-page">
        <div class="info-header-line">
            <div class="prefeitura-logo"></div>
            <div class="company-logo"></div>
        </div>
        <div class="info-header">
            <h2>Informações Gerais</h2>
        </div>
        
        <div class="info-date">
            Data: ${(()=>{
        const d = new Date(data);
        d.setDate(d.getDate() + 1);
        return d.toLocaleDateString('pt-BR');
    })()}
        </div>
        
        <table class="info-table">
            <thead>
                <tr>
                    <th colspan="6" style="text-align: center;">Quantitativo do Mutirão - Operação São Paulo Limpa</th>
                </tr>
                <tr>
                    <th style="text-align: center;">Subprefeitura</th>
                    <th style="text-align: center;">Endereço</th>
                    <th style="text-align: center;">Colaboradores</th>
                    <th style="text-align: center;">Qnt. veículos</th>
                    <th style="text-align: center;">Bocas de lobo limpas</th>
                    <th style="text-align: center;">Volume de resíduos coletados (Ton.)</th>
                </tr>
            </thead>
            <tbody>
                ${(()=>{
        const dados = generateInfoTableData(mutiroes);
        return dados.map((dado)=>`
                    <tr>
                        <td>${dado.subprefeitura}</td>
                        <td>${dado.endereco}</td>
                        <td>${dado.colaboradores}</td>
                        <td>${dado.veiculos}</td>
                        <td>${dado.bocasLobo}</td>
                        <td>${dado.volumeResiduos}</td>
                    </tr>
                  `).join('');
    })()}
            </tbody>
        </table>
        
        <div class="info-footer-image"></div>
    </div>
    
    <!-- PÁGINA DE QUANTITATIVO -->
    <div class="page quantitative-page">

        <div class="quantitative-header-line">
            <div class="prefeitura-logo"></div>
            <div class="company-logo"></div>
        </div>
        <div class="subprefeituras-list">
            ${generateSubprefeiturasList(mutiroes)}
        </div>
        <div class="quantitative-header-total">
            <h2>QUANTITATIVO TOTAL</h2>
        </div>
        
        <table class="quantitative-table">
            <thead>
                <tr>
                    <th>Descrição do Serviço</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                ${(()=>{
        // Agregar quantitativos de todos os mutirões
        const quantitativosAgregados = {};
        mutiroes.forEach((mutirao)=>{
            mutirao.quantitativo.forEach((q)=>{
                const descricao = q.descricao;
                const quantidade = typeof q.quantidade === 'number' ? q.quantidade : typeof q.quantidade === 'string' && q.quantidade.trim() ? parseFloat(q.quantidade.replace(',', '.')) || 0 : 0;
                if (!quantitativosAgregados[descricao]) {
                    quantitativosAgregados[descricao] = 0;
                }
                quantitativosAgregados[descricao] += quantidade;
            });
        });
        return Object.entries(quantitativosAgregados).map(([descricao, quantidade])=>`
                    <tr>
                        <td>${descricao}</td>
                        <td>${quantidade % 1 === 0 ? quantidade.toString() : quantidade.toFixed(1).replace('.', ',')}</td>
                    </tr>
                  `).join('');
    })()}
            </tbody>
        </table>
    </div>
    
    ${Object.entries(mutiroesPorSub).map(([subRegional, mutiroesSub])=>{
        const mutiroesArray = mutiroesSub;
        const subregionFullName = getSubregionFullName(subRegional);
        return `

    <!-- CAPA DA Subprefeitura: ${subRegional} -->
    <div class="page service-page">
        <div class="service-logo"></div>
        <div class="service-title">RELATÓRIO OPERAÇÃO <br> SÃO PAULO LIMPA</div>
        <div class="subregion-cover-title">${subregionFullName}</div>
        <div class="subregion-cover-date">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForCover"])(data)}</div>
        <div class="service-footer-line"></div>

    </div>

        
        ${mutiroesArray.map((mutirao, mutiraoIndex)=>`
            ${mutirao.secoes.map((sec, idx)=>`
                ${sec.mapaFotoUrl ? `
                    <!-- PÁGINA DO MAPA DA Subprefeitura: ${subRegional} -->
                    <div class="page subregion-page">
                        <div class="photo-header-with-logos">
                            <div class="prefeitura-logo"></div>
                            <div class="company-logo"></div>
                        </div>
                        <div class="subregion-content">
                            <div class="subregion-info">
                                <h3>Operação São Paulo Limpa</h3>
                                <p><strong>Subprefeitura / Regional:</strong> ${subregionFullName}</p>
                                <p><strong>Serviço:</strong> Mutirão</p>
                                <p><strong>Local:</strong> ${sec.local ?? "-"}</p>
                                <p><strong>Data:</strong> ${sec.data.split('-').reverse().join('/')}</p>
                                <p><strong>Descrição:</strong> ${sec.descricao || "Nenhuma descrição disponível"}</p>
                            </div>
                            
                            <div class="team-photo">
                                <img src="${sec.mapaFotoUrl}" alt="Mapa da Operação" />
                                <div class="team-photo-caption">Mapa da Operação</div>
                            </div>
                        </div>
                    </div>
                ` : ''}
                
                ${sec.equipeFotoUrl ? `
                    <!-- PÁGINA DA FOTO DA EQUIPE: ${subRegional} -->
                    <div class="page subregion-page">
                        <div class="photo-header-with-logos">
                            <div class="prefeitura-logo"></div>
                            <div class="company-logo"></div>
                        </div>
                        <div class="subregion-content">
                            <div class="subregion-info">
                                <h3>Operação São Paulo Limpa</h3>
                                <p><strong>Subprefeitura / Regional:</strong> ${subregionFullName}</p>
                                <p><strong>Serviço:</strong> Mutirão</p>
                                <p><strong>Local:</strong> ${sec.local ?? "-"}</p>
                                <p><strong>Data:</strong> ${sec.data.split('-').reverse().join('/')}</p>
                                <p><strong>Descrição:</strong> ${sec.descricao || "Nenhuma descrição disponível"}</p>
                            </div>
                            
                            <div class="team-photo">
                                <img src="${sec.equipeFotoUrl}" alt="Foto da Equipe" />
                                <div class="team-photo-caption">Foto da Equipe</div>
                            </div>
                        </div>
                    </div>
                ` : ''}
                
                ${sec.informacoes.filter((i)=>i.descricao.trim() !== "").length > 0 ? `
                    <!-- PÁGINA DA TABELA DE INFORMAÇÕES: ${subRegional} -->
                    <div class="page items-description-page">
                    <div class="subregion-name">
                        <h3 class="subregion-name-title">Subprefeitura: ${subregionFullName}</h3> 
                    </div>
                        <div class="items-description-header">
                            <h2>INFORMAÇÕES</h2>
                        </div>
                        
                        <table class="items-description-table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${sec.informacoes.filter((i)=>i.descricao.trim() !== "").map((i)=>`
                                    <tr>
                                        <td>${i.ordem}</td>
                                        <td>${i.descricao}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                ` : ''}
            `).join('')}
        `).join('')}
        
        <!-- PÁGINA DE QUANTITATIVO DA Subprefeitura -->
        <div class="page quantitative-page">
            <div class="quantitative-header-line">
                <div class="prefeitura-logo"></div>
                <div class="company-logo"></div>
            </div>
            <div class="quantitative-header">
                <h2>Quantitativo da Subprefeitura</h2>
                <p>${subregionFullName}</p>
            </div>
            
            <table class="quantitative-table">
                <thead>
                    <tr>
                        <th>Descrição do Serviço</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    ${(()=>{
            // Agregar quantitativos dos mutirões desta sub-região
            const quantitativosSub = {};
            mutiroesArray.forEach((mutirao)=>{
                mutirao.quantitativo.forEach((q)=>{
                    const descricao = q.descricao;
                    const quantidade = typeof q.quantidade === 'number' ? q.quantidade : typeof q.quantidade === 'string' && q.quantidade.trim() ? parseFloat(q.quantidade.replace(',', '.')) || 0 : 0;
                    if (!quantitativosSub[descricao]) {
                        quantitativosSub[descricao] = 0;
                    }
                    quantitativosSub[descricao] += quantidade;
                });
            });
            return Object.entries(quantitativosSub).map(([descricao, quantidade])=>`
                        <tr>
                            <td>${descricao}</td>
                            <td>${quantidade % 1 === 0 ? quantidade.toString() : quantidade.toFixed(1).replace('.', ',')}</td>
                        </tr>
                      `).join('');
        })()}
                </tbody>
            </table>
        </div>
        
        ${mutiroesArray.map((mutirao, mutiraoIndex)=>`
            ${mutirao.secoes.map((sec, idx)=>`
                
                ${sec.servicos.map((servico)=>`
                    ${servico.fotos.length > 0 ? `
                        ${(()=>{
                        const totalPages = Math.ceil(servico.fotos.length / 3);
                        let html = '';
                        for(let pageIndex = 0; pageIndex < totalPages; pageIndex++){
                            const startIndex = pageIndex * 3;
                            const endIndex = startIndex + 3;
                            const pagePhotos = servico.fotos.slice(startIndex, endIndex);
                            const isFirstPage = pageIndex === 0;
                            // Só criar página se houver fotos
                            if (pagePhotos.length > 0) {
                                html += `
                              <!-- PÁGINA FOTOGRÁFICA DO SERVIÇO: ${servico.assunto} - Página ${pageIndex + 1} -->
                              <div class="page service-photo-page">
                                  <div class="photo-header-with-logos">
                                      <div class="prefeitura-logo"></div>
                                      <h2> ${servico.fotos.length > 3 ? `- Página ${pageIndex + 1}` : ''}</h2>
                                      <div class="company-logo"></div>
                                  </div>
                                  
                                  ${isFirstPage ? `
                                  <div class="photo-descriptors">
                                      <div class="descriptor-item">
                                          <strong>PREFEITURA REGIONAL:</strong> ${subregionFullName}
                                      </div>
                                      <div class="descriptor-item">
                                          <strong>Operação São Paulo Limpa</strong>
                                      </div>
                                      <div class="descriptor-item">
                                          <strong>Serviço(s):</strong> ${servico.assunto}
                                      </div>
                                      <div class="descriptor-item">
                                          <strong>Data:</strong> ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForPhotos"])(sec.data)}
                                      </div>
                                  </div>
                                  ` : ''}
                                  
                                  <div class="photos-grid ${pagePhotos.length === 1 ? 'one-photo' : pagePhotos.length === 2 ? 'two-photos' : 'three-photos'}">
                                      ${pagePhotos.map((foto, index)=>`
                                          <div class="photo-item">
                                              <div class="photo-container">
                                                  <img src="${foto.url}" alt="Foto ${startIndex + index + 1}" />
                                              </div>
                                              ${foto.descricao ? `<div class="photo-description">${foto.descricao}</div>` : ''}
                                          </div>
                                      `).join('')}
                                  </div>
                              </div>
                              `;
                            }
                        }
                        return html;
                    })()}
                    ` : ''}
                `).join('')}
            `).join('')}
        `).join('')}
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
async function exportEvidenciasMutiroesPdf(mutiroes, data) {
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
        // Gerar HTML
        const html = generateEvidenciasMutiroesHTML(mutiroes, data);
        // Carregar HTML na página
        await page.setContent(html, {
            waitUntil: 'networkidle0'
        });
        // Aguardar um pouco mais para garantir que as imagens carreguem
        await new Promise((resolve)=>setTimeout(resolve, 2000));
        // Gerar PDF
        const pdf = await page.pdf({
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
        return pdf;
    } finally{
        await browser.close();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@sparticuz/chromium-min [external] (@sparticuz/chromium-min, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@sparticuz/chromium-min");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
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
"[project]/lib/pdf/evidencias-modern.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "exportEventosPdf",
    ()=>exportEventosPdf,
    "exportEvidenciasPdf",
    ()=>exportEvidenciasPdf
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
// Função para formatar data para a capa
function formatDateForCover(date) {
    if (!date) return 'São Paulo, Data não informada';
    const d = new Date(date);
    // Verificar se a data é válida
    if (isNaN(d.getTime())) {
        return 'São Paulo, Data não informada';
    }
    const month = d.toLocaleDateString('pt-BR', {
        month: 'long'
    });
    const year = d.getFullYear();
    return `São Paulo, ${month.charAt(0).toUpperCase() + month.slice(1)} de ${year}`;
}
// Função para gerar HTML do relatório de eventos
function generateEventosHTML(rel) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Eventos</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Anton:wght@400&display=swap');
        
        @page {
            size: A4 landscape;
            margin: 0;
        }
        
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background: white;
        }
        
        .page {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            page-break-after: always;
        }
        
        .page:last-child {
            page-break-after: avoid;
        }
        
        /* Capa */
        .cover {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            text-align: center;
            padding: 2rem;
        }
        
        .cover h1 {
            font-family: 'Anton', sans-serif;
            font-size: 3rem;
            margin: 0 0 2rem 0;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        
        .cover h2 {
            font-size: 1.5rem;
            margin: 0 0 1rem 0;
            font-weight: 300;
        }
        
        .cover .date {
            font-size: 1.2rem;
            margin: 2rem 0;
            opacity: 0.9;
        }
        
        .cover .logo {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            width: 120px;
            height: auto;
        }
        
        /* Contra capa */
        .back-cover {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            text-align: center;
            padding: 2rem;
        }
        
        .back-cover h1 {
            font-family: 'Anton', sans-serif;
            font-size: 4rem;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        
        /* Página de conteúdo */
        .content-page {
            background: white;
            padding: 2rem;
            color: #1f2937;
        }
        
        .content-page h1 {
            font-family: 'Anton', sans-serif;
            font-size: 2.5rem;
            color: #1e40af;
            margin: 0 0 2rem 0;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .info-item {
            background: #f8fafc;
            padding: 1rem;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        
        .info-item h3 {
            font-size: 0.9rem;
            color: #6b7280;
            margin: 0 0 0.5rem 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .info-item p {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1f2937;
            margin: 0;
        }
        
        .description {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 8px;
            margin-bottom: 2rem;
        }
        
        .description h3 {
            font-size: 1.1rem;
            color: #1e40af;
            margin: 0 0 1rem 0;
            font-weight: 600;
        }
        
        .description p {
            font-size: 1rem;
            line-height: 1.6;
            color: #374151;
            margin: 0;
        }
        
        .photos-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-top: 2rem;
        }
        
        .photo-item {
            text-align: center;
        }
        
        .photo-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .photo-caption {
            font-size: 10px;
            font-weight: bold;
            color: #1f2937;
            margin-top: 0.5rem;
            text-align: center;
            line-height: 1.2;
        }
        
        .no-photos {
            text-align: center;
            color: #6b7280;
            font-style: italic;
            padding: 2rem;
        }
    </style>
</head>
<body>
    <!-- Capa -->
    <div class="page cover">
        <h1>RELATÓRIO DE EVENTOS</h1>
        <h2>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][rel.sub] || rel.sub}</h2>
        <div class="date">${formatDateForCover(rel.dataInicio || rel.data)}</div>
        <img src="${images.logo}" alt="Logo" class="logo">
    </div>
    
    <!-- Contra capa -->
    <div class="page back-cover">
        <h1>EVENTO</h1>
    </div>
    
    <!-- Página de conteúdo -->
    <div class="page content-page">
        <h1>EVENTO</h1>
        
        <div class="info-grid">
            <div class="info-item">
                <h3>Período</h3>
                <p>${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPeriodForServicePage"])(rel)}</p>
            </div>
            <div class="info-item">
                <h3>Sub-região</h3>
                <p>${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][rel.sub] || rel.sub}</p>
            </div>
            <div class="info-item">
                <h3>Local</h3>
                <p>${rel.local || 'Não informado'}</p>
            </div>
            <div class="info-item">
                <h3>Nome do Evento</h3>
                <p>${rel.nomeEvento || 'Não informado'}</p>
            </div>
        </div>
        
        ${rel.descricao ? `
        <div class="description">
            <h3>Descrição</h3>
            <p>${rel.descricao}</p>
        </div>
        ` : ''}
        
        ${rel.fotos && rel.fotos.length > 0 ? `
        <div class="photos-grid">
            ${rel.fotos.map((foto)=>`
                <div class="photo-item">
                    <img src="${foto.url}" alt="Foto do evento">
                    <div class="photo-caption">${rel.nomeEvento || 'Evento'}</div>
                </div>
            `).join('')}
        </div>
        ` : `
        <div class="no-photos">
            Nenhuma foto disponível para este evento.
        </div>
        `}
    </div>
</body>
</html>`;
}
// Função para gerar HTML do relatório de evidências
function generateEvidenciasHTML(rel) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Evidências</title>
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
        
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 12px;
            line-height: 1.4;
            background: white;
        }
        
        .page {
            width: 100%;
            min-height: calc(100vh - 0px);
            box-sizing: border-box;
            page-break-after: always;
            position: relative;
            overflow: hidden;
            padding: 30px 60px 30px 30px; /* Substitui margin por padding */
            /* As margens são controladas pelo padding agora */
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        .page:last-child {
            page-break-after: avoid;
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
            box-sizing: border-box;
            break-inside: avoid;
            page-break-inside: avoid;
            /* Removido o padding da capa */
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
            right: 10px;
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
            right: 50px;
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
            padding: 30px 60px 30px 30px; /* Garante padding */
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
            bottom: -53px;
            left: 0;
            width: 100%;
            height: 40px;
            background: url('${images.line}') no-repeat;
            background-size: 100% 100%;
            z-index: 10;
        }
        
        /* PÁGINA DE RESUMO */
        .summary-page {
            page-break-before: always;
            min-height: calc(210mm - 0px);
            padding: 20px 60px 20px 30px;
            box-sizing: border-box;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        .summary-header {
            background: #34495e;
            color: white;
            padding: 15px 20px;
            margin: 0 0 20px 0;
        }
        
        .summary-header h2 {
            font-size: 20px;
            font-weight: bold;
        }
        
        .summary-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            font-size: 12px;
        }
        
        .summary-table th,
        .summary-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        
        .summary-table th {
            background: #f8f9fa;
            font-weight: bold;
            color: #2c3e50;
        }
        
        .summary-table tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        /* PÁGINA DE SUB-REGIÃO */
        .subregion-page {
            page-break-before: always;
            min-height: calc(210mm - 0px);
            padding: 20px 60px 20px 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-sizing: border-box;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        .subregion-header {
            background: #3498db;
            color: white;
            padding: 15px 20px;
            margin: 0 0 20px 0;
            width: 100%;
        }
        
        .subregion-header h2 {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
        }
        
        .subregion-content {
            font-size: 24px;
            color: #2c3e50;
            font-weight: bold;
            margin: 50px 0;
        }
        
        .subregion-line {
            width: 100%;
            height: 2px;
            background: #2c3e50;
            margin: 20px 0;
        }
        
        /* PÁGINA DE CONTEÚDO */
        .content-page {
            min-height: calc(210mm - 0px);
            padding: 40px 60px 40px 30px;
            box-sizing: border-box;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        /* CABEÇALHO DA PÁGINA FOTOGRÁFICA */
        .photo-page-header {
            position: relative;
            background: #34495e;
            color: white;
            min-height: 80px;
            padding: 60px 0px 0px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            page-break-after: avoid;
            break-after: avoid;
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        
        .photo-logo {
            width: 40px;
            height: 80px;
            background: url('${images.logo}') center/contain no-repeat;
        }
        
        /* DESCRITORES */
        .photo-descriptors {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            font-size: 12px;
            line-height: 1.4;
            break-inside: avoid;
            page-break-inside: avoid;
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
        .photo-header{
            display: flex;
            position: relative;
            justify-content: space-between;
            align-items: space-between;
            width: 100%;
            height: 80px;
            z-index: 10;
            break-inside: avoid;
            page-break-inside: avoid;
        }

        .photo-header .prefeitura-logo {
            position: absolute;
            left: 20px;
            top: 30px;
            transform: translateY(-50%);
            width: 120px;
            height: 120px;
            background: url('${images.prefeitura}') center/contain no-repeat;
        }
        
        .photo-header .company-logo {
            position: absolute;
            right: 20px;
            top: 30px;
            transform: translateY(-50%);
            width: 120px;
            height: 100px;
            background: url('${images.logo}') center/contain no-repeat;
        }  
            
        
        /* GRID DE FOTOS DINÂMICO */
        .photos-grid {
            display: grid;
            gap: 20px;
            margin-top: 25px;
            justify-content: center;
            break-inside: avoid;
            page-break-inside: avoid;
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
            break-inside: avoid;
            page-break-inside: avoid;
        }
        
        .photo-container {
            width: 100%;
            border: none;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 10px;
            break-inside: avoid;
            page-break-inside: avoid;
            /* Ajuste para garantir que a altura máxima não ultrapasse a página */
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
        }
        
        /* ALTURA UNIFICADA PARA TODAS AS FOTOS - SEM QUEBRA DE PÁGINA */
        .photos-grid.one-photo .photo-container {
            height: 380px;
            max-height: 380px;
        }
        
        .photos-grid.two-photos .photo-container {
            height: 380px;
            max-height: 380px;
        }
        
        .photos-grid.three-photos .photo-container {
            height: 380px;
            max-height: 380px;
        }
        
        .photo-container img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
        
        .photo-description {
            font-size: 13px;
            color: #2c3e50;
            font-weight: bold;
        }
        
        .photos-grid.one-photo .photo-description {
            display: none;
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
                break-inside: avoid;
                page-break-inside: avoid;
            }
            
            .page:last-child {
                page-break-after: avoid;
            }
            
            /* Evitar quebras dentro de elementos importantes */
            .photo-header-with-logos,
            .photo-descriptors {
                page-break-after: avoid;
                break-after: avoid;
                break-inside: avoid;
                page-break-inside: avoid;
            }
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
            <h1 class="cover-title">RELATÓRIO DE EVIDÊNCIAS</h1>
            <div class="cover-date">${formatDateForCover(rel.tipoServico === 'DDS' ? rel.dataInicio : 'data' in rel ? rel.data : rel.dataInicio)}</div>
        </div>
    </div>
    
    
    <!-- PÁGINA DE SERVIÇO -->
    <div class="page service-page">
        <div class="service-logo"></div>
        <div class="service-title">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TITULOS_RELATORIOS"][rel.tipoServico]}</div>
        <div class="service-period">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatPeriodForServicePage"])(rel)}</div>
        <div class="service-subregion">${(()=>{
        let subCode = 'SP';
        if ('sub' in rel) {
            subCode = rel.sub;
        } else if ('secoes' in rel && rel.secoes && rel.secoes.length > 0) {
            subCode = rel.secoes[0].sub;
        }
        console.log('🔍 Debug evidencias-modern - subCode:', subCode, 'SUB_REGIOES[subCode]:', __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][subCode]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][subCode] || subCode;
    })()}</div>
        <div class="final-bottom-line"></div>
    </div>
    
    ${(()=>{
        // Obter fotos baseado no tipo de relatório
        let fotos = [];
        if ('fotos' in rel && rel.fotos) {
            if (rel.tipoServico === 'DDS') {
                // Para DDS, agrupar por descritivo e manter ordem dentro do grupo
                const fotosAgrupadas = rel.fotos.reduce((acc, foto)=>{
                    const descricao = foto.descricao || 'Sem descrição';
                    if (!acc[descricao]) {
                        acc[descricao] = [];
                    }
                    acc[descricao].push(foto);
                    return acc;
                }, {});
                // Converter de volta para array, mantendo ordem dos grupos
                fotos = Object.values(fotosAgrupadas).flat();
            } else {
                // Para outros tipos, ordenar fotos pela ordem de upload
                fotos = rel.fotos.sort((a, b)=>{
                    const ordemA = a.ordem || 0;
                    const ordemB = b.ordem || 0;
                    return ordemA - ordemB;
                });
            }
        }
        if (fotos.length === 0) return '';
        const totalPages = Math.ceil(fotos.length / 3);
        let html = '';
        for(let pageIndex = 0; pageIndex < totalPages; pageIndex++){
            const startIndex = pageIndex * 3;
            const endIndex = startIndex + 3;
            const pagePhotos = fotos.slice(startIndex, endIndex);
            const isFirstPage = pageIndex === 0;
            if (pagePhotos.length > 0) {
                html += `
          <!-- PÁGINA FOTOGRÁFICA ${pageIndex + 1} -->
          <div class="page content-page">
        <div class="photo-header">
            <div class="prefeitura-logo"></div>
            <div class="company-logo"></div>
        </div>
              
              ${isFirstPage || rel.tipoServico === 'ACUMULADOR' || rel.tipoServico === 'ALAGAMENTOS' || rel.tipoServico === 'DDS' ? `
              <div class="photo-descriptors">
                  <div class="descriptor-item">
                      <strong>PREFEITURA REGIONAL:</strong> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"]['sub' in rel ? rel.sub : 'secoes' in rel ? rel.secoes[0].sub : 'SP'] || ('sub' in rel ? rel.sub : 'secoes' in rel ? rel.secoes[0].sub : 'SP')}
                  </div>
                  <div class="descriptor-item">
                      <strong>Serviço(s):</strong> ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TIPOS_SERVICO"][rel.tipoServico]}
                  </div>
                  ${rel.tipoServico !== 'DDS' ? `
                  <div class="descriptor-item">
                      <strong>Local / Evento:</strong> ${'local' in rel ? rel.local : 'endereco' in rel ? rel.endereco : 'N/A'}
                  </div>
                  ${rel.tipoServico === 'REVITALIZACAO' ? `
                  <div class="descriptor-item">
                      <strong>Peso:</strong> ${'peso' in rel ? rel.peso : 'N/A'}
                  </div>
                  <div class="descriptor-item">
                      <strong>Frequência:</strong> ${'frequencia' in rel ? rel.frequencia : 'N/A'}
                  </div>
                  ` : `
                  <div class="descriptor-item">
                      <strong>Descrição:</strong> ${'descricao' in rel ? rel.descricao : 'N/A'}
                  </div>
                  `}
                  ` : ''}
                  <div class="descriptor-item">
                      <strong>Período/ Data:</strong> ${(()=>{
                    // Sempre tentar mostrar período (data início a data fim), se ambos existirem e forem diferentes
                    const dataInicio = 'dataInicio' in rel && rel.dataInicio ? rel.dataInicio : 'data' in rel && rel.data ? rel.data : null;
                    const dataFim = 'dataFim' in rel && rel.dataFim ? rel.dataFim : null;
                    // Se não houver dataFim, mas houver dataInicio, mostrar só a dataInicio
                    if (dataInicio && dataFim && dataInicio !== dataFim) {
                        const dInicio = new Date(dataInicio + 'T00:00:00');
                        const dFim = new Date(dataFim + 'T00:00:00');
                        return `${dInicio.toLocaleDateString('pt-BR')} a ${dFim.toLocaleDateString('pt-BR')}`;
                    } else if (dataInicio) {
                        const d = new Date(dataInicio + 'T00:00:00');
                        return `${d.toLocaleDateString('pt-BR')} a ${d.toLocaleDateString('pt-BR')}`;
                    }
                    return 'Data não informada';
                })()}
                  </div>
              </div>
              ` : ''}
              
              <div class="photos-grid ${pagePhotos.length === 1 ? 'one-photo' : pagePhotos.length === 2 ? 'two-photos' : 'three-photos'}">
                  ${pagePhotos.map((foto, index)=>`
                      <div class="photo-item">
                          <div class="photo-container">
                              <img src="${foto.url}" alt="Foto ${startIndex + index + 1}" />
                          </div>
                          ${foto.descricao ? `<div class="photo-description">${foto.descricao}</div>` : ''}
                      </div>
                  `).join('')}
              </div>
          </div>
          `;
            }
        }
        return html;
    })()}
    
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
async function exportEvidenciasPdf(rel) {
    console.log('🔄 Iniciando exportEvidenciasPdf para:', rel.tipoServico);
    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPuppeteerConfig"])();
    // Usar puppeteer completo se disponível, senão usar puppeteer-core
    const puppeteerToUse = puppeteerDev || __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__["default"];
    const browser = await puppeteerToUse.launch(config);
    try {
        const page = await browser.newPage();
        await page.setViewport({
            width: 1123,
            height: 794
        }); // A4 landscape em pixels
        // Configurar timeout para imagens
        await page.setDefaultTimeout(30000);
        const html = generateEvidenciasHTML(rel);
        console.log('📄 HTML gerado, tamanho:', html.length);
        await page.setContent(html, {
            waitUntil: 'domcontentloaded'
        });
        console.log('📄 Conteúdo carregado');
        // Aguardar carregamento de imagens de forma mais robusta
        try {
            await page.waitForFunction(()=>{
                const images = document.querySelectorAll('img');
                return Array.from(images).every((img)=>img.complete);
            }, {
                timeout: 300000
            }); // 5 minutos para carregar HTML com muitas imagens
            console.log('✅ Todas as imagens carregadas');
        } catch (imgError) {
            console.warn('⚠️ Timeout no carregamento de imagens, continuando...');
        }
        // Aguardar um pouco mais para garantir estabilidade
        await new Promise((resolve)=>setTimeout(resolve, 3000));
        console.log('🔄 Gerando PDF...');
        const pdfBuffer = await page.pdf({
            format: 'A4',
            landscape: true,
            printBackground: true,
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        });
        console.log('✅ PDF gerado com sucesso, tamanho:', pdfBuffer.length);
        return new Uint8Array(pdfBuffer);
    } catch (error) {
        console.error('❌ Erro na exportEvidenciasPdf:', error);
        throw error;
    } finally{
        await browser.close();
        console.log('🔒 Browser fechado');
    }
}
async function exportEventosPdf(rel) {
    console.log('🎯 Iniciando exportEventosPdf para:', rel.tipoServico);
    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPuppeteerConfig"])();
    // Usar puppeteer completo se disponível, senão usar puppeteer-core
    const puppeteerToUse = puppeteerDev || __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__esm_import$29$__["default"];
    const browser = await puppeteerToUse.launch(config);
    try {
        const page = await browser.newPage();
        await page.setViewport({
            width: 1123,
            height: 794
        });
        await page.setDefaultTimeout(30000);
        const html = generateEventosHTML(rel);
        console.log('📄 HTML gerado, tamanho:', html.length);
        await page.setContent(html, {
            waitUntil: 'domcontentloaded'
        });
        console.log('📄 Conteúdo carregado');
        try {
            await page.waitForFunction(()=>{
                const images = document.querySelectorAll('img');
                return Array.from(images).every((img)=>img.complete);
            }, {
                timeout: 300000
            });
            console.log('✅ Todas as imagens carregadas');
        } catch (imgError) {
            console.warn('⚠️ Timeout no carregamento de imagens, continuando...');
        }
        await new Promise((resolve)=>setTimeout(resolve, 3000));
        console.log('🔄 Gerando PDF...');
        const pdfBuffer = await page.pdf({
            format: 'A4',
            landscape: true,
            printBackground: true,
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        });
        console.log('✅ PDF gerado com sucesso, tamanho:', pdfBuffer.length);
        return new Uint8Array(pdfBuffer);
    } catch (error) {
        console.error('❌ Erro na exportEventosPdf:', error);
        throw error;
    } finally{
        await browser.close();
        console.log('🔒 Browser fechado');
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
        <div class="service-subregion">${subsOrdenadas.length === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SUB_REGIOES"][subsOrdenadas[0]] : 'EVIDÊNCIAS CONSOLIDADAS'}</div>
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
"[project]/lib/pdf/monumentos-modern.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateMonumentosHTML",
    ()=>generateMonumentosHTML
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/image-loader.ts [app-route] (ecmascript)");
;
;
function generateMonumentosHTML(rel) {
    const images = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$image$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageUrls"])();
    const dataFormatada = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForCover"])(rel.data);
    return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relatório de Monumentos - ${rel.monumento}</title>
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
            padding-right: 120px;
            color: white;
        }
        
        .cover-title {
            font-family: 'Anton', sans-serif;
            font-size: 42px;
            font-weight: 400;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        
        .cover-subtitle {
            font-size: 20px;
            margin-bottom: 30px;
            font-weight: 300;
            opacity: 0.9;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        
        .cover-info {
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            border: 1px solid rgba(255, 255, 255, 0.2);
            max-width: 400px;
            margin-left: auto;
        }
        
        .cover-info h3 {
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: bold;
            text-align: center;
        }
        
        .cover-info p {
            margin: 5px 0;
            font-size: 14px;
            text-align: left;
        }
        
        .cover-date {
            margin-top: 30px;
            font-size: 16px;
            opacity: 0.8;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        
        /* CONTRA CAPA */
        .service-page {
            background: #f8f9fa;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
        }
        
        .service-content {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            max-width: 800px;
            width: 100%;
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
        
        /* GRID DE FOTOS DINÂMICO PARA MONUMENTOS - REFATORADO */
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
            height: 4px;
            background: url('${images.line}') no-repeat;
            background-size: 100% 100%;
        }
        
        .final-bottom-line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: url('${images.line}') no-repeat;
            background-size: 100% 100%;
        }
    </style>
</head>
<body>
    <!-- CAPA -->
    <div class="page cover-page">
        <div class="cover-background"></div>
        <div class="cover-logo"></div>
        <div class="cover-content">
            <h1 class="cover-title">Relatório de Monumentos</h1>
            <h2 class="cover-subtitle">Limpeza e Conservação de Monumentos Públicos</h2>
            
            <div class="cover-info">
                <h3>Informações do Serviço</h3>
                <p><strong>Monumento:</strong> ${rel.monumento}</p>
                <p><strong>Local:</strong> ${rel.local}</p>
                <p><strong>Setor:</strong> ${rel.setorSelecionado}</p>
                <p><strong>Sub-região:</strong> ${getSubRegiaoName(rel.sub)}</p>
            </div>
            
            <div class="cover-date">
                ${dataFormatada}
            </div>
        </div>
    </div>
    
    <!-- CONTRA CAPA -->
    <div class="page service-page">
        <div class="service-content">
            <h1 class="service-title">Detalhes do Serviço</h1>
            
            <div class="service-period">
                <strong>Data:</strong> ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDateForPhotos"])(rel.data)}
            </div>
            
            <div class="service-subregion">
                <strong>Sub-região:</strong> ${getSubRegiaoName(rel.sub)}
            </div>
            
            <div style="font-size: 18px; color: #2c3e50; line-height: 1.6;">
                <p><strong>Assunto:</strong> ${rel.assunto}</p>
                <p><strong>Setor:</strong> ${rel.setorSelecionado}</p>
                <p><strong>Monumento:</strong> ${rel.monumento}</p>
                <p><strong>Local Atendido:</strong> ${rel.local}</p>
                ${rel.descricao ? `<p><strong>Descrição:</strong> ${rel.descricao}</p>` : ''}
            </div>
        </div>
        <div class="service-footer-line"></div>
    </div>
    
    ${rel.fotos.length > 0 ? `
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
            html += `
        <!-- SEÇÃO FOTOGRÁFICA - ${rel.monumento} -->
        <div class="page content-page">
            <div class="largura-fotografico">
                <div class="photo-header-with-logos">
                    <div class="prefeitura-logo"></div>
                    <h2>Relatório Fotográfico</h2>
                    <div class="company-logo"></div>
                </div>
                
                <div class="photo-descriptors">
                    <div class="descriptor-item">
                        <strong>PREFEITURA REGIONAL:</strong> ${getSubRegiaoName(rel.sub)}
                    </div>
                    <div class="descriptor-item">
                        <strong>Serviço(s):</strong> Limpeza e Conservação de Monumentos Públicos
                    </div>
                    <div class="descriptor-item">
                        <strong>Local / Evento:</strong> ${rel.local}
                    </div>
                    <div class="descriptor-item">
                        <strong>Monumento:</strong> ${rel.monumento}
                    </div>
                    <div class="descriptor-item">
                        <strong>Setor:</strong> ${rel.setorSelecionado}
                    </div>
                    <div class="descriptor-item">
                        <strong>Período/ Data:</strong> ${new Date(rel.data).toLocaleDateString('pt-BR')}
                    </div>
                </div>
                
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
function getSubRegiaoName(sub) {
    const subRegioes = {
        'CV': 'Casa Verde / Limão / Cachoeirinha',
        'JT': 'Jaçanã / Tremembé',
        'MG': 'Vila Maria / Vila Guilherme',
        'ST': 'Santana / Tucuruvi',
        'SP': 'São Paulo'
    };
    return subRegioes[sub] || sub;
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
"[project]/app/api/generate-pdf/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * API para Geração de PDFs - Endpoint Unificado
 * 
 * Este arquivo centraliza toda a geração de PDFs da aplicação.
 * Suporta diferentes tipos de relatórios com templates específicos.
 * 
 * Tipos suportados:
 * - mutirao: Relatórios de mutirão (individual ou consolidado)
 * - registro: Registros fotográficos (acumulador, desfazimento, etc.)
 * - evidencias: Evidências fotográficas
 * - unified: Relatórios unificados (revitalização, etc.)
 */ __turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
// Importações dos geradores de PDF específicos
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$mutirao$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/mutirao-modern.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$evidencias$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/evidencias-modern.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$relatorios$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/relatorios-modern.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$monumentos$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/monumentos-modern.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$rotineiros$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pdf/rotineiros-modern.ts [app-route] (ecmascript)");
// Importações para geração de nomes de arquivos
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/filename-generator.ts [app-route] (ecmascript)");
// Configuração centralizada do Puppeteer
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/puppeteer-config.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$mutirao$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$evidencias$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$relatorios$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$rotineiros$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$mutirao$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$evidencias$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$relatorios$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$rotineiros$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { tipo, dados, consolidated } = body;
        console.log('📊 PDF Request:', {
            tipo,
            dados: dados?.tipoServico,
            consolidated
        });
        // Validação básica
        if (!tipo || !dados) {
            console.error('❌ Validação falhou:', {
                tipo,
                dados: !!dados
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Tipo e dados são obrigatórios'
            }, {
                status: 400
            });
        }
        let pdfBuffer;
        let fileName;
        // ========================================
        // ROTEAMENTO POR TIPO DE RELATÓRIO
        // ========================================
        switch(tipo){
            case 'mutirao':
                console.log('🔄 Processando mutirão...');
                // Relatório de mutirão (SELIMP)
                pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$mutirao$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportMutiraoPdf"])(dados);
                fileName = consolidated ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateConsolidatedFileName"])(dados.data) // Data filtrada para consolidado
                 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileName"])(dados);
                break;
            case 'registro':
                console.log('🔄 Processando registro...');
                // Registros fotográficos (Acumulador, Desfazimento, etc.)
                pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$mutirao$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportRegistroPdf"])(dados);
                fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileName"])(dados);
                break;
            case 'evidencias':
                console.log('🔄 Processando evidências...', dados.tipoServico);
                // Evidências fotográficas gerais
                pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$evidencias$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportEvidenciasPdf"])(dados);
                fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileName"])(dados);
                break;
            case 'eventos':
                console.log('🔄 Processando eventos...', dados.tipoServico);
                // Relatórios de eventos com legendas especiais
                pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$evidencias$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportEventosPdf"])(dados);
                fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileName"])(dados);
                break;
            case 'unified':
                console.log('🔄 Processando unificado...');
                // Relatórios unificados (Revitalização, etc.)
                pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$relatorios$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportUnifiedPdf"])(dados);
                fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileName"])(dados);
                break;
            case 'monumentos':
                console.log('🔄 Processando monumentos...');
                // Relatórios de Monumentos
                const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$monumentos$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateMonumentosHTML"])(dados);
                pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$puppeteer$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePDFFromHTML"])(html);
                fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileName"])(dados);
                break;
            case 'rotineiros':
                console.log('🔄 Processando serviços rotineiros...');
                console.log('📊 Dados recebidos:', JSON.stringify(dados, null, 2));
                // Relatórios de Serviços Rotineiros (individual)
                const dataFormatada = new Date(dados.data).toLocaleDateString('pt-BR', {
                    month: 'long',
                    year: 'numeric'
                });
                console.log('📅 Data formatada:', dataFormatada);
                console.log('📋 Array de rotineiros:', [
                    dados
                ]);
                pdfBuffer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pdf$2f$rotineiros$2d$modern$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportEvidenciasRotineirosPdf"])(dataFormatada, [
                    dados
                ]);
                fileName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$filename$2d$generator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateFileName"])(dados);
                console.log('📄 Nome do arquivo:', fileName);
                break;
            default:
                console.error('❌ Tipo inválido:', tipo);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Tipo de relatório inválido'
                }, {
                    status: 400
                });
        }
        // ========================================
        // RESPOSTA COM PDF GERADO
        // ========================================
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](new Uint8Array(pdfBuffer), {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                // Usa UTF-8 encoding para suportar caracteres especiais nos nomes
                'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}.pdf`
            }
        });
    } catch (error) {
        console.error('❌ Erro ao gerar PDF:', error);
        console.error('❌ Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Erro interno do servidor ao gerar PDF',
            details: error instanceof Error ? error.message : String(error)
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__200a0e44._.js.map