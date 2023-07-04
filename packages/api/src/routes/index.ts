import { Router } from "express";
import { draftsRouter } from "./drafts";

export const routes: Record<string, Router> = {
  "/drafts": draftsRouter,
};
