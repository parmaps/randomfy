import { NextApiRequest, NextApiResponse } from "next";
import { createBulkGenres, getGenres } from "@/controllers/genreController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        await getGenres(req, res);
      } catch (error) {
        console.error("Error fetching genres:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    case "POST":
      try {
        await createBulkGenres(req, res);
        res.status(201).json({ message: "Genres created successfully" });
      } catch (error) {
        console.error("Error creating genres:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    default:
      res.status(405).json({ error: "Method not allowed" });
      break;
  }
}
