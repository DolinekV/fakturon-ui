"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationEllipsis = exports.PaginationNext = exports.PaginationPrevious = exports.PaginationItem = exports.PaginationLink = exports.PaginationContent = exports.Pagination = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
const button_1 = require("@/atoms/button");
function Pagination({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("nav", { role: "navigation", "aria-label": "pagination", "data-slot": "pagination", className: (0, utils_1.cn)("mx-auto flex w-full justify-center", className), ...props }, void 0));
}
exports.Pagination = Pagination;
function PaginationContent({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("ul", { "data-slot": "pagination-content", className: (0, utils_1.cn)("flex flex-row items-center gap-1", className), ...props }, void 0));
}
exports.PaginationContent = PaginationContent;
function PaginationItem({ ...props }) {
    return (0, jsx_runtime_1.jsx)("li", { "data-slot": "pagination-item", ...props }, void 0);
}
exports.PaginationItem = PaginationItem;
function PaginationLink({ className, isActive, size = "icon", ...props }) {
    return ((0, jsx_runtime_1.jsx)("a", { "aria-current": isActive ? "page" : undefined, "data-slot": "pagination-link", "data-active": isActive, className: (0, utils_1.cn)((0, button_1.buttonVariants)({
            variant: isActive ? "outline" : "ghost",
            size,
        }), className), ...props }, void 0));
}
exports.PaginationLink = PaginationLink;
function PaginationPrevious({ className, isDisabled, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(PaginationLink, { "aria-label": "Go to previous page", size: "default", className: (0, utils_1.cn)("gap-1 px-2.5 sm:pl-2.5", className, isDisabled && "disabled"), ...props, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ChevronLeftIcon, {}, void 0), (0, jsx_runtime_1.jsx)("span", { className: "hidden sm:block", children: "Previous" }, void 0)] }, void 0));
}
exports.PaginationPrevious = PaginationPrevious;
function PaginationNext({ className, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(PaginationLink, { "aria-label": "Go to next page", size: "default", className: (0, utils_1.cn)("gap-1 px-2.5 sm:pr-2.5", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "hidden sm:block", children: "Next" }, void 0), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRightIcon, {}, void 0)] }, void 0));
}
exports.PaginationNext = PaginationNext;
function PaginationEllipsis({ className, ...props }) {
    return ((0, jsx_runtime_1.jsxs)("span", { "aria-hidden": true, "data-slot": "pagination-ellipsis", className: (0, utils_1.cn)("flex size-9 items-center justify-center", className), ...props, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.MoreHorizontalIcon, { className: "size-4" }, void 0), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "More pages" }, void 0)] }, void 0));
}
exports.PaginationEllipsis = PaginationEllipsis;
//# sourceMappingURL=pagination.js.map