"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomer = void 0;
const react_query_1 = require("@tanstack/react-query");
const api_1 = require("../api");
const fetcher = (id) => (0, api_1.api)(`/customer/${id}`);
const useCustomer = (id) => {
    return (0, react_query_1.useQuery)({
        queryKey: ["customer", id],
        enabled: !!id,
        queryFn: () => fetcher(id),
        staleTime: 5000 * 60,
    });
};
exports.useCustomer = useCustomer;
//# sourceMappingURL=getCustomer.js.map