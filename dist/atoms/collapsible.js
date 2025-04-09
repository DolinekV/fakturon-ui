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
exports.CollapsibleContent = exports.CollapsibleTrigger = exports.Collapsible = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CollapsiblePrimitive = __importStar(require("@radix-ui/react-collapsible"));
function Collapsible({ ...props }) {
    return (0, jsx_runtime_1.jsx)(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props }, void 0);
}
exports.Collapsible = Collapsible;
function CollapsibleTrigger({ ...props }) {
    return (0, jsx_runtime_1.jsx)(CollapsiblePrimitive.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...props }, void 0);
}
exports.CollapsibleTrigger = CollapsibleTrigger;
function CollapsibleContent({ ...props }) {
    return (0, jsx_runtime_1.jsx)(CollapsiblePrimitive.CollapsibleContent, { "data-slot": "collapsible-content", ...props }, void 0);
}
exports.CollapsibleContent = CollapsibleContent;
//# sourceMappingURL=collapsible.js.map