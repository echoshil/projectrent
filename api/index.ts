import { createServer } from "../server/index";

import type { VercelRequest, VercelResponse } from "@vercel/node";

let app: any = null;

async function getApp() {

if (!app) {

app = await createServer();

}

return app;

}

export default async function handler(req: VercelRequest, res: VercelResponse) {

const app = await getApp();

return app(req, res);

}