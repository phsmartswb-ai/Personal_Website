import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleVisitors } from "./routes/visitors";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API router
  const apiRouter = express.Router();

  apiRouter.get("/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  apiRouter.get("/demo", handleDemo);
  apiRouter.get("/visitors", handleVisitors);
  apiRouter.post("/visitors", handleVisitors);

  // Support both local development (/api/...) and Netlify serverless function prefix (/.netlify/functions/api/...)
  app.use("/api", apiRouter);
  app.use("/.netlify/functions/api", apiRouter);

  return app;
}
