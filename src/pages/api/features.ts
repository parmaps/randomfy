import { NextApiRequest, NextApiResponse } from "next";
import createFeature from "@/controllers/featureController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        await createFeature(req, res);
        res.status(201).json({ message: "Feature created successfully" });
      } catch (error) {
        console.error("Error creating feature:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    default:
      res.status(405).json({ error: "Method not allowed" });
      break;
  }
}
