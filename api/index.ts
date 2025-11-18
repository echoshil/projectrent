import serverless from "serverless-http";
import { createServer } from "../server/index.ts";

let handler;

async function getHandler() {
  if (!handler) {
    const app = await createServer();
    handler = serverless(app);
  }
  return handler;
}

export default async function (req, res) {
  const handle = await getHandler();
  return handle(req, res);
}

