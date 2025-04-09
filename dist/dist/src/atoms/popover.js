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
exports.PopoverAnchor = exports.PopoverContent = exports.PopoverTrigger = exports.Popover = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const PopoverPrimitive = __importStar(require("@radix-ui/react-popover"));
const utils_1 = require("@/lib/utils");
function Popover({ ...props }) {
    return (0, jsx_runtime_1.jsx)(PopoverPrimitive.Root, { "data-slot": "popover", ...props }, void 0);
}
exports.Popover = Popover;
function PopoverTrigger({ ...props }) {
    return (0, jsx_runtime_1.jsx)(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props }, void 0);
}
exports.PopoverTrigger = PopoverTrigger;
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
    return ((0, jsx_runtime_1.jsx)(PopoverPrimitive.Portal, { children: (0, jsx_runtime_1.jsx)(PopoverPrimitive.Content, { "data-slot": "popover-content", align: align, sideOffset: sideOffset, className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className), ...props }, void 0) }, void 0));
}
exports.PopoverContent = PopoverContent;
function PopoverAnchor({ ...props }) {
    return (0, jsx_runtime_1.jsx)(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props }, void 0);
}
exports.PopoverAnchor = PopoverAnchor;
//# sourceMappingURL=popover.js.map