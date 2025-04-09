"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbEllipsis = exports.BreadcrumbSeparator = exports.BreadcrumbPage = exports.BreadcrumbLink = exports.BreadcrumbItem = exports.BreadcrumbList = exports.Breadcrumb = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_slot_1 = require("@radix-ui/react-slot");
const lucide_react_1 = require("lucide-react");
const react_router_1 = require("react-router");
const utils_1 = require("@/lib/utils");
function Breadcrumb({ ...props }) {
    return (0, jsx_runtime_1.jsx)("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props }, void 0);
}
exports.Breadcrumb = Breadcrumb;
function BreadcrumbList({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("ol", { "data-slot": "breadcrumb-list", className: (0, utils_1.cn)("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className), ...props }, void 0));
}
exports.BreadcrumbList = BreadcrumbList;
function BreadcrumbItem({ className, ...props }) {
    return (0, jsx_runtime_1.jsx)("li", { "data-slot": "breadcrumb-item", className: (0, utils_1.cn)("inline-flex items-center gap-1.5", className), ...props }, void 0);
}
exports.BreadcrumbItem = BreadcrumbItem;
function BreadcrumbLink({ asChild, className, ...props }) {
    const Comp = asChild ? react_slot_1.Slot : react_router_1.Link;
    return ((0, jsx_runtime_1.jsx)(Comp, { "data-slot": "breadcrumb-link", className: (0, utils_1.cn)("hover:text-foreground transition-colors", className), ...props }, void 0));
}
exports.BreadcrumbLink = BreadcrumbLink;
function BreadcrumbPage({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: (0, utils_1.cn)("text-foreground font-normal", className), ...props }, void 0));
}
exports.BreadcrumbPage = BreadcrumbPage;
function BreadcrumbSeparator({ children, className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("li", { "data-slot": "breadcrumb-separator", role: "presentation", "aria-hidden": "true", className: (0, utils_1.cn)("[&>svg]:size-3.5", className), ...props, children: children ?? (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, {}, void 0) }, void 0));
}
exports.BreadcrumbSeparator = BreadcrumbSeparator;
function BreadcrumbEllipsis({ className, ...props }) {
    return ((0, jsx_runtime_1.jsxs)("span", { "data-slot": "breadcrumb-ellipsis", role: "presentation", "aria-hidden": "true", className: (0, utils_1.cn)("flex size-9 items-center justify-center", className), ...props, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MoreHorizontal, { className: "size-4" }, void 0), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "More" }, void 0)] }, void 0));
}
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
//# sourceMappingURL=breadcrumb.js.map