import Search from "@/models/Search";
import { NextApiRequest, NextApiResponse } from "next";

export async function createSearch(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // TODO 17/7 Search artists (to get id)
    // TODO 17/7 Search tracks (to get id)
    // TODO 17/7 Post search to Spotify (to get id) https://api.spotify.com/v1/recommendations?

    
    // const {userId, searchData} = req.body;
    // TODO 17/7 -> userID deberia venir de getUserById o algo asi (buscar el mail actual logeado y devolver su id)
    // console.log("Creating search...");
    // const newSearch = await Search.create({
    //   userId,
    //   searchData,
    // });
    // res.status(201).json(newSearch);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Method not allowed" });
  }
}
