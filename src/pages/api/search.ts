import { NextApiRequest, NextApiResponse } from "next";
import { createSearch } from "@/controllers/searchController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        await createSearch(req, res);
        res.status(201).json({ message: "Search created successfully" });
      } catch (error) {
        console.error("Error creating search:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
      break;
  }
}
