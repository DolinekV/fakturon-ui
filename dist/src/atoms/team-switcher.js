"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSwitcher = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const dropdown_menu_1 = require("@/atoms/dropdown-menu");
const sidebar_1 = require("@/atoms/sidebar");
function TeamSwitcher({ teams, }) {
    const { isMobile } = (0, sidebar_1.useSidebar)();
    const [activeTeam, setActiveTeam] = React.useState(teams[0]);
    if (!activeTeam) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenu, { children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuItem, { children: (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(sidebar_1.SidebarMenuButton, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground", children: (0, jsx_runtime_1.jsx)(activeTeam.logo, { className: "size-4" }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [(0, jsx_runtime_1.jsx)("span", { className: "truncate font-semibold", children: activeTeam.name }, void 0), (0, jsx_runtime_1.jsx)("span", { className: "truncate text-xs", children: activeTeam.plan }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronsUpDown, { className: "ml-auto" }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuContent, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", align: "start", side: isMobile ? "bottom" : "right", sideOffset: 4, children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuLabel, { className: "text-xs text-muted-foreground", children: "Teams" }, void 0), teams.map((team, index) => ((0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { onClick: () => setActiveTeam(team), className: "gap-2 p-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex size-6 items-center justify-center rounded-sm border", children: (0, jsx_runtime_1.jsx)(team.logo, { className: "size-4 shrink-0" }, void 0) }, void 0), team.name, (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuShortcut, { children: ["\u2318", index + 1] }, void 0)] }, team.name))), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { className: "gap-2 p-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex size-6 items-center justify-center rounded-md border bg-background", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Plus, { className: "size-4" }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("div", { className: "font-medium text-muted-foreground", children: "Add team" }, void 0)] }, void 0)] }, void 0)] }, void 0) }, void 0) }, void 0));
}
exports.TeamSwitcher = TeamSwitcher;
//# sourceMappingURL=team-switcher.js.map