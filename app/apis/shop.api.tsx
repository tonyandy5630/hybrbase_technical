import http from "../utils/http";
import { GET_PRODUCT_API_URL } from "./url/shop";
import { Product } from "@/types/product";

export const getProductsApi = (
  index: number,
  filter: string = "",
  sortBy: string = ""
) =>
  http.get<Array<Product>>(
    GET_PRODUCT_API_URL +
      `?page=${index}&limit=${6}&sortBy=${sortBy}&order=asc&field_name=${filter}`
  );
