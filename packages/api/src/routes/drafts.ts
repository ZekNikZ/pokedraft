import { Router } from "express";
import { Draft } from "pokedraft-types";
import { draftRepository } from "../db";

export const draftsRouter = Router();

draftsRouter.get("/", async (req, res) => {
  res.send(await draftRepository.find());
});

draftsRouter.post("/", async (req, res) => {
  res.send(await draftRepository.save(new Draft()));
});
