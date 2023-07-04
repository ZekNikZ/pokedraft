import express from "express";
import { routes } from "./routes/index";
import { db } from "./db";
import { exit } from "process";

async function main(): Promise<void> {
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

  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

  for (const [path, router] of Object.entries(routes)) {
    app.use(path, router);
  }

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
