"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavProjects = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const dropdown_menu_1 = require("@/atoms/dropdown-menu");
const sidebar_1 = require("@/atoms/sidebar");
function NavProjects({ projects, }) {
    const { isMobile } = (0, sidebar_1.useSidebar)();
    return ((0, jsx_runtime_1.jsxs)(sidebar_1.SidebarGroup, { className: "group-data-[collapsible=icon]:hidden", children: [(0, jsx_runtime_1.jsx)(sidebar_1.SidebarGroupLabel, { children: "Projects" }, void 0), (0, jsx_runtime_1.jsxs)(sidebar_1.SidebarMenu, { children: [projects.map((item) => ((0, jsx_runtime_1.jsxs)(sidebar_1.SidebarMenuItem, { children: [(0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuButton, { asChild: true, children: (0, jsx_runtime_1.jsxs)("a", { href: item.url, children: [(0, jsx_runtime_1.jsx)(item.icon, {}, void 0), (0, jsx_runtime_1.jsx)("span", { children: item.name }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(sidebar_1.SidebarMenuAction, { showOnHover: true, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MoreHorizontal, {}, void 0), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "More" }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuContent, { className: "w-48 rounded-lg", side: isMobile ? "bottom" : "right", align: isMobile ? "end" : "start", children: [(0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Folder, { className: "text-muted-foreground" }, void 0), (0, jsx_runtime_1.jsx)("span", { children: "View Project" }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Forward, { className: "text-muted-foreground" }, void 0), (0, jsx_runtime_1.jsx)("span", { children: "Share Project" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Trash2, { className: "text-muted-foreground" }, void 0), (0, jsx_runtime_1.jsx)("span", { children: "Delete Project" }, void 0)] }, void 0)] }, void 0)] }, void 0)] }, item.name))), (0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuItem, { children: (0, jsx_runtime_1.jsxs)(sidebar_1.SidebarMenuButton, { className: "text-sidebar-foreground/70", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MoreHorizontal, { className: "text-sidebar-foreground/70" }, void 0), (0, jsx_runtime_1.jsx)("span", { children: "More" }, void 0)] }, void 0) }, void 0)] }, void 0)] }, void 0));
}
exports.NavProjects = NavProjects;
//# sourceMappingURL=nav-projects.js.map