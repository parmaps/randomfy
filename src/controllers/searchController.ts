import Search from "@/models/Search";
import { getArtistIdByName } from "@/services/spotify/getArtistIdByName";
import { getRecommendations } from "@/services/spotify/getRecommendations";
import { getTrackIdByName } from "@/services/spotify/getTrackIdByName";
import { RecommendationParams } from "@/types/form";
import { NextApiRequest, NextApiResponse } from "next";

export async function createSearch(
  req: NextApiRequest,
  res: NextApiResponse,
  recommendationParams: RecommendationParams
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { artist, track } = req.body;
    // TODO 17/7 armar funcion para pedir access token a DB
    const accessToken =
      "BQChzj_wm-elMxN5aoeVo-8psvR9pbdSnBKniQOJNFxURhbASIleFUQzJ60IY_oa2zIQuq1YPlO_dHzGUCJgFJcbZAWJQvZG_FkVhB3Nm4j-kbbTgPkuV-SK-1oiRTi2JPNndJg_R2WWfB-QdoLdLAGP1ccj2076V7ua384lWNFk9QIvBeuNN2QWYfTIdqpDpSiK0ERfW6EXzGhtoO0s7IS6Sh5DbDh1Gnm7zqOldtHf7-uhCmwgTX6G3blDJeglF9B--Ej34DBO8g";
    const artistType = "artist";
    const artistData = await getArtistIdByName(artist, artistType, accessToken);

    const trackType = "track";
    const trackData = await getTrackIdByName(track, trackType, accessToken);

    // const seedArtists = artistData.artistId;
    const recommendationData = await getRecommendations(recommendationParams);

    console.log("recommendation data (from controller): ", recommendationData);

    res.status(200).json({ artistData, trackData });

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
