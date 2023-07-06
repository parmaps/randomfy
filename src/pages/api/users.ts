import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/controllers/userController";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") await createUser(req, res);
  // if (req.method === "POST") await getUser
  else res.status(405).json({ error: "Method not allowed" });
}
