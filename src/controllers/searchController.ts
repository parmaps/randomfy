import Search from "@/models/Search";
import { getArtistIdByName } from "@/services/spotify/getArtistIdByName";
import { getRecommendations } from "@/services/spotify/getRecommendations";
import { getTrackIdByName } from "@/services/spotify/getTrackIdByName";
import { NextApiRequest, NextApiResponse } from "next";

export async function createSearch(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { artist, track } = req.body;
    // TODO 17/7 armar funcion para pedir a DB
    const accessToken =
      "BQBWqtuhnxpJye_i36flOZXV24XcLBZHyycgZHROmUBV0Hmzzdb8YM1bQajQ2taM5tihkvRvnmTTLOKp4xb6-Ec8pf2mVMLr0ayAFIqLY_XxGzGg3esMPY1_1IO4eG8G_CzcJEje810sFaJ-30ylxxBrzWMxBmBZLor71PHEp0roqWAcSOgR-voDdGQHGNPjiVcr6G2vIUrduTJlI7XQLPtLoH8MKVuD1L0aRVcahbjCKDUaCBmikh3CNX6wj8DUgqUR6qMbZbA6Rg";
    const artistType = "artist";
    const artistData = await getArtistIdByName(artist, artistType, accessToken);

    const trackType = "track";
    const trackData = await getTrackIdByName(track, trackType, accessToken);

    const seedArtists = artistData.artistId;
    const seedGenres = "";
    const seedTracks = "";
    const minValence = 0.9;
    const recommendationData = await getRecommendations(
      seedArtists,
      seedGenres,
      seedTracks,
      minValence,
      accessToken
    );

    console.log("recommendation data: ", recommendationData);

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
