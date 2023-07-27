import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";

type SpotifyUserBody = {
  user: SpotifyUser;
  userTokens: SpotifyUserTokens;
};

type SpotifyUser = {
  display_name: string;
  id: string;
  email: string;
};

type SpotifyUserTokens = {
  accessToken: string;
  refreshToken: string;
};

export async function createUser(
  req: NextApiRequest,
  res: NextApiResponse,
  body: SpotifyUserBody
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const user: SpotifyUser = body.user;
    const { email } = user;
    const spotifyId = user.id;
    const spotifyUsername = user.display_name;
    const tokens: SpotifyUserTokens = body.userTokens;
    const { accessToken, refreshToken } = tokens;

    console.log("Creating user...");
    const newUser = await User.create({
      spotifyUsername,
      spotifyId,
      email,
      accessToken,
      refreshToken,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
