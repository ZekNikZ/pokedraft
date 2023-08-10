import { Router } from "express";
import { authRouter } from "./auth";
import { draftsRouter } from "./drafts";

export const routes: Record<string, Router> = {
  "/auth": authRouter,
  "/drafts": draftsRouter,
};
