"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const path_1 = __importDefault(require("path"));
const plugin_react_swc_1 = __importDefault(require("@vitejs/plugin-react-swc"));
// https://vitejs.dev/config
exports.default = (0, vite_1.defineConfig)({
    resolve: {
        alias: {
            "@": path_1.default.resolve(__dirname, "./src")
        }
    },
    plugins: [(0, plugin_react_swc_1.default)()]
});
//# sourceMappingURL=vite.renderer.config.js.map