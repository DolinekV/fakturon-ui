import { useQuery } from "@tanstack/react-query";

import {Product} from "@/types/product";
import {Paginated} from "@/models/api";

import { api } from "../api";

interface QueryParams {
    size?: number;
    page?: number;
}

const fetcher = (params: URLSearchParams) => {
    if (params.size) {
        return api(`/product?${params.toString()}`);
    }

    return api(`/product`)
};

export const useProductList = (params?: QueryParams) => {
    const urlSearchParams = new URLSearchParams({
        ...(params?.size && { size: String(params.size) }),
        ...(params?.page && { page: String(params.page) })
    })


    return useQuery<Paginated<Product>>({
        queryKey: ["productList", params.size, params.page],
        queryFn: () => fetcher(urlSearchParams),
        staleTime: 5000 * 60,
    });
};
