"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBreadcrumb = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_1 = require("react-router");
const react_1 = require("react");
const breadcrumb_1 = require("@/atoms/breadcrumb");
const AppBreadcrumb = () => {
    const routes = (0, react_router_1.useMatches)();
    return ((0, jsx_runtime_1.jsx)(breadcrumb_1.Breadcrumb, { children: (0, jsx_runtime_1.jsx)(breadcrumb_1.BreadcrumbList, { children: routes.map((route, index) => ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(breadcrumb_1.BreadcrumbItem, { className: "hidden md:block", children: (0, jsx_runtime_1.jsx)(breadcrumb_1.BreadcrumbLink, { to: route.pathname, children: route.handle && route.handle.crumb ? route.handle.crumb : "Not specified crumb" }, void 0) }, void 0), routes.length - 1 !== index && (0, jsx_runtime_1.jsx)(breadcrumb_1.BreadcrumbSeparator, { className: "hidden md:block" }, void 0)] }, route.id))) }, void 0) }, void 0));
};
exports.AppBreadcrumb = AppBreadcrumb;
//# sourceMappingURL=app-breadcrumb.js.map