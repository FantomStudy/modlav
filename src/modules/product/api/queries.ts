import { queryOptions, useQuery } from "@tanstack/react-query";

import { fetchProduct, fetchProductsByCategory } from "./api";

export const fetchProductQuery = (productId: string) =>
  queryOptions({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
  });

export const useProductsByCategory = (category: string) =>
  useQuery({
    queryKey: ["product-by-category", category],
    queryFn: () => fetchProductsByCategory(category),
    select: (s) => s.products,
  });
