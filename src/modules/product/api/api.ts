import { api } from "@/config";
import type { Product } from "@/types";
import type { ProductsResponse } from "@/types/response";

export const fetchProduct = async (productId: string) => {
  return await api.get<Product>(`/products/${productId}`).then((r) => r.data);
};

export const fetchProductsByCategory = async (category: string) => {
  return await api
    .get<ProductsResponse>(`/products/category/${category}`)
    .then((r) => r.data);
};
