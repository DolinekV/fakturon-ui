import {Popover, PopoverContent, PopoverTrigger} from "@/atoms/popover";
import {PaginationState} from "@tanstack/react-table";
import {Eye, MoreHorizontal, MoreVertical} from "lucide-react";

import { useCustomerList } from "@/api/customer";
import { Button } from "@/atoms/button";
import { Checkbox } from "@/atoms/checkbox";
import { DataTable } from "@/atoms/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu";
import {useState} from "react";

export const CustomersPage = () => {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

  const { data, isLoading, isFetching, isError } = useCustomerList({
      page: pagination.pageIndex,
      size: pagination.pageSize
  });

  const handlePaginationChange = (state: PaginationState) => {
      setPagination(state)
  }

  return (
    <DataTable
        pagination={pagination}
        onPaginationChange={handlePaginationChange}
        createLabel={"Create customer"}
        onCreate={() => null}
      columns={[
        {
          accessorKey: "name",
          header: "Name",
            cell: (context) => (
                <b>{context.row.original.name}</b>
            )
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
            header: (props) => (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <Eye />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end">
                        <DropdownMenuLabel>Columns</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {props.table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                <div>
                                    <Checkbox id={column.id} checked={column.getIsVisible()}
                                              onCheckedChange={(value) =>
                                                  column.toggleVisibility(!!value)
                                              } />
                                    <label htmlFor={column.id}>{column.columnDef.header as string}</label>
                                </div>
                                )
                            })}
                    </PopoverContent>
                </Popover>
            ),
          cell: ({ row }) => {
            const payment = row.original;

            return (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreVertical />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => void navigator.clipboard.writeText(payment.id)}>
                    Copy payment ID
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View customer</DropdownMenuItem>
                  <DropdownMenuItem>View payment details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          },
        },
      ]}
      data={data?.content || []}
      isLoading={isLoading || isFetching}
      isError={isError}
    />
  );
};
