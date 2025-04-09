"use strict";
"use client";
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
exports.TooltipProvider = exports.TooltipContent = exports.TooltipTrigger = exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TooltipPrimitive = __importStar(require("@radix-ui/react-tooltip"));
const utils_1 = require("@/lib/utils");
function TooltipProvider({ delayDuration = 0, ...props }) {
    return (0, jsx_runtime_1.jsx)(TooltipPrimitive.Provider, { "data-slot": "tooltip-provider", delayDuration: delayDuration, ...props }, void 0);
}
exports.TooltipProvider = TooltipProvider;
function Tooltip({ ...props }) {
    return ((0, jsx_runtime_1.jsx)(TooltipProvider, { children: (0, jsx_runtime_1.jsx)(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }, void 0) }, void 0));
}
exports.Tooltip = Tooltip;
function TooltipTrigger({ ...props }) {
    return (0, jsx_runtime_1.jsx)(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props }, void 0);
}
exports.TooltipTrigger = TooltipTrigger;
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return ((0, jsx_runtime_1.jsx)(TooltipPrimitive.Portal, { children: (0, jsx_runtime_1.jsxs)(TooltipPrimitive.Content, { "data-slot": "tooltip-content", sideOffset: sideOffset, className: (0, utils_1.cn)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" }, void 0)] }, void 0) }, void 0));
}
exports.TooltipContent = TooltipContent;
//# sourceMappingURL=tooltip.js.map