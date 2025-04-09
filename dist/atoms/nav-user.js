"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavUser = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const avatar_1 = require("@/atoms/avatar");
const dropdown_menu_1 = require("@/atoms/dropdown-menu");
const sidebar_1 = require("@/atoms/sidebar");
function NavUser({ user, }) {
    const { isMobile } = (0, sidebar_1.useSidebar)();
    return ((0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenu, { children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuItem, { children: (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(sidebar_1.SidebarMenuButton, { size: "lg", className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground", children: [(0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { className: "h-8 w-8 rounded-lg", children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: user.avatar, alt: user.name }, void 0), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { className: "rounded-lg", children: "CN" }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [(0, jsx_runtime_1.jsx)("span", { className: "truncate font-semibold", children: user.name }, void 0), (0, jsx_runtime_1.jsx)("span", { className: "truncate text-xs", children: user.email }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronsUpDown, { className: "ml-auto size-4" }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuContent, { className: "w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg", side: isMobile ? "bottom" : "right", align: "end", sideOffset: 4, children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuLabel, { className: "p-0 font-normal", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [(0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { className: "h-8 w-8 rounded-lg", children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: user.avatar, alt: user.name }, void 0), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { className: "rounded-lg", children: "CN" }, void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [(0, jsx_runtime_1.jsx)("span", { className: "truncate font-semibold", children: user.name }, void 0), (0, jsx_runtime_1.jsx)("span", { className: "truncate text-xs", children: user.email }, void 0)] }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuGroup, { children: (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, {}, void 0), "Upgrade to Pro"] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuGroup, { children: [(0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.BadgeCheck, {}, void 0), "Account"] }, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CreditCard, {}, void 0), "Billing"] }, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Bell, {}, void 0), "Notifications"] }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuItem, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.LogOut, {}, void 0), "Log out"] }, void 0)] }, void 0)] }, void 0) }, void 0) }, void 0));
}
exports.NavUser = NavUser;
//# sourceMappingURL=nav-user.js.map