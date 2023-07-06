import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/user";

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const ruben = await User.create({
      spotifyUsername: "el ruben",
      spotifyId: "asc1as56",
      email: "ruben@hotmail.com",
    });
    res.status(201).json(ruben);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
