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
exports.DropdownMenuSubContent = exports.DropdownMenuSubTrigger = exports.DropdownMenuSub = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuRadioItem = exports.DropdownMenuRadioGroup = exports.DropdownMenuCheckboxItem = exports.DropdownMenuItem = exports.DropdownMenuLabel = exports.DropdownMenuGroup = exports.DropdownMenuContent = exports.DropdownMenuTrigger = exports.DropdownMenuPortal = exports.DropdownMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DropdownMenuPrimitive = __importStar(require("@radix-ui/react-dropdown-menu"));
const lucide_react_1 = require("lucide-react");
const utils_1 = require("@/lib/utils");
function DropdownMenu({ ...props }) {
    return (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props }, void 0);
}
exports.DropdownMenu = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props }, void 0);
}
exports.DropdownMenuPortal = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props, className: "cursor-pointer" }, void 0);
}
exports.DropdownMenuTrigger = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Content, { "data-slot": "dropdown-menu-content", sideOffset: sideOffset, className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className), ...props }, void 0) }, void 0));
}
exports.DropdownMenuContent = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props }, void 0);
}
exports.DropdownMenuGroup = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Item, { "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props }, void 0));
}
exports.DropdownMenuItem = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.CheckboxItem, { "data-slot": "dropdown-menu-checkbox-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked, ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckIcon, { className: "size-4" }, void 0) }, void 0) }, void 0), children] }, void 0));
}
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.RadioGroup, { "data-slot": "dropdown-menu-radio-group", ...props }, void 0);
}
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.RadioItem, { "data-slot": "dropdown-menu-radio-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(lucide_react_1.CircleIcon, { className: "size-2 fill-current" }, void 0) }, void 0) }, void 0), children] }, void 0));
}
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Label, { "data-slot": "dropdown-menu-label", "data-inset": inset, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className), ...props }, void 0));
}
exports.DropdownMenuLabel = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Separator, { "data-slot": "dropdown-menu-separator", className: (0, utils_1.cn)("bg-border -mx-1 my-1 h-px", className), ...props }, void 0));
}
exports.DropdownMenuSeparator = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)("span", { "data-slot": "dropdown-menu-shortcut", className: (0, utils_1.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className), ...props }, void 0));
}
exports.DropdownMenuShortcut = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return (0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props }, void 0);
}
exports.DropdownMenuSub = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(DropdownMenuPrimitive.SubTrigger, { "data-slot": "dropdown-menu-sub-trigger", "data-inset": inset, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRightIcon, { className: "ml-auto size-4" }, void 0)] }, void 0));
}
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(DropdownMenuPrimitive.SubContent, { "data-slot": "dropdown-menu-sub-content", className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className), ...props }, void 0));
}
exports.DropdownMenuSubContent = DropdownMenuSubContent;
//# sourceMappingURL=dropdown-menu.js.map