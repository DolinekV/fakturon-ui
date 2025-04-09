import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "../api";
import { Customer } from "../../types/customer";
import { ErrorResponse } from "../../types/errors";

type UpdateCustomerParams = Customer;

const fetcher = (body: UpdateCustomerParams) =>
  api(`/customer/${body.id}`, { method: "PUT", body: JSON.stringify(body) });

export const useUpdateCustomer = () => {
  const client = useQueryClient();

  return useMutation<void, ErrorResponse<Customer>, UpdateCustomerParams>({
    mutationFn: (body: UpdateCustomerParams) => fetcher(body),
    mutationKey: ["updateCustomer"],
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["customerList"],
      });
    },
  });
};
