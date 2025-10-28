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
"[project]/app/relatorios/evidencias/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EvidenciasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomDatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CustomDatePicker.tsx [app-ssr] (ecmascript)");
// Função para exportar PDF via API unificada
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function EvidenciasPage() {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tipoServico, setTipoServico] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("MUTIRAO");
    const [dataFiltro, setDataFiltro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [dataFiltroDate, setDataFiltroDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mutiroesCompletos, setMutiroesCompletos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadReports = async ()=>{
            try {
                const reports = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listReports"])();
                setItems(reports);
                // Carregar dados completos dos mutirões
                const mutiroesIds = reports.filter((r)=>r.tipoServico === 'MUTIRAO').map((r)=>r.id);
                const mutiroesCompletos = [];
                for (const id of mutiroesIds){
                    try {
                        const mutiraoCompleto = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReport"])(id);
                        if (mutiraoCompleto) {
                            mutiroesCompletos.push(mutiraoCompleto);
                        }
                    } catch (error) {
                        console.error(`Erro ao carregar mutirão ${id}:`, error);
                    }
                }
                setMutiroesCompletos(mutiroesCompletos);
            } catch (error) {
                console.error('Erro ao carregar relatórios:', error);
                setItems([]);
            }
        };
        loadReports();
    }, []);
    // Sincronizar DatePicker com filtro de data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (dataFiltroDate) {
            const year = dataFiltroDate.getFullYear();
            const month = String(dataFiltroDate.getMonth() + 1).padStart(2, '0');
            const day = String(dataFiltroDate.getDate()).padStart(2, '0');
            setDataFiltro(`${year}-${month}-${day}`);
        } else {
            setDataFiltro("");
        }
    }, [
        dataFiltroDate
    ]);
    const filtered = items.filter((r)=>{
        const matchesTipoServico = tipoServico ? r.tipoServico === tipoServico : true;
        const matchesData = dataFiltro ? r.data === dataFiltro : true;
        return matchesTipoServico && matchesData;
    });
    async function handleExportEvidencias() {
        if (filtered.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning("Nenhum relatório encontrado para gerar evidências.", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                style: {
                    background: "#1f2937",
                    border: "1px solid #374151",
                    color: "#f9fafb"
                }
            });
            return;
        }
        if (!dataFiltro) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("📅 Por favor, selecione uma data para gerar as evidências.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                style: {
                    background: "#1e40af",
                    border: "1px solid #3b82f6",
                    color: "#f9fafb"
                }
            });
            return;
        }
        // Filtrar mutirões completos pela data selecionada e ordenar alfabeticamente por sub-região
        const mutiroesFiltrados = mutiroesCompletos.filter((mutirao)=>mutirao.data === dataFiltro).sort((a, b)=>{
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
        if (mutiroesFiltrados.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning("🔍 Nenhum mutirão encontrado para a data selecionada.", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                style: {
                    background: "#dc2626",
                    border: "1px solid #ef4444",
                    color: "#f9fafb"
                }
            });
            return;
        }
        setExporting(true);
        try {
            const response = await fetch('/api/export-evidencias-mutiroes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: dataFiltro,
                    mutiroes: mutiroesFiltrados
                })
            });
            if (!response.ok) {
                throw new Error(`Erro ao gerar PDF: ${response.statusText}`);
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            // O nome do arquivo já é definido pelo servidor no header Content-Disposition
            // Vamos extrair o nome do header se disponível, senão usar um padrão
            const contentDisposition = response.headers.get('Content-Disposition');
            let fileName = `evidencias-mutiroes-${dataFiltro}.pdf`;
            if (contentDisposition) {
                // Tenta primeiro o formato UTF-8 codificado
                let fileNameMatch = contentDisposition.match(/filename\*=UTF-8''([^;]+)/);
                if (fileNameMatch) {
                    fileName = decodeURIComponent(fileNameMatch[1]);
                } else {
                    // Fallback para o formato tradicional
                    fileNameMatch = contentDisposition.match(/filename="([^"]+)"/);
                    if (fileNameMatch) {
                        fileName = fileNameMatch[1];
                    }
                }
            }
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("PDF de evidências gerado com sucesso!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
                style: {
                    background: "#059669",
                    border: "1px solid #10b981",
                    color: "#f9fafb"
                }
            });
        } catch (error) {
            console.error("Erro ao exportar evidências:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Erro ao gerar PDF de evidências. Tente novamente.");
        } finally{
            setExporting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-semibold flex-1",
                        children: "Relatórios de Evidências"
                    }, void 0, false, {
                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/relatorios",
                        className: "text-zinc-300 hover:underline",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-3",
                        children: "Filtros para Evidências"
                    }, void 0, false, {
                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3 items-end mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-black dark:text-zinc-400 font-bold",
                                        children: "Tipo de Serviço"
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: tipoServico,
                                        onChange: (e)=>setTipoServico(e.target.value),
                                        className: "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 font-semibold transition-all duration-200 focus:border-zinc-500 dark:focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:focus:ring-zinc-700 focus:shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "MUTIRAO",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIPOS_SERVICO"].MUTIRAO
                                        }, void 0, false, {
                                            fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs text-black dark:text-zinc-400 font-bold",
                                        children: "Data"
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CustomDatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomDatePicker"], {
                                        selectedDate: dataFiltroDate,
                                        onChange: setDataFiltroDate,
                                        placeholder: "Selecione uma data",
                                        className: "w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExportEvidencias,
                                disabled: exporting || filtered.length === 0,
                                className: `px-4 py-2 rounded text-white flex items-center gap-2 ${exporting || filtered.length === 0 ? 'bg-purple-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-500'}`,
                                children: [
                                    exporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                className: "opacity-75",
                                                fill: "currentColor",
                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            }, void 0, false, {
                                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    exporting ? 'Gerando PDF...' : 'Gerar PDF de Evidências'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    filtered.length > 0 && dataFiltro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-zinc-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: filtered.length
                            }, void 0, false, {
                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this),
                            " relatório(s) encontrado(s) para a data ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: (()=>{
                                    // Converte "2025-09-23" para "23 de Setembro de 2025"
                                    const meses = [
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
                                    if (dataFiltro && dataFiltro.includes('-')) {
                                        const [ano, mes, dia] = dataFiltro.split('-');
                                        const mesNome = meses[parseInt(mes, 10) - 1];
                                        return `${parseInt(dia, 10)} de ${mesNome} de ${ano}`;
                                    }
                                    return dataFiltro;
                                })()
                            }, void 0, false, {
                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                lineNumber: 264,
                                columnNumber: 87
                            }, this),
                            mutiroesCompletos.filter((m)=>m.data === dataFiltro).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 p-2 rounded bg-zinc-200 dark:bg-zinc-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-zinc-900 dark:text-zinc-100",
                                        children: "Mutirões para esta data:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 space-y-1",
                                        children: Object.entries(mutiroesCompletos.filter((m)=>m.data === dataFiltro).reduce((acc, mutirao)=>{
                                            const subRegional = mutirao.secoes[0]?.sub || 'SP';
                                            if (!acc[subRegional]) acc[subRegional] = 0;
                                            acc[subRegional]++;
                                            return acc;
                                        }, {})).map(([sub, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-100 dark:text-zinc-100",
                                                children: [
                                                    "• ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUB_REGIOES"][sub],
                                                    ": ",
                                                    count,
                                                    " mutirão(ões)"
                                                ]
                                            }, sub, true, {
                                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold mb-3",
                        children: "Relatórios Encontrados"
                    }, void 0, false, {
                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-400",
                        children: "Nenhum relatório encontrado com os filtros aplicados."
                    }, void 0, false, {
                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: filtered.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-3 bg-zinc-200 dark:bg-zinc-800 rounded border border-zinc-400/15 shadow-md dark:border-zinc-700 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-medium",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-zinc-900 dark:text-zinc-400",
                                                children: [
                                                    item.sub ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUB_REGIOES"][item.sub] : "-",
                                                    " • ",
                                                    (()=>{
                                                        const parts = item.data?.split('-');
                                                        return parts && parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : item.data;
                                                    })()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/relatorios/${item.id}`,
                                        className: "px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-sm",
                                        children: "Ver"
                                    }, void 0, false, {
                                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                                lineNumber: 312,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/relatorios/evidencias/page.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/relatorios/evidencias/page.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/relatorios/evidencias/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_ecc23eb6._.js.map