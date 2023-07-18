import Search from "@/models/Search";
import { getArtistIdByName } from "@/services/spotify/getArtistIdByName";
import { getTrackIdByName } from "@/services/spotify/getTrackIdByName";
import { NextApiRequest, NextApiResponse } from "next";

export async function createSearch(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // TODO 17/7 Search artists (to get id)
    const { artist, track } = req.body;
    const accessToken =
      "BQCefL_csEtfLN7nxO1EEes5juP7zCXIGl1Q4W9moRPcBNy-r4JTYdOfI1JK3B3BxHynVMQiawzfJSWW8uFSLrSqS3-YahnnnVZIVECsT33R8lkZKyikyEYaJqcDDkjFxPoWmg0KIfWzClWtXngzXcxvD3hywJ5xH_f676wRbe70dXdzjiaLIektro_y0v8fK4woC0xzKFUEjQ1RGrI4xJsvjwRUTfEet3SuQ9kuFs0bQJwQEx1oeyP50fHQmCyfi8DEoebnYMF8qw";
    const artistType = "artist";
    const artistData = await getArtistIdByName(artist, artistType, accessToken);

    const trackType = "track";
    const trackData = await getTrackIdByName(track, trackType, accessToken);

    res.status(200).json({ artistData, trackData });

    // TODO 17/7 Post search to Spotify (to get id) https://api.spotify.com/v1/recommendations?

    // const {userId, searchData} = req.body;
    // TODO 17/7 -> userID deberia venir de getUserById o algo asi (buscar el mail actual logeado y devolver su id)
    // console.log("Creating search...");
    // const newSearch = await Search.create({
    //   userId,
    //   searchData,
    // });
    // res.status(201).json(newSearch);
    // res.status(201).json({ message: "Search created successfully", data: newSearch });
  } catch (error: any) {
    console.log("Error desde searchController:", error);
    res.status(500).json({ error: error.message });
  }
}
