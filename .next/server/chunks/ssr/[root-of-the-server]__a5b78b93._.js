module.exports = [
"[project]/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearInvalidReports",
    ()=>clearInvalidReports,
    "clearOldReports",
    ()=>clearOldReports,
    "deleteReport",
    ()=>deleteReport,
    "getReport",
    ()=>getReport,
    "getStorageInfo",
    ()=>getStorageInfo,
    "listReports",
    ()=>listReports,
    "readAll",
    ()=>readAll,
    "upsertReport",
    ()=>upsertReport
]);
"use client";
// Sistema de armazenamento usando IndexedDB apenas
class RelatoriosStorage {
    useBackend = false;
    localStorage = new LocalStorageFallback();
    // Inicializar
    async init() {
        console.log("🔄 Inicializando armazenamento IndexedDB...");
        await this.localStorage.init();
        console.log("✅ Usando IndexedDB para armazenamento");
    }
    // Salvar relatório
    async saveRelatorio(relatorio) {
        console.log("💾 Salvando relatório:", relatorio.title);
        return await this.localStorage.saveRelatorio(relatorio);
    }
    // Buscar relatório por ID
    async getRelatorio(id) {
        return await this.localStorage.getRelatorio(id);
    }
    // Listar todos os relatórios
    async getAllRelatorios() {
        return await this.localStorage.getAllRelatorios();
    }
    // Deletar relatório
    async deleteRelatorio(id) {
        await this.localStorage.deleteRelatorio(id);
    }
    // Listar resumos dos relatórios
    async listRelatorios() {
        console.log("📋 Listando relatórios...");
        return await this.localStorage.listRelatorios();
    }
    // Informações sobre o armazenamento
    async getStorageInfo() {
        return await this.localStorage.getStorageInfo();
    }
    // Limpar relatórios antigos
    async clearOldReports(keepCount = 100) {
        await this.localStorage.clearOldReports(keepCount);
    }
}
// Fallback para armazenamento local (IndexedDB)
class LocalStorageFallback {
    dbName = 'RelatoriosDB';
    version = 1;
    db = null;
    async init() {
        return new Promise((resolve, reject)=>{
            const request = indexedDB.open(this.dbName, this.version);
            request.onerror = ()=>reject(request.error);
            request.onsuccess = ()=>{
                this.db = request.result;
                resolve();
            };
            request.onupgradeneeded = (event)=>{
                const db = event.target.result;
                if (!db.objectStoreNames.contains('relatorios')) {
                    const store = db.createObjectStore('relatorios', {
                        keyPath: 'id'
                    });
                    store.createIndex('tipoServico', 'tipoServico', {
                        unique: false
                    });
                    store.createIndex('createdAt', 'createdAt', {
                        unique: false
                    });
                    store.createIndex('updatedAt', 'updatedAt', {
                        unique: false
                    });
                }
            };
        });
    }
    async ensureDB() {
        if (!this.db) {
            await this.init();
        }
        return this.db;
    }
    async saveRelatorio(relatorio) {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                'relatorios'
            ], 'readwrite');
            const store = transaction.objectStore('relatorios');
            const request = store.put({
                ...relatorio,
                updatedAt: Date.now()
            });
            request.onsuccess = ()=>resolve(relatorio);
            request.onerror = ()=>reject(request.error);
        });
    }
    async getRelatorio(id) {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                'relatorios'
            ], 'readonly');
            const store = transaction.objectStore('relatorios');
            const request = store.get(id);
            request.onsuccess = ()=>resolve(request.result || null);
            request.onerror = ()=>reject(request.error);
        });
    }
    async getAllRelatorios() {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                'relatorios'
            ], 'readonly');
            const store = transaction.objectStore('relatorios');
            const request = store.getAll();
            request.onsuccess = ()=>resolve(request.result || []);
            request.onerror = ()=>reject(request.error);
        });
    }
    async deleteRelatorio(id) {
        const db = await this.ensureDB();
        return new Promise((resolve, reject)=>{
            const transaction = db.transaction([
                'relatorios'
            ], 'readwrite');
            const store = transaction.objectStore('relatorios');
            const request = store.delete(id);
            request.onsuccess = ()=>resolve();
            request.onerror = ()=>reject(request.error);
        });
    }
    async listRelatorios() {
        const reports = await this.getAllRelatorios();
        return reports.map((r)=>{
            let data = '';
            if (r.tipoServico === "MUTIRAO") {
                data = r.data || '';
            } else if (r.tipoServico === "ACUMULADOR" || r.tipoServico === "ALAGAMENTOS" || r.tipoServico === "ZELADORIA") {
                data = r.dataInicio || '';
            } else if (r.tipoServico === "REVITALIZACAO") {
                data = r.data || '';
            } else if (r.tipoServico === "ROTINEIROS") {
                data = r.data || '';
            } else {
                data = r.dataInicio || r.data || '';
            }
            let fotoCount = 0;
            if (r.tipoServico === "MUTIRAO") {
                const mutirao = r;
                fotoCount = mutirao.secoes?.reduce((total, secao)=>{
                    return total + secao.servicos?.reduce((servicoTotal, servico)=>{
                        return servicoTotal + (servico.fotos?.length || 0);
                    }, 0) + (secao.equipeFotoUrl ? 1 : 0) + (secao.mapaFotoUrl ? 1 : 0);
                }, 0) || 0;
            } else if (r.tipoServico === "ACUMULADOR" || r.tipoServico === "ALAGAMENTOS" || r.tipoServico === "ZELADORIA") {
                fotoCount = r.fotos?.length || 0;
            } else if (r.tipoServico === "REVITALIZACAO") {
                fotoCount = r.fotos?.length || 0;
            } else if (r.tipoServico === "ROTINEIROS") {
                const rotineiros = r;
                fotoCount = rotineiros.servicos?.reduce((total, servico)=>{
                    return total + (servico.fotos?.length || 0);
                }, 0) || 0;
            }
            const tipoServicoMap = {
                'MUTIRAO': 'Mutirão',
                'ACUMULADOR': 'Acumulador',
                'ALAGAMENTOS': 'Alagamentos',
                'REVITALIZACAO': 'Revitalização',
                'ZELADORIA': 'Zeladoria',
                'DDS': 'DDS',
                'HIGIENIZACAO': 'Higienização, manutenção, instalação, remoção e reposição de Papeleiras',
                'VARRICAO_MECANIZADA': 'Varrição Mecanizada',
                'FEIRAS': 'Feiras',
                'EVENTOS': 'Eventos',
                'ROTINEIROS': 'Serviços Rotineiros',
                'REGISTROS_FOTOGRAFICOS': 'Registros Fotográficos'
            };
            const base = {
                id: r.id,
                title: tipoServicoMap[r.tipoServico] || r.tipoServico,
                data: data,
                createdAt: r.createdAt,
                updatedAt: r.updatedAt,
                fotoCount: fotoCount
            };
            if (r.tipoServico === "MUTIRAO") {
                return {
                    ...base,
                    tipoServico: r.tipoServico,
                    sub: r.secoes?.[0]?.sub,
                    endereco: r.secoes?.[0]?.local || ""
                };
            } else if (r.tipoServico === "ACUMULADOR" || r.tipoServico === "ALAGAMENTOS" || r.tipoServico === "ZELADORIA") {
                return {
                    ...base,
                    tipoServico: r.tipoServico,
                    sub: r.sub,
                    endereco: r.local || ""
                };
            } else if (r.tipoServico === "REVITALIZACAO") {
                return {
                    ...base,
                    tipoServico: r.tipoServico,
                    sub: r.sub,
                    endereco: r.local || ""
                };
            } else if (r.tipoServico === "ROTINEIROS") {
                return {
                    ...base,
                    tipoServico: r.tipoServico,
                    sub: r.sub,
                    endereco: ""
                };
            }
            return {
                ...base,
                tipoServico: r.tipoServico,
                endereco: ""
            };
        });
    }
    async getStorageInfo() {
        const db = await this.ensureDB();
        return new Promise((resolve)=>{
            const transaction = db.transaction([
                'relatorios'
            ], 'readonly');
            const store = transaction.objectStore('relatorios');
            const request = store.count();
            request.onsuccess = ()=>{
                navigator.storage.estimate().then((estimate)=>{
                    resolve({
                        documentCount: request.result,
                        maxCapacity: 2 * 1024 * 1024 * 1024,
                        availableCapacity: estimate.quota || 0,
                        usedCapacity: estimate.usage || 0,
                        percentage: Math.round((estimate.usage || 0) / (2 * 1024 * 1024 * 1024) * 100),
                        storageType: "Local (IndexedDB)"
                    });
                });
            };
        });
    }
    async clearOldReports(keepCount = 100) {
        const reports = await this.getAllRelatorios();
        if (reports.length <= keepCount) return;
        const sortedReports = reports.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        const reportsToDelete = sortedReports.slice(keepCount);
        for (const report of reportsToDelete){
            await this.deleteRelatorio(report.id);
        }
        console.log(`🗑️ Removidos ${reportsToDelete.length} relatórios antigos`);
    }
}
// Instância singleton
const storage = new RelatoriosStorage();
// Inicializar automaticamente
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const upsertReport = async (item)=>{
    return await storage.saveRelatorio(item);
};
const deleteReport = async (id)=>{
    return await storage.deleteRelatorio(id);
};
const getReport = async (id)=>{
    return await storage.getRelatorio(id);
};
const readAll = async ()=>{
    return await storage.getAllRelatorios();
};
const listReports = async ()=>{
    return await storage.listRelatorios();
};
const getStorageInfo = async ()=>{
    return await storage.getStorageInfo();
};
const clearOldReports = async ()=>{
    return await storage.clearOldReports();
};
const clearInvalidReports = async ()=>{
    // No backend, não precisamos limpar manualmente
    console.log("Backend gerencia automaticamente os dados");
};
}),
"[project]/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/components/CustomDatePicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomDatePicker",
    ()=>CustomDatePicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CustomDatePicker({ selectedDate, onChange: onDateChange, placeholder = "Selecione uma data", className = "" }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-e84ae2c801487fae" + " " + `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                selected: selectedDate,
                onChange: (date)=>{
                    onDateChange(date);
                    setIsOpen(false);
                },
                onCalendarOpen: ()=>setIsOpen(true),
                onCalendarClose: ()=>setIsOpen(false),
                open: isOpen,
                placeholderText: placeholder,
                dateFormat: "dd/MM/yyyy",
                showPopperArrow: false,
                popperClassName: "custom-datepicker-popper",
                className: "w-full px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold transition-all duration-200 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-700 focus:shadow-md cursor-pointer",
                calendarClassName: "custom-datepicker-calendar",
                dayClassName: (date)=>{
                    const today = new Date();
                    const isToday = date.toDateString() === today.toDateString();
                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                    let className = "hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-lg transition-colors duration-200";
                    if (isToday) {
                        className += " bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-semibold";
                    }
                    if (isSelected) {
                        className += " bg-indigo-500 text-white font-bold";
                    }
                    return className;
                },
                renderCustomHeader: ({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e84ae2c801487fae" + " " + "flex items-center justify-between p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: decreaseMonth,
                                disabled: prevMonthButtonDisabled,
                                className: "jsx-e84ae2c801487fae" + " " + "p-2 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-e84ae2c801487fae" + " " + "w-4 h-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7",
                                        className: "jsx-e84ae2c801487fae"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomDatePicker.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/components/CustomDatePicker.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CustomDatePicker.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e84ae2c801487fae" + " " + "text-lg font-bold",
                                children: date.toLocaleDateString('pt-BR', {
                                    month: 'long',
                                    year: 'numeric'
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/CustomDatePicker.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: increaseMonth,
                                disabled: nextMonthButtonDisabled,
                                className: "jsx-e84ae2c801487fae" + " " + "p-2 rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-e84ae2c801487fae" + " " + "w-4 h-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7",
                                        className: "jsx-e84ae2c801487fae"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CustomDatePicker.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/components/CustomDatePicker.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/components/CustomDatePicker.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CustomDatePicker.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/components/CustomDatePicker.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e84ae2c801487fae",
                children: ".custom-datepicker-popper{z-index:9999!important}.custom-datepicker-calendar{border:none!important;border-radius:.75rem!important;overflow:hidden!important;box-shadow:0 10px 25px #00000026!important}.react-datepicker{border:none!important;font-family:inherit!important}.react-datepicker__header{background:0 0!important;border:none!important;padding:0!important}.react-datepicker__month-container{background:#fff!important}.dark .react-datepicker__month-container{background:#1f2937!important}.react-datepicker__day-names{background:#f8fafc!important;padding:.5rem 0!important}.dark .react-datepicker__day-names{background:#374151!important}.react-datepicker__day-name{color:#6b7280!important;font-size:.875rem!important;font-weight:600!important}.dark .react-datepicker__day-name{color:#9ca3af!important}.react-datepicker__day{color:#374151!important;border-radius:.5rem!important;width:2rem!important;height:2rem!important;margin:.125rem!important;font-weight:500!important;line-height:2rem!important;transition:all .2s!important}.dark .react-datepicker__day{color:#d1d5db!important}.react-datepicker__day:hover{color:#3730a3!important;background-color:#e0e7ff!important}.dark .react-datepicker__day:hover{color:#fff!important;background-color:#4338ca!important}.react-datepicker__day--selected{color:#fff!important;background-color:#6366f1!important;font-weight:700!important}.react-datepicker__day--today{color:#1e40af!important;background-color:#dbeafe!important;font-weight:600!important}.dark .react-datepicker__day--today{color:#dbeafe!important;background-color:#1e3a8a!important}.react-datepicker__day--outside-month{color:#9ca3af!important}.dark .react-datepicker__day--outside-month{color:#6b7280!important}.react-datepicker__day--disabled{color:#d1d5db!important;cursor:not-allowed!important}.dark .react-datepicker__day--disabled{color:#4b5563!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CustomDatePicker.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/RoleGuard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoleGuard",
    ()=>RoleGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function RoleGuard({ children, requiredRole = 'user', fallbackPath = '/relatorios' }) {
    // Autenticação desabilitada - sempre renderizar children
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/app/relatorios/novo-ecopontos-lote/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NovoEcopontosLotePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomDatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomDatePicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoleGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/RoleGuard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function NovoEcopontosLotePage() {
    const [assunto, setAssunto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Serviços Rotineiros - Ecopontos");
    const [dataInicio, setDataInicio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dataFim, setDataFim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sub, setSub] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("CV");
    const [tipoPeriodo, setTipoPeriodo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("semana");
    const [diasEcopontos, setDiasEcopontos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Gerar lista de dias baseado no período selecionado
    const gerarDiasPeriodo = ()=>{
        if (!dataInicio || !dataFim) return [];
        const dias = [];
        // Corrigir problema de fuso horário - usar apenas a parte da data
        const dataAtual = new Date(dataInicio.getFullYear(), dataInicio.getMonth(), dataInicio.getDate());
        const dataFinal = new Date(dataFim.getFullYear(), dataFim.getMonth(), dataFim.getDate());
        while(dataAtual <= dataFinal){
            // Formatar data no formato YYYY-MM-DD sem problemas de fuso
            const ano = dataAtual.getFullYear();
            const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
            const dia = String(dataAtual.getDate()).padStart(2, '0');
            const dataISO = `${ano}-${mes}-${dia}`;
            dias.push({
                data: dataISO,
                ecopontos: [],
                fotos: {}
            });
            dataAtual.setDate(dataAtual.getDate() + 1);
        }
        return dias;
    };
    // Atualizar lista de dias quando período muda
    const handlePeriodoChange = ()=>{
        if (dataInicio && dataFim) {
            const novosDias = gerarDiasPeriodo();
            setDiasEcopontos(novosDias);
        }
    };
    // Selecionar/deselecionar ecoponto para um dia específico
    const toggleEcopontoDia = (diaIndex, ecoponto)=>{
        setDiasEcopontos((prev)=>{
            const novosDias = [
                ...prev
            ];
            const diaAtual = novosDias[diaIndex];
            // Criar uma cópia do dia atual para evitar mutação
            const novoDia = {
                ...diaAtual,
                ecopontos: [
                    ...diaAtual.ecopontos
                ]
            };
            if (novoDia.ecopontos.includes(ecoponto)) {
                // Remover ecoponto e suas fotos
                const { [ecoponto]: fotosRemovidas, ...outrasFotos } = novoDia.fotos;
                novoDia.ecopontos = novoDia.ecopontos.filter((e)=>e !== ecoponto);
                novoDia.fotos = outrasFotos;
            } else {
                // Adicionar ecoponto
                novoDia.ecopontos.push(ecoponto);
            }
            novosDias[diaIndex] = novoDia;
            return novosDias;
        });
    };
    function compressImage(file, maxWidth = 800, quality = 0.7) {
        return new Promise((resolve)=>{
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.onload = ()=>{
                let { width, height } = img;
                if (width > maxWidth) {
                    height = height * maxWidth / width;
                    width = maxWidth;
                }
                canvas.width = width;
                canvas.height = height;
                ctx?.drawImage(img, 0, 0, width, height);
                const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve(compressedDataUrl);
            };
            img.src = URL.createObjectURL(file);
        });
    }
    function handleFileUpload(file, callback) {
        compressImage(file, 800, 0.8).then(callback);
    }
    // Adicionar fotos para um ecoponto específico de um dia
    const addFotoEcopontoDia = (diaIndex, ecoponto)=>{
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.multiple = true;
        input.onchange = (e)=>{
            const files = e.target.files;
            if (files && files.length > 0) {
                const fileArray = Array.from(files);
                const dia = diasEcopontos[diaIndex];
                const currentFotos = dia.fotos[ecoponto] || [];
                // Verificar limite de fotos (máximo 10 por ecoponto)
                if (currentFotos.length + fileArray.length > 10) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Máximo de 10 fotos por ecoponto. Você já tem ${currentFotos.length} foto(s) para este ecoponto.`);
                    return;
                }
                fileArray.forEach((file, index)=>{
                    handleFileUpload(file, (url)=>{
                        setDiasEcopontos((prev)=>{
                            const novosDias = [
                                ...prev
                            ];
                            const novoDia = {
                                ...novosDias[diaIndex]
                            };
                            novoDia.fotos = {
                                ...novoDia.fotos,
                                [ecoponto]: [
                                    ...novoDia.fotos[ecoponto] || [],
                                    url
                                ]
                            };
                            novosDias[diaIndex] = novoDia;
                            return novosDias;
                        });
                    });
                });
            }
        };
        input.click();
    };
    // Remover foto de um ecoponto específico de um dia
    const removeFotoEcopontoDia = (diaIndex, ecoponto, fotoIndex)=>{
        setDiasEcopontos((prev)=>{
            const novosDias = [
                ...prev
            ];
            const novoDia = {
                ...novosDias[diaIndex]
            };
            novoDia.fotos = {
                ...novoDia.fotos,
                [ecoponto]: novoDia.fotos[ecoponto]?.filter((_, i)=>i !== fotoIndex) || []
            };
            novosDias[diaIndex] = novoDia;
            return novosDias;
        });
    };
    // Formatar data para exibição
    const formatarData = (dataISO)=>{
        // Criar data sem problemas de fuso horário
        const [ano, mes, dia] = dataISO.split('-').map(Number);
        const data = new Date(ano, mes - 1, dia);
        return data.toLocaleDateString('pt-BR', {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        });
    };
    // Salvar todos os registros
    const salvarTodos = async ()=>{
        // Validações
        if (!dataInicio || !dataFim) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Por favor, selecione o período (data início e fim).");
            return;
        }
        if (diasEcopontos.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Nenhum dia foi gerado para o período selecionado.");
            return;
        }
        // Verificar se pelo menos um dia tem ecopontos
        const diasComEcopontos = diasEcopontos.filter((dia)=>dia.ecopontos.length > 0);
        if (diasComEcopontos.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Por favor, selecione pelo menos um ecoponto para pelo menos um dia.");
            return;
        }
        setSaving(true);
        let sucessos = 0;
        let erros = 0;
        try {
            // Processar cada dia que tem ecopontos
            for (const dia of diasComEcopontos){
                const now = Date.now();
                const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                // Criar serviços com fotos para este dia
                const servicos = dia.ecopontos.map((ecoponto)=>({
                        assunto: ecoponto,
                        fotos: (dia.fotos[ecoponto] || []).map((url)=>({
                                url,
                                descricao: ecoponto
                            })),
                        observacao: ""
                    }));
                const rel = {
                    id,
                    tipoServico: "ROTINEIROS",
                    assunto,
                    data: dia.data,
                    sub,
                    servicos,
                    createdAt: now,
                    updatedAt: now
                };
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upsertReport"])(rel);
                    sucessos++;
                } catch (error) {
                    console.error(`Erro ao salvar relatório do dia ${dia.data}:`, error);
                    erros++;
                }
            }
            // Tentar limpar relatórios antigos se houve erros
            if (erros > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning("Alguns registros falharam. Tentando limpar relatórios antigos...");
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearOldReports"])();
                // Tentar novamente os que falharam
                for (const dia of diasComEcopontos){
                    if (erros > 0) {
                        const now = Date.now();
                        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
                        const servicos = dia.ecopontos.map((ecoponto)=>({
                                assunto: ecoponto,
                                fotos: (dia.fotos[ecoponto] || []).map((url)=>({
                                        url,
                                        descricao: ecoponto
                                    })),
                                observacao: ""
                            }));
                        const rel = {
                            id,
                            tipoServico: "ROTINEIROS",
                            assunto,
                            data: dia.data,
                            sub,
                            servicos,
                            createdAt: now,
                            updatedAt: now
                        };
                        try {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upsertReport"])(rel);
                            sucessos++;
                            erros--;
                        } catch (retryError) {
                            console.error(`Erro persistente no dia ${dia.data}:`, retryError);
                        }
                    }
                }
            }
            if (sucessos > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`${sucessos} relatório(s) salvo(s) com sucesso!`);
                if (erros > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`${erros} relatório(s) falharam. Verifique o console para detalhes.`);
                }
                setTimeout(()=>{
                    window.location.href = `/relatorios`;
                }, 2000);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Nenhum relatório foi salvo. Tente novamente com menos fotos.");
            }
        } catch (error) {
            console.error("Erro geral ao salvar relatórios:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Erro ao salvar relatórios. Tente novamente.");
        } finally{
            setSaving(false);
        }
    };
    const ecopontosDisponiveis = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ECOPONTOS_POR_SUBREGIAO"][sub] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$RoleGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoleGuard"], {
        requiredRole: "admin",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 bg-white/20 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold",
                                        children: "🏭 Registro em Lote - Ecopontos"
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-green-100",
                                        children: "Registre múltiplos dias de serviços em ecopontos de uma vez"
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold mb-4 flex items-center gap-2",
                            children: "📅 Configuração do Período"
                        }, void 0, false, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-black dark:text-zinc-400 font-bold",
                                            children: "Assunto"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: assunto,
                                            disabled: true,
                                            className: "bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-300 px-3 py-2 rounded border border-zinc-300 dark:border-zinc-600 cursor-not-allowed font-semibold"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-black dark:text-zinc-400 font-bold",
                                            children: "Subprefeitura"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: sub,
                                            onChange: (e)=>setSub(e.target.value),
                                            className: "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 font-semibold transition-all duration-200 focus:border-zinc-500 dark:focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 focus:shadow-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CV",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUB_REGIOES"].CV
                                                }, void 0, false, {
                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "JT",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUB_REGIOES"].JT
                                                }, void 0, false, {
                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "MG",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUB_REGIOES"].MG
                                                }, void 0, false, {
                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ST",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUB_REGIOES"].ST
                                                }, void 0, false, {
                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-black dark:text-zinc-400 font-bold",
                                            children: "Data Início"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 347,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomDatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomDatePicker"], {
                                            selectedDate: dataInicio,
                                            onChange: setDataInicio,
                                            placeholder: "Selecione a data início"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-black dark:text-zinc-400 font-bold",
                                            children: "Data Fim"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomDatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomDatePicker"], {
                                            selectedDate: dataFim,
                                            onChange: setDataFim,
                                            placeholder: "Selecione a data fim"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePeriodoChange,
                                    disabled: !dataInicio || !dataFim,
                                    className: "bg-green-600 hover:bg-green-500 disabled:bg-zinc-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded flex items-center gap-2",
                                    children: "🔄 Gerar Dias do Período"
                                }, void 0, false, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this),
                                diasEcopontos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "📊 ",
                                                diasEcopontos.length,
                                                " dias gerados"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                diasEcopontos.filter((d)=>d.ecopontos.length > 0).length,
                                                " com ecopontos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this),
                diasEcopontos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold flex items-center gap-2",
                            children: "🏭 Ecopontos por Dia"
                        }, void 0, false, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 387,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: diasEcopontos.map((dia, diaIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-zinc-800 rounded-lg p-6 border border-zinc-200 dark:border-zinc-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-zinc-900 dark:text-zinc-100",
                                                    children: [
                                                        "📅 ",
                                                        formatarData(dia.data)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-zinc-600 dark:text-zinc-400",
                                                    children: [
                                                        dia.ecopontos.length,
                                                        " ecoponto(s) selecionado(s)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 394,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                            children: ecopontosDisponiveis.map((ecoponto)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    id: `ecoponto-${diaIndex}-${ecoponto}`,
                                                                    checked: dia.ecopontos.includes(ecoponto),
                                                                    onChange: ()=>toggleEcopontoDia(diaIndex, ecoponto),
                                                                    className: "w-4 h-4 text-green-600 bg-zinc-100 border-zinc-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-zinc-800 focus:ring-2 dark:bg-zinc-700 dark:border-zinc-600"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: `ecoponto-${diaIndex}-${ecoponto}`,
                                                                    className: "text-sm font-medium text-zinc-900 dark:text-zinc-300 cursor-pointer",
                                                                    children: ecoponto
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 25
                                                        }, this),
                                                        dia.ecopontos.includes(ecoponto) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-zinc-600 dark:text-zinc-400",
                                                                            children: [
                                                                                "Fotos: ",
                                                                                dia.fotos[ecoponto]?.length || 0,
                                                                                "/10"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                            lineNumber: 425,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>addFotoEcopontoDia(diaIndex, ecoponto),
                                                                            className: "text-xs bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded",
                                                                            children: "📸 Adicionar Fotos"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                            lineNumber: 428,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 29
                                                                }, this),
                                                                dia.fotos[ecoponto] && dia.fotos[ecoponto].length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: dia.fotos[ecoponto].map((foto, fotoIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: foto,
                                                                                    alt: `${ecoponto} - Foto ${fotoIndex + 1}`,
                                                                                    className: "w-full h-20 object-cover rounded border border-zinc-300 dark:border-zinc-600"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                                    lineNumber: 440,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>removeFotoEcopontoDia(diaIndex, ecoponto, fotoIndex),
                                                                                    className: "absolute -top-1 -right-1 bg-red-600 hover:bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs",
                                                                                    children: "×"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                                    lineNumber: 445,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, fotoIndex, true, {
                                                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                            lineNumber: 439,
                                                                            columnNumber: 35
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                            lineNumber: 423,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, ecoponto, true, {
                                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, dia.data, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 393,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                    lineNumber: 386,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-4 flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: salvarTodos,
                            disabled: saving || diasEcopontos.filter((d)=>d.ecopontos.length > 0).length === 0,
                            className: "bg-green-600 hover:bg-green-500 disabled:bg-zinc-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded flex items-center gap-2 font-semibold",
                            children: saving ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "animate-spin h-4 w-4",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                className: "opacity-25",
                                                cx: "12",
                                                cy: "12",
                                                r: "10",
                                                stroke: "currentColor",
                                                strokeWidth: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                lineNumber: 476,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 17
                                    }, this),
                                    "Salvando..."
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M5 13l4 4L19 7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                        lineNumber: 483,
                                        columnNumber: 17
                                    }, this),
                                    "💾 Salvar Todos os Registros"
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.history.back(),
                            className: "bg-zinc-600 hover:bg-zinc-500 text-white px-6 py-3 rounded font-semibold",
                            children: "Voltar"
                        }, void 0, false, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                    lineNumber: 467,
                    columnNumber: 9
                }, this),
                diasEcopontos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-green-800 dark:text-green-200 mb-2",
                            children: "📊 Resumo do Registro em Lote - Ecopontos"
                        }, void 0, false, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 501,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-green-700 dark:text-green-300 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Período:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        dataInicio?.toLocaleDateString('pt-BR'),
                                        " a ",
                                        dataFim?.toLocaleDateString('pt-BR')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Subprefeitura:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 506,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sub]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Total de dias:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 507,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        diasEcopontos.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Dias com ecopontos:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 508,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        diasEcopontos.filter((d)=>d.ecopontos.length > 0).length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Total de ecopontos:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 509,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        diasEcopontos.reduce((acc, dia)=>acc + dia.ecopontos.length, 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Total de fotos:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                            lineNumber: 510,
                                            columnNumber: 20
                                        }, this),
                                        " ",
                                        diasEcopontos.reduce((acc, dia)=>acc + Object.values(dia.fotos).reduce((fotos, arr)=>fotos + arr.length, 0), 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                            lineNumber: 504,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
                    lineNumber: 500,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
            lineNumber: 300,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/relatorios/novo-ecopontos-lote/page.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a5b78b93._.js.map