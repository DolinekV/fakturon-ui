"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = exports.api = void 0;
const react_query_1 = require("@tanstack/react-query");
const api = (url, options) => fetch("http://localhost:8080" + url, {
    headers: {
        "Content-Type": "application/json",
        ...options?.headers,
    },
    ...options,
}).then(async (response) => {
    if (!response.ok)
        return Promise.reject(await response.json());
    try {
        return response.json();
    }
    catch (error) {
        return Promise.resolve({});
    }
});
exports.api = api;
exports.client = new react_query_1.QueryClient();
//# sourceMappingURL=api.js.map