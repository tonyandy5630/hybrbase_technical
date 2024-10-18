export type ResponseAPI<Data> = {
  message?: string;
  data?: Data;
};

export type SuccessResponse<Data> = {
  message?: string;
  data: Data;
  totalRecord?: number;
};

export type ErrorResponse<Data> = {
  message?: string;
  data?: Data;
};
