"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const popover_1 = require("@/atoms/popover");
const lucide_react_1 = require("lucide-react");
const customer_1 = require("@/api/customer");
const button_1 = require("@/atoms/button");
const checkbox_1 = require("@/atoms/checkbox");
const data_table_1 = require("@/atoms/data-table");
const dropdown_menu_1 = require("@/atoms/dropdown-menu");
const react_1 = require("react");
const CustomersPage = () => {
    const [pagination, setPagination] = (0, react_1.useState)({
        pageIndex: 0,
        pageSize: 10,
    });
    const { data, isLoading, isFetching, isError } = (0, customer_1.useCustomerList)({
        page: pagination.pageIndex,
        size: pagination.pageSize
    });
    const handlePaginationChange = (state) => {
        setPagination(state);
    };
    return ((0, jsx_runtime_1.jsx)(data_table_1.DataTable, { pagination: pagination, onPaginationChange: handlePaginationChange, createLabel: "Create customer", onCreate: () => null, columns: [
            {
                accessorKey: "name",
                header: "Name",
                cell: (context) => ((0, jsx_runtime_1.jsx)("b", { children: context.row.original.name }, void 0))
            },
            {
                accessorKey: "tin",
                header: "TIN",
            },
            {
                accessorKey: "cin",
                header: "CIN",
            },
            {
                accessorKey: "email",
                header: "E-mail",
            },
            {
                accessorKey: "phone",
                header: "Phone",
            },
            {
                id: "actions",
                enableHiding: false,
                header: (props) => ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Open menu" }, void 0), (0, jsx_runtime_1.jsx)(lucide_react_1.Eye, {}, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(popover_1.PopoverContent, { align: "end", children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuLabel, { children: "Columns" }, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}, void 0), props.table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { id: column.id, checked: column.getIsVisible(), onCheckedChange: (value) => column.toggleVisibility(!!value) }, void 0), (0, jsx_runtime_1.jsx)("label", { htmlFor: column.id, children: column.columnDef.header }, void 0)] }, void 0));
                                })] }, void 0)] }, void 0)),
                cell: ({ row }) => {
                    const payment = row.original;
                    return ((0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenu, { children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuTrigger, { asChild: true, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "ghost", className: "h-8 w-8 p-0", children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Open menu" }, void 0), (0, jsx_runtime_1.jsx)(lucide_react_1.MoreVertical, {}, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsxs)(dropdown_menu_1.DropdownMenuContent, { align: "end", children: [(0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuLabel, { children: "Actions" }, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuItem, { onClick: () => void navigator.clipboard.writeText(payment.id), children: "Copy payment ID" }, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuSeparator, {}, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuItem, { children: "View customer" }, void 0), (0, jsx_runtime_1.jsx)(dropdown_menu_1.DropdownMenuItem, { children: "View payment details" }, void 0)] }, void 0)] }, void 0));
                },
            },
        ], data: data?.content || [], isLoading: isLoading || isFetching, isError: isError }, void 0));
};
exports.CustomersPage = CustomersPage;
//# sourceMappingURL=customers-page.js.map