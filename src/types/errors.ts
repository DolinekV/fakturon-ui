export type ErrorResponse<T> = {
  errors: {
    [key in keyof T]?: string;
  };
};
