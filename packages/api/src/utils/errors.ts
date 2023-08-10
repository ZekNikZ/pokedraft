import { Response } from "express";
import { ResponseError } from "pokedraft-types";

const statusCodes = {
  400: "Bad Request",
  404: "Not Found",
  500: "Internal Server Error",
} as const;

export type StatusCode = keyof typeof statusCodes;

export function sendError(res: Response, statusCode: StatusCode, message: string) {
  const error: ResponseError = {
    $err: statusCode,
    error: `${statusCode} ${statusCodes[statusCode]}`,
    message: message,
  };
  return res.send(error);
}
