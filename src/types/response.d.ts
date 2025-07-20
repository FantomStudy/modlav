import type { Product } from "./product";

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
