import { Response } from "express";

const statusCodes = {
  400: "Bad Request",
  404: "Not Found",
  500: "Internal Server Error",
} as const;

export type StatusCode = keyof typeof statusCodes;

export function sendError(res: Response, statusCode: StatusCode, message: string) {
  return res.send({
    error: `${statusCode} ${statusCodes[statusCode]}`,
    message: message,
  });
}
