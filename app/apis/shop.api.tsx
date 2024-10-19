import { ResponseAPI } from "@/types";
import http from "../utils/http";
import { GET_PRODUCT_API_URL } from "./url/shop";
import { Product } from "@/types/product";
import { PaginationType } from "@/types/pagination";

export const getProductsApi = (index: number) =>
  http.get<Array<Product>>(GET_PRODUCT_API_URL + `?page=${index}&limit=${6}`);
