import { api } from "@/config";
import type { ProductsResponse } from "@/types/response";

interface FetchAllProductsParams {
  pageParam: number;
}

export const fetchAllProducts = async (params: FetchAllProductsParams) => {
  return await api
    .get<ProductsResponse>(`/products?limit=20&skip=${params.pageParam}`)
    .then((r) => r.data);
};
