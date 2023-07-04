import { createDataSource } from "pokedraft-types";
import { exit } from "process";

const db = createDataSource();
try {
  await db.initialize();
  exit(1);
} catch (error) {
  console.error("Could not connect to database.");
  console.error(error);
}
console.log("Connected to database!");
