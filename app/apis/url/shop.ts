import { SERVER_API } from ".";

export const GET_PRODUCTS_API_URL = SERVER_API + "/Products";

export const GET_PRODUCT_DETAIL_API_URL = (id: string) =>
  SERVER_API + "/Products/" + id;
