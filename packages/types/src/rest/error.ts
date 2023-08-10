export type ResponseError = {
  $err: number;
  error: string;
  message: string;
};

export type ResponseErrorOr<A> = ResponseError | A;
