"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSidebar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const nav_main_1 = require("@/atoms/nav-main");
const nav_projects_1 = require("@/atoms/nav-projects");
const nav_user_1 = require("@/atoms/nav-user");
const team_switcher_1 = require("@/atoms/team-switcher");
const sidebar_1 = require("@/atoms/sidebar");
// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: lucide_react_1.GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: lucide_react_1.AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: lucide_react_1.Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Invoices",
            url: "/invoices",
            icon: lucide_react_1.FileText,
            isActive: true,
            items: [
                {
                    title: "Overview",
                    url: "/invoices",
                },
            ],
        },
        {
            title: "Customers",
            url: "/customers",
            icon: lucide_react_1.Users,
            items: [
                {
                    title: "Overview",
                    url: "/customers",
                },
            ],
        }
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: lucide_react_1.Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: lucide_react_1.PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: lucide_react_1.Map,
        },
    ],
};
function AppSidebar({ ...props }) {
    return ((0, jsx_runtime_1.jsxs)(sidebar_1.Sidebar, { collapsible: "icon", ...props, children: [(0, jsx_runtime_1.jsx)(sidebar_1.SidebarHeader, { children: (0, jsx_runtime_1.jsx)(team_switcher_1.TeamSwitcher, { teams: data.teams }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(sidebar_1.SidebarContent, { children: [(0, jsx_runtime_1.jsx)(nav_main_1.NavMain, { items: data.navMain }, void 0), (0, jsx_runtime_1.jsx)(nav_projects_1.NavProjects, { projects: data.projects }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(sidebar_1.SidebarFooter, { children: (0, jsx_runtime_1.jsx)(nav_user_1.NavUser, { user: data.user }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(sidebar_1.SidebarRail, {}, void 0)] }, void 0));
}
exports.AppSidebar = AppSidebar;
//# sourceMappingURL=AppSidebar.js.map