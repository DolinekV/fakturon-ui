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
exports.SheetDescription = exports.SheetTitle = exports.SheetFooter = exports.SheetHeader = exports.SheetContent = exports.SheetClose = exports.SheetTrigger = exports.Sheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SheetPrimitive = __importStar(require("@radix-ui/react-dialog"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
function Sheet({ ...props }) {
    return (0, jsx_runtime_1.jsx)(SheetPrimitive.Root, { "data-slot": "sheet", ...props }, void 0);
}
exports.Sheet = Sheet;
function SheetTrigger({ ...props }) {
    return (0, jsx_runtime_1.jsx)(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props }, void 0);
}
exports.SheetTrigger = SheetTrigger;
function SheetClose({ ...props }) {
    return (0, jsx_runtime_1.jsx)(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props }, void 0);
}
exports.SheetClose = SheetClose;
function SheetPortal({ ...props }) {
    return (0, jsx_runtime_1.jsx)(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props }, void 0);
}
function SheetOverlay({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Overlay, { "data-slot": "sheet-overlay", className: (0, utils_1.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className), ...props }, void 0));
}
function SheetContent({ className, children, side = "right", ...props }) {
    return ((0, jsx_runtime_1.jsxs)(SheetPortal, { children: [(0, jsx_runtime_1.jsx)(SheetOverlay, {}, void 0), (0, jsx_runtime_1.jsxs)(SheetPrimitive.Content, { "data-slot": "sheet-content", className: (0, utils_1.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" &&
                    "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" &&
                    "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" &&
                    "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" &&
                    "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className), ...props, children: [children, (0, jsx_runtime_1.jsxs)(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.XIcon, { className: "size-4" }, void 0), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Close" }, void 0)] }, void 0)] }, void 0)] }, void 0));
}
exports.SheetContent = SheetContent;
function SheetHeader({ className, ...props }) {
    return (0, jsx_runtime_1.jsx)("div", { "data-slot": "sheet-header", className: (0, utils_1.cn)("flex flex-col gap-1.5 p-4", className), ...props }, void 0);
}
exports.SheetHeader = SheetHeader;
function SheetFooter({ className, ...props }) {
    return (0, jsx_runtime_1.jsx)("div", { "data-slot": "sheet-footer", className: (0, utils_1.cn)("mt-auto flex flex-col gap-2 p-4", className), ...props }, void 0);
}
exports.SheetFooter = SheetFooter;
function SheetTitle({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Title, { "data-slot": "sheet-title", className: (0, utils_1.cn)("text-foreground font-semibold", className), ...props }, void 0));
}
exports.SheetTitle = SheetTitle;
function SheetDescription({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(SheetPrimitive.Description, { "data-slot": "sheet-description", className: (0, utils_1.cn)("text-muted-foreground text-sm", className), ...props }, void 0));
}
exports.SheetDescription = SheetDescription;
//# sourceMappingURL=sheet.js.map