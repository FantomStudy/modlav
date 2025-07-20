import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchAllProducts } from "./api";

export const useProducts = () =>
  useInfiniteQuery({
    queryKey: ["items"],
    queryFn: fetchAllProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.products.length === 0) {
        return undefined;
      }

      return lastPageParam + lastPage.limit;
    },
    select: (s) => s.pages,
  });
