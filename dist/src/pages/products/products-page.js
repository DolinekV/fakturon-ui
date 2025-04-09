"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const getProductList_1 = require("@/api/product/getProductList");
const data_table_1 = require("@/atoms/data-table");
const ProductsPage = () => {
    const [pagination, setPagination] = (0, react_1.useState)({
        pageIndex: 0,
        pageSize: 10
    });
    const { data, isLoading, isFetching, isError } = (0, getProductList_1.useProductList)({
        page: pagination.pageIndex,
        size: pagination.pageSize
    });
    const handlePaginationChange = (state) => {
        setPagination(state);
    };
    return (0, jsx_runtime_1.jsx)(data_table_1.DataTable, { onCreate: () => null, createLabel: "Create product", pagination: pagination, onPaginationChange: handlePaginationChange, columns: [
            {
                accessorKey: "name",
                header: "Name"
            },
            {
                accessorKey: "description",
                header: "Description"
            },
            {
                accessorKey: "price",
                header: "Price"
            },
            {
                accessorKey: "priceTax",
                header: "Price with tax"
            }
        ], data: data?.content || [], isLoading: isLoading || isFetching, isError: isError }, void 0);
};
exports.ProductsPage = ProductsPage;
//# sourceMappingURL=products-page.js.map