"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProductList = void 0;
const react_query_1 = require("@tanstack/react-query");
const api_1 = require("../api");
const fetcher = (params) => {
    if (params.size) {
        return (0, api_1.api)(`/product?${params.toString()}`);
    }
    return (0, api_1.api)(`/product`);
};
const useProductList = (params) => {
    const urlSearchParams = new URLSearchParams({
        ...(params?.size && { size: String(params.size) }),
        ...(params?.page && { page: String(params.page) })
    });
    return (0, react_query_1.useQuery)({
        queryKey: ["productList", params.size, params.page],
        queryFn: () => fetcher(urlSearchParams),
        staleTime: 5000 * 60,
    });
};
exports.useProductList = useProductList;
//# sourceMappingURL=getProductList.js.map