import t from "io-ts";
import { PathReporter } from "io-ts/PathReporter";
import { isLeft } from "fp-ts/Either";
import { Request, Response } from "express";
import { sendError } from "./errors";

export type ValidationError = {
  $err: "validation";
  error: string;
};

export type ValidationResult<T> = ValidationError | T;

export function validate<A, O, I>(data: I, validator: t.Type<A, O, I>): ValidationResult<A> {
  const decoded = validator.decode(data);
  if (isLeft(decoded)) {
    return {
      $err: "validation",
      error: PathReporter.report(decoded).join("\n"),
    };
  }

  return decoded.right;
}

export function isValidationError<T>(result: ValidationResult<T>): result is ValidationError {
  return (result as ValidationError).$err !== undefined;
}

export function validateRequest<A, O, I>(req: Request, res: Response, validator: t.Type<A, O, I>): A | null {
  const body = req.body;

  const decoded = validate(body, validator);
  if (isValidationError(decoded)) {
    sendError(res, 400, decoded.error);
    return null;
  }

  return decoded;
}
