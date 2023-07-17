import Feature from "@/models/Feature";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createFeature(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const { featureName, description} = req.body;
    console.log("Creating feature...");
    const newFeature = await Feature.create({
      feature: featureName,
      description
    });
    res.status(201).json(newFeature);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
