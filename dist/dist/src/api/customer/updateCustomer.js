"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdateCustomer = void 0;
const react_query_1 = require("@tanstack/react-query");
const api_1 = require("../api");
const fetcher = (body) => (0, api_1.api)(`/customer/${body.id}`, { method: "PUT", body: JSON.stringify(body) });
const useUpdateCustomer = () => {
    const client = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: (body) => fetcher(body),
        mutationKey: ["updateCustomer"],
        onSuccess: () => {
            client.invalidateQueries({
                queryKey: ["customerList"],
            });
        },
    });
};
exports.useUpdateCustomer = useUpdateCustomer;
//# sourceMappingURL=updateCustomer.js.map