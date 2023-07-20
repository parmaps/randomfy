import { RecommendationParams } from "@/types/form";
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
        const formInputs: RecommendationParams = JSON.parse(req.body)
        await createSearch(req, res, formInputs);
      } catch (error) {
        console.error("Error handling POST request:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    //   case "GET":
    //     try {
    //       // TODO 17/7 Handle GET request logic here (await getSearch)...
    //       res.status(200).json({ message: "GET request handled" });
    //     } catch (error) {
    //       console.error("Error handling GET request:", error);
    //       res.status(500).json({ error: "Internal server error" });
    //     }
    //     break;

    default:
      res.status(405).json({ error: "Method not allowed" });
      break;
  }
}
