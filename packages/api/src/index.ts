import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes/index";
import { db } from "./db";
import { exit } from "process";
import { sendError } from "./utils/errors";
import cors from "cors";
import config from "./utils/config";

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

  // Body parser
  app.use(express.json());

  app.use(
    cors({
      origin: config.WEB_URL,
    })
  );

  // Error handler
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    return sendError(res, 500, err);
  });

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
