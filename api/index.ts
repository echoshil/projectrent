import { createServer } from "../server/index.ts";

export default async function handler(req, res) {
  const app = await createServer();
  app(req, res);
}
