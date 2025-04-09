"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const checkbox_1 = require("@/atoms/checkbox");
const data_table_pagination_1 = require("@/atoms/data-table-pagination");
const match_sorter_utils_1 = require("@tanstack/match-sorter-utils");
const react_table_1 = require("@tanstack/react-table");
const react_1 = require("react");
const button_1 = require("@/atoms/button");
const input_1 = require("@/atoms/input");
const skeleton_1 = require("@/atoms/skeleton");
const table_1 = require("@/atoms/table");
const fuzzyFilter = (row, columnId, value, addMeta) => {
    const itemRank = (0, match_sorter_utils_1.rankItem)(row.getValue(columnId), value);
    addMeta({ itemRank });
    return itemRank.passed;
};
const selectableColumn = [{
        id: "select",
        header: ({ table }) => ((0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate"), onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value), "aria-label": "Select all" }, void 0)),
        cell: ({ row }) => ((0, jsx_runtime_1.jsx)(checkbox_1.Checkbox, { checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!!value), "aria-label": "Select row" }, void 0)),
        enableSorting: false,
        enableHiding: false,
    }];
function DataTable({ columns, data, isLoading, isError, pagination, onPaginationChange, ...props }) {
    const [rowSelection, setRowSelection] = (0, react_1.useState)({});
    const [globalFilter, setGlobalFilter] = (0, react_1.useState)("");
    const [columnVisibility, setColumnVisibility] = (0, react_1.useState)({});
    const [sorting, setSorting] = (0, react_1.useState)([]);
    const [pageCount, setPageCount] = (0, react_1.useState)(10);
    const { createLabel, onCreate } = props;
    const table = (0, react_table_1.useReactTable)({
        data,
        columns: [...selectableColumn, ...columns],
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        pageCount: 10,
        globalFilterFn: fuzzyFilter,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        enableRowSelection: true,
        getFilteredRowModel: (0, react_table_1.getFilteredRowModel)(),
        onRowSelectionChange: setRowSelection,
        onGlobalFilterChange: setGlobalFilter,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: onPaginationChange,
        onSortingChange: setSorting,
        state: {
            rowSelection,
            globalFilter,
            columnVisibility,
            pagination,
            sorting
        },
        manualPagination: true
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row justify-between", children: [(0, jsx_runtime_1.jsx)(input_1.Input, { type: "search", placeholder: "Search...", onChange: (e) => table.setGlobalFilter(String(e.target.value)), className: "w-1/3" }, void 0), onCreate && createLabel && (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "default", children: createLabel }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("div", { className: isLoading ? "rounded-md border min-h-64" : "rounded-md border", children: (0, jsx_runtime_1.jsxs)(table_1.Table, { className: isLoading ? "min-h-full" : undefined, children: [(0, jsx_runtime_1.jsx)(table_1.TableHeader, { children: table.getHeaderGroups().map((headerGroup) => ((0, jsx_runtime_1.jsx)(table_1.TableRow, { children: headerGroup.headers.map((header) => {
                                    return ((0, jsx_runtime_1.jsx)(table_1.TableHead, { children: header.isPlaceholder ? null : (0, react_table_1.flexRender)(header.column.columnDef.header, header.getContext()) }, header.id));
                                }) }, headerGroup.id))) }, void 0), (0, jsx_runtime_1.jsxs)(table_1.TableBody, { children: [isLoading &&
                                    new Array(pagination.pageSize).fill(null).map((_, index) => ((0, jsx_runtime_1.jsx)(table_1.TableRow, { className: "h-7", children: new Array(columns.length).fill(null).map((_, index) => ((0, jsx_runtime_1.jsx)(table_1.TableCell, { children: (0, react_table_1.flexRender)((0, jsx_runtime_1.jsx)(skeleton_1.Skeleton, { className: "w-full h-full" }, void 0), null) }, index))) }, index))), !isLoading &&
                                    !isError &&
                                    data &&
                                    globalFilter === "" &&
                                    table.getFilteredRowModel().rows?.length &&
                                    table.getFilteredRowModel().rows.map((row) => ((0, jsx_runtime_1.jsx)(table_1.TableRow, { "data-state": row.getIsSelected() && "selected", className: "h-7", children: row.getVisibleCells().map((cell) => ((0, jsx_runtime_1.jsx)(table_1.TableCell, { children: (0, react_table_1.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id))), (!isLoading && !data) ||
                                    (!isLoading && globalFilter !== "" && ((0, jsx_runtime_1.jsx)(table_1.TableRow, { children: (0, jsx_runtime_1.jsx)(table_1.TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }, void 0) }, void 0)))] }, void 0)] }, void 0) }, void 0), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-2", children: (0, jsx_runtime_1.jsx)(data_table_pagination_1.DataTablePagination, { state: pagination, totalPages: 10, pageSize: pageCount, context: table }, void 0) }, void 0)] }, void 0));
}
exports.DataTable = DataTable;
//# sourceMappingURL=data-table.js.map