import Search from "@/models/Search";
import { getArtistIdByName } from "@/services/spotify/getArtistIdByName";
import { getRecommendations } from "@/services/spotify/getRecommendations";
import { getTrackIdByName } from "@/services/spotify/getTrackIdByName";
import { RecommendationParams } from "@/types/form";
import { NextApiRequest, NextApiResponse } from "next";

export async function createSearch(
  req: NextApiRequest,
  res: NextApiResponse,
  formInputs: RecommendationParams
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    console.log("formInputs: ", formInputs);
    const seed_artists = formInputs.seed_artists || '""';
    console.log("seed artists: " + seed_artists);
    const seed_tracks = '""';

    // TODO 17/7 armar funcion para pedir access token a DB
    const accessToken = process.env.ACCESS_TOKEN as string;

    const artistType = "artist";
    const artistData = await getArtistIdByName(
      seed_artists,
      artistType,
      accessToken
    );

    // const trackType = "track";
    // const trackData = await getTrackIdByName(
    //   seed_tracks,
    //   trackType,
    //   accessToken
    // );

    const formInputsWithIds: RecommendationParams = {
      ...formInputs,
      seed_artists: artistData.artistId,
    };

    // const seedArtists = artistData.artistId;
    const recommendations = await getRecommendations(
      formInputsWithIds,
      accessToken
    );

    console.log("recommendation data (from controller): ", recommendations);

    res.status(200).json({ artistData });

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
