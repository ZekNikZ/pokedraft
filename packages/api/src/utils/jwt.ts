import { User } from "pokedraft-types";
import jwt from "jsonwebtoken";
import { config } from "./config";

export function buildJwtFromUser(user: User) {
  return jwt.sign(user, config.JWT_TOKEN, {
    expiresIn: "7d",
    issuer: config.JWT_ISSUER,
    audience: config.JWT_AUDIENCE,
  });
}
