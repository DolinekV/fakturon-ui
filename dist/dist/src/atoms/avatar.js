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
exports.AvatarFallback = exports.AvatarImage = exports.Avatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AvatarPrimitive = __importStar(require("@radix-ui/react-avatar"));
const utils_1 = require("@/lib/utils");
function Avatar({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Root, { "data-slot": "avatar", className: (0, utils_1.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full", className), ...props }, void 0));
}
exports.Avatar = Avatar;
function AvatarImage({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Image, { "data-slot": "avatar-image", className: (0, utils_1.cn)("aspect-square size-full", className), ...props }, void 0));
}
exports.AvatarImage = AvatarImage;
function AvatarFallback({ className, ...props }) {
    return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Fallback, { "data-slot": "avatar-fallback", className: (0, utils_1.cn)("bg-muted flex size-full items-center justify-center rounded-full", className), ...props }, void 0));
}
exports.AvatarFallback = AvatarFallback;
//# sourceMappingURL=avatar.js.map