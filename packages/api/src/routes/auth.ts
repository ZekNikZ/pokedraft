import { Router } from "express";
import { buildJwtFromUser } from "../utils/jwt";
import { userRepository } from "../db";
import { sendError } from "../utils/errors";
import { validateRequest } from "../utils/validate";
import { DiscordLoginRequestValidator } from "pokedraft-types";

export const authRouter = Router();

authRouter.post("/login/discord", async (req, res) => {
  // Validate body
  const body = validateRequest(req, res, DiscordLoginRequestValidator);
  if (!body) {
    return;
  }

  // TODO: Validate Discord claim

  // Find existing user
  const user = await userRepository.findOne({
    where: {
      discordId: body.discordId,
    },
  });

  // Create user if they don't exist
  if (!user) {
    return sendError(res, 500, "We can't create users yet.");
  }

  // Build and send JWT
  return res.send({
    jwt: buildJwtFromUser(user),
  });
});
