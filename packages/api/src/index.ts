import express from "express";
import { createDataSource } from "pokedraft-types";
import { exit } from "process";

const db = createDataSource({
  logging: false,
});
try {
  await db.initialize();
} catch (error) {
  console.error("Could not connect to database.");
  console.error(error);
  exit(1);
}
console.log("Connected to database!");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
