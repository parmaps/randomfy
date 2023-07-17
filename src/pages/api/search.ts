import { NextApiRequest, NextApiResponse } from "next";
import { createSearch } from "@/controllers/searchController";

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") await createSearch(req, res);
  else res.status(405).json({ error: "Method not allowed" });
}
