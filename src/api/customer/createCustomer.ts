import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "../api";

import { Customer } from "@/types/customer";
import { ErrorResponse } from "@/types/errors";

type CreateCustomerParams = Omit<Customer, "id">;

const fetcher = (body: CreateCustomerParams) => api("/customer", { method: "POST", body: JSON.stringify(body) });

export const useCreateCustomer = () => {
  const client = useQueryClient();

  return useMutation<void, ErrorResponse<Customer>, CreateCustomerParams>({
    mutationFn: (body: CreateCustomerParams) => fetcher(body),
    mutationKey: ["createCustomer"],
    onSuccess: () => {
      void client.invalidateQueries({
        queryKey: ["customerList"],
      });
    },
  });
};
