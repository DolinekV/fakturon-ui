"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMain = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const react_router_1 = require("react-router");
const collapsible_1 = require("@/atoms/collapsible");
const sidebar_1 = require("@/atoms/sidebar");
function NavMain({ items, }) {
    return ((0, jsx_runtime_1.jsxs)(sidebar_1.SidebarGroup, { children: [(0, jsx_runtime_1.jsx)(sidebar_1.SidebarGroupLabel, { children: "Platform" }, void 0), (0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenu, { children: items.map((item) => ((0, jsx_runtime_1.jsx)(collapsible_1.Collapsible, { asChild: true, defaultOpen: item.isActive, className: "group/collapsible", children: (0, jsx_runtime_1.jsxs)(sidebar_1.SidebarMenuItem, { children: [(0, jsx_runtime_1.jsx)(collapsible_1.CollapsibleTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(sidebar_1.SidebarMenuButton, { tooltip: item.title, children: [item.icon && (0, jsx_runtime_1.jsx)(item.icon, {}, void 0), (0, jsx_runtime_1.jsx)("span", { children: item.title }, void 0), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(collapsible_1.CollapsibleContent, { children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuSub, { children: item.items?.map((subItem) => ((0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuSubItem, { children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuSubButton, { asChild: true, children: (0, jsx_runtime_1.jsx)(react_router_1.Link, { to: subItem.url, children: (0, jsx_runtime_1.jsx)("span", { children: subItem.title }, void 0) }, void 0) }, void 0) }, subItem.title))) }, void 0) }, void 0)] }, void 0) }, item.title))) }, void 0)] }, void 0));
}
exports.NavMain = NavMain;
//# sourceMappingURL=nav-main.js.map