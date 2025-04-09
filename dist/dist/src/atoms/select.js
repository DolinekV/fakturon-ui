"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectValue = exports.SelectTrigger = exports.SelectSeparator = exports.SelectScrollUpButton = exports.SelectScrollDownButton = exports.SelectLabel = exports.SelectItem = exports.SelectGroup = exports.SelectContent = exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SelectPrimitive = __importStar(require("@radix-ui/react-select"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
function Select({ ...props }) {
    return (0, jsx_runtime_1.jsx)(SelectPrimitive.Root, { "data-slot": "select", ...props }, void 0);
}
exports.Select = Select;
function SelectGroup({ ...props }) {
    return (0, jsx_runtime_1.jsx)(SelectPrimitive.Group, { "data-slot": "select-group", ...props }, void 0);
}
exports.SelectGroup = SelectGroup;
function SelectValue({ ...props }) {
    return (0, jsx_runtime_1.jsx)(SelectPrimitive.Value, { "data-slot": "select-value", ...props }, void 0);
}
exports.SelectValue = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(SelectPrimitive.Trigger, { "data-slot": "select-trigger", "data-size": size, className: (0, utils_1.cn)("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(SelectPrimitive.Icon, { asChild: true, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDownIcon, { className: "size-4 opacity-50" }, void 0) }, void 0)] }, void 0));
}
exports.SelectTrigger = SelectTrigger;
function SelectContent({ className, children, position = "popper", ...props }) {
    return ((0, jsx_runtime_1.jsx)(SelectPrimitive.Portal, { children: (0, jsx_runtime_1.jsxs)(SelectPrimitive.Content, { "data-slot": "select-content", className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position, ...props, children: [(0, jsx_runtime_1.jsx)(SelectScrollUpButton, {}, void 0), (0, jsx_runtime_1.jsx)(SelectPrimitive.Viewport, { className: (0, utils_1.cn)("p-1", position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"), children: children }, void 0), (0, jsx_runtime_1.jsx)(SelectScrollDownButton, {}, void 0)] }, void 0) }, void 0));
}
exports.SelectContent = SelectContent;
function SelectLabel({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(SelectPrimitive.Label, { "data-slot": "select-label", className: (0, utils_1.cn)("text-muted-foreground px-2 py-1.5 text-xs", className), ...props }, void 0));
}
exports.SelectLabel = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(SelectPrimitive.Item, { "data-slot": "select-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(SelectPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, { className: "size-4" }, void 0) }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(SelectPrimitive.ItemText, { children: children }, void 0)] }, void 0));
}
exports.SelectItem = SelectItem;
function SelectSeparator({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(SelectPrimitive.Separator, { "data-slot": "select-separator", className: (0, utils_1.cn)("bg-border pointer-events-none -mx-1 my-1 h-px", className), ...props }, void 0));
}
exports.SelectSeparator = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(SelectPrimitive.ScrollUpButton, { "data-slot": "select-scroll-up-button", className: (0, utils_1.cn)("flex cursor-default items-center justify-center py-1", className), ...props, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronUpIcon, { className: "size-4" }, void 0) }, void 0));
}
exports.SelectScrollUpButton = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(SelectPrimitive.ScrollDownButton, { "data-slot": "select-scroll-down-button", className: (0, utils_1.cn)("flex cursor-default items-center justify-center py-1", className), ...props, children: (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDownIcon, { className: "size-4" }, void 0) }, void 0));
}
exports.SelectScrollDownButton = SelectScrollDownButton;
//# sourceMappingURL=select.js.map