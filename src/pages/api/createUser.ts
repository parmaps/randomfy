import User from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let error: string;
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
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
