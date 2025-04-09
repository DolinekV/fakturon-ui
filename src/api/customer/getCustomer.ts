import { useQuery } from "@tanstack/react-query";

import { api } from "../api";
import { Customer } from "../../types/customer";

const fetcher = (id?: number) => api(`/customer/${id}`);

export const useCustomer = (id?: number) => {
  return useQuery<Customer>({
    queryKey: ["customer", id],
    enabled: !!id,
    queryFn: () => fetcher(id),
    staleTime: 5000 * 60,
  });
};
