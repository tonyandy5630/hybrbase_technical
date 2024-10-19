import http from "../utils/http";
import { GET_PRODUCT_DETAIL_API_URL, GET_PRODUCTS_API_URL } from "./url/shop";
import { Product } from "@/types/product";

export const getProductsApi = (
  index: number,
  filter: string = "",
  sortBy: string = ""
) =>
  http.get<Array<Product>>(
    GET_PRODUCTS_API_URL +
      `?page=${index}&limit=${6}&sortBy=${sortBy}&order=asc&productType=${filter}`
  );

export const getProductDetailApi = (id: string) =>
  http.get<Product>(GET_PRODUCT_DETAIL_API_URL(id));
