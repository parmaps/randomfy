import createBulkGenres from "@/controllers/genreController";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") await createBulkGenres(req, res);
  else res.status(405).json({ error: "Method not allowed" });
}
