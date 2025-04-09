import { useState } from "react";
import { PaginationState } from "@tanstack/react-table";

import { useProductList } from "@/api/product/getProductList";
import { DataTable } from "@/atoms/data-table";

export const ProductsPage = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });

  const { data, isLoading, isFetching, isError } = useProductList({
    page: pagination.pageIndex,
    size: pagination.pageSize
  })

  const handlePaginationChange = (state: PaginationState) => {
    setPagination(state)
  }

  return <DataTable onCreate={() => null} createLabel={"Create product"} pagination={pagination} onPaginationChange={handlePaginationChange} columns={[
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
  ]} data={data?.content || []} isLoading={isLoading || isFetching} isError={isError} />;
}