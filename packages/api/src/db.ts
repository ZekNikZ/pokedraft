import { Draft, User, createDataSource } from "pokedraft-types";

export const db = createDataSource({
  logging: false,
});

export const draftRepository = db.getRepository(Draft);
export const userRepository = db.getRepository(User);
