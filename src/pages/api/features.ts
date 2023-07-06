import createFeature from "@/controllers/featureController";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") await createFeature(req, res);
  else res.status(405).json({ error: "Method not allowed" });
}
