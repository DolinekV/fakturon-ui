"use client";

import {Checkbox} from "@/atoms/checkbox";
import {DataTablePagination} from "@/atoms/data-table-pagination";
import {
  Pagination,
  PaginationContent, PaginationEllipsis,
  PaginationItem,
  PaginationLink, PaginationNext,
  PaginationPrevious
} from "@/atoms/pagination";
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  ColumnDef,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel, PaginationState, SortingState,
  useReactTable, VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";

import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Skeleton } from "@/atoms/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/atoms/table";


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  createLabel?: string;
  onCreate?: () => void;
  pagination?: PaginationState;
  onPaginationChange?: (pagination: PaginationState) => void;
  isLoading?: boolean;
  isError?: boolean;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({ itemRank });

  return itemRank.passed;
};

const selectableColumn: ColumnDef<unknown, unknown>[] = [{
  id: "select",
  header: ({ table }) => (
      <Checkbox
          checked={
              table.getIsAllPageRowsSelected() ||
              ((table.getIsSomePageRowsSelected() && "indeterminate") as boolean | "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
      />
  ),
  cell: ({ row }) => (
      <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
      />
  ),
  enableSorting: false,
  enableHiding: false,
}]

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  isError,
  pagination,
  onPaginationChange,
  ...props
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnVisibility, setColumnVisibility] =
      useState<VisibilityState>({})
  const [sorting, setSorting] = useState<SortingState>([])
  const [pageCount, setPageCount] = useState<10 | 25 | 50>(10);


  const { createLabel, onCreate } = props;

  const table = useReactTable({
    data,
    columns: [...selectableColumn, ...columns] as ColumnDef<TData, TValue>[],
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    pageCount: 10,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
    getFilteredRowModel: getFilteredRowModel(),
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

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <Input
          type="search"
          placeholder="Search..."
          onChange={(e) => table.setGlobalFilter(String(e.target.value))}
          className="w-1/3"
        />
        {onCreate && createLabel && <Button variant={"default"}>{createLabel}</Button>}
      </div>
      <div className={isLoading ? "rounded-md border min-h-64" : "rounded-md border"}>
        <Table className={isLoading ? "min-h-full" : undefined}>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading &&
              new Array(pagination.pageSize).fill(null).map((_, index) => (
                <TableRow key={index} className="h-7">
                  {new Array(columns.length).fill(null).map((_, index) => (
                    <TableCell key={index}>
                      {flexRender(<Skeleton className="w-full h-full" />, null)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            {!isLoading &&
              !isError &&
              data &&
              globalFilter === "" &&
              table.getFilteredRowModel().rows?.length &&
              table.getFilteredRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="h-7">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))}
            {(!isLoading && !data) ||
              (!isLoading && globalFilter !== "" && (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center gap-2">
        <DataTablePagination state={pagination} totalPages={10} pageSize={pageCount} context={table}  />
      </div>
    </div>
  );
}
