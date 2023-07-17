import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/controllers/userController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        await createUser(req, res);
        res.status(201).json({ message: "User created successfully" });
      } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;

    // case "GET":
    //   try {
    //     // TODO 17/7 Handle GET request logic here (await getUser)...
    //     res.status(200).json({ message: "GET request handled" });
    //   } catch (error) {
    //     console.error("Error handling GET request:", error);
    //     res.status(500).json({ error: "Internal server error" });
    //   }
    //   break;

    default:
      res.status(405).json({ error: "Method not allowed" });
      break;
  }
}
