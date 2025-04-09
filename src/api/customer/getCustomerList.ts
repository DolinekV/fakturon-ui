import { useQuery } from "@tanstack/react-query";

import {Paginated} from "@/models/api";
import { Customer } from "@/types/customer";

import { api } from "../api";

interface QueryParams {
  size?: number;
  page?: number;
}

const fetcher = (params: URLSearchParams) => {
  if (params.size) {
    return api(`/customer?${params.toString()}`);
  }

  return api(`/customer`)
};

export const useCustomerList = (params?: QueryParams) => {
  const urlSearchParams = new URLSearchParams({
    ...(params?.size && { size: String(params.size) }),
    ...(params?.page && { page: String(params.page) })
  })


  return useQuery<Paginated<Customer>>({
    queryKey: ["customerList", params.size, params.page],
    queryFn: () => fetcher(urlSearchParams),
    staleTime: 5000 * 60,
  });
};
