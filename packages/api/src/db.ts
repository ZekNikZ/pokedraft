import { Draft, createDataSource } from "pokedraft-types";

export const db = createDataSource({
  logging: false,
});

export const draftRepository = db.getRepository(Draft);
