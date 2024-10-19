import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from "axios";

class Http {
  instance: AxiosInstance;
  baseApi: string;
  constructor() {
    this.baseApi = process.env.NEXT_PUBLIC_MOCK_API ?? "";
    this.instance = axios.create({
      baseURL: this.baseApi,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          const data: any | undefined = error.response?.data;
          const message = data.message || error.message;
        }
        return Promise.reject(error);
      }
    );
  }
}
const http = new Http().instance;
export default http;
