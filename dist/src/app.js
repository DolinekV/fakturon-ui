"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const api_1 = require("@/api/api");
const customers_page_1 = require("@/pages/customers/customers-page");
const invoices_page_1 = require("@/pages/invoices/invoices-page");
const react_query_1 = require("@tanstack/react-query");
const client_1 = require("react-dom/client");
const react_router_1 = require("react-router");
const AppSidebar_1 = require("@/AppSidebar");
const sidebar_1 = require("@/atoms/sidebar");
const separator_1 = require("@/atoms/separator");
const app_breadcrumb_1 = require("@/atoms/app-breadcrumb");
const section_cards_1 = require("@/pages/home/section-cards");
const root = (0, client_1.createRoot)(document.body);
const App = () => {
    const { pathname } = (0, react_router_1.useLocation)();
    return ((0, jsx_runtime_1.jsxs)(sidebar_1.SidebarProvider, { children: [(0, jsx_runtime_1.jsx)(AppSidebar_1.AppSidebar, {}, void 0), (0, jsx_runtime_1.jsxs)("main", { className: "flex flex-col w-full", children: [(0, jsx_runtime_1.jsx)("header", { className: "flex h-16 shrink-0 items-center gap-2 border-b", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 px-3", children: [(0, jsx_runtime_1.jsx)(sidebar_1.SidebarTrigger, {}, void 0), (0, jsx_runtime_1.jsx)(separator_1.Separator, { orientation: "vertical", className: "mr-2 h-4" }, void 0), (0, jsx_runtime_1.jsx)(app_breadcrumb_1.AppBreadcrumb, {}, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-1 flex-col gap-4 p-4", children: pathname === "/" ? ((0, jsx_runtime_1.jsx)("div", { className: "flex flex-1 flex-col", children: (0, jsx_runtime_1.jsx)("div", { className: "@container/main flex flex-1 flex-col gap-2", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-4 py-4 md:gap-6 md:py-6", children: (0, jsx_runtime_1.jsx)(section_cards_1.SectionCards, {}, void 0) }, void 0) }, void 0) }, void 0)) : ((0, jsx_runtime_1.jsx)(react_router_1.Outlet, {}, void 0)) }, void 0)] }, void 0)] }, void 0));
};
const router = (0, react_router_1.createBrowserRouter)([
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(App, {}, void 0),
        handle: {
            crumb: "Home",
        },
        children: [
            {
                path: "invoices",
                element: (0, jsx_runtime_1.jsx)(invoices_page_1.InvoicesPage, {}, void 0),
                handle: {
                    crumb: "Invoices",
                },
            },
            {
                path: "/customers",
                element: (0, jsx_runtime_1.jsx)(customers_page_1.CustomersPage, {}, void 0),
                handle: {
                    crumb: "Customers",
                },
            },
        ],
    },
]);
root.render((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, { client: api_1.client, children: (0, jsx_runtime_1.jsx)(react_router_1.RouterProvider, { router: router }, void 0) }, void 0));
//# sourceMappingURL=app.js.map