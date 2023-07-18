import { Router } from "express";
import { Draft } from "pokedraft-types";
import { draftRepository } from "../db";
import { sendError } from "../utils/errors";
import { tryParseInt } from "../utils/numbers";

export const draftsRouter = Router();

draftsRouter.get("/", async (req, res) => {
  return res.send(await draftRepository.find());
});

draftsRouter.post("/", async (req, res) => {
  const draft = new Draft();
  return res.send(await draftRepository.save(draft));
});

draftsRouter.get("/:draftId", async (req, res) => {
  // Get draft ID from URL
  const draftId = tryParseInt(req.params.draftId);
  if (!draftId) {
    return sendError(res, 400, "Invalid draft ID");
  }

  // Get existing draft
  const existingObject = await draftRepository.findOne({ where: { draftId: parseInt(req.params.draftId) } });
  if (!existingObject) {
    return sendError(res, 404, "Draft not found");
  }

  return res.send(existingObject);
});

draftsRouter.put("/:draftId", async (req, res) => {
  // Get draft ID from URL
  const draftId = tryParseInt(req.params.draftId);
  if (!draftId) {
    return sendError(res, 400, "Invalid draft ID");
  }

  // Get existing draft
  const existingObject = await draftRepository.findOne({ where: { draftId } });
  if (!existingObject) {
    return sendError(res, 404, "Draft not found");
  }

  // Check request body
  const body: Draft = req.body;
  if (draftId !== body.draftId) {
    return sendError(res, 400, "Draft body does not have matching draft ID");
  }

  // Save new draft
  const newDraft: Draft = { ...existingObject };

  newDraft.draftName = body.draftName;

  return res.send(await draftRepository.save(newDraft));
});
