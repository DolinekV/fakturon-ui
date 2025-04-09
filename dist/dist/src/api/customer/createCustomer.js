"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateCustomer = void 0;
const react_query_1 = require("@tanstack/react-query");
const api_1 = require("../api");
const fetcher = (body) => (0, api_1.api)("/customer", { method: "POST", body: JSON.stringify(body) });
const useCreateCustomer = () => {
    const client = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (body) => fetcher(body),
        mutationKey: ["createCustomer"],
        onSuccess: () => {
            void client.invalidateQueries({
                queryKey: ["customerList"],
            });
        },
    });
};
exports.useCreateCustomer = useCreateCustomer;
//# sourceMappingURL=createCustomer.js.map