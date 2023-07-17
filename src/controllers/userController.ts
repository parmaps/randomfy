import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";

export async function createUser(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { spotifyUsername, spotifyId, email } = req.body;

    console.log("Creating user...");
    const newUser = await User.create({
      spotifyUsername,
      spotifyId,
      email,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
