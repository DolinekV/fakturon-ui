"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const en_1 = require("./en");
const cz_1 = require("./cz");
i18next_1.default.use(react_i18next_1.initReactI18next).init({
    resources: {
        en: en_1.en,
        cz: cz_1.cz,
    },
    lng: "en",
    interpolation: {
        escapeValue: true,
    },
});
exports.default = i18next_1.default;
//# sourceMappingURL=i18next.js.map