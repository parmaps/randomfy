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
    const { artist, track } = req.body;
    // TODO 17/7 armar funcion para pedir access token a DB
    const accessToken =
      "BQBzXij4O8USJ-inXxxmS_gA_pjw5Zq7A6tkn7-vu4Ta-oKBCpGxdn7NISlqEKlVVE2ewJekny5rh-6pXLkQBGWZgQPCpsu4pxrvhgjnGXl2Wrjfyh9HZ1lzn-EyxYCFOohOXAhXYRgIH7rNWJT6Pj3i66pQQOAVkKxP7qS3LcNgsUXtOLW5aesj0Hq_bu9TPShKs_hvZXyJ-5byu2BO9kxiN3jFQCkVRUlrhdnWBInqcsEigtEE3gjjwpKDNpov2uiVg2S3VjMvQg";
    const artistType = "artist";
    const artistData = await getArtistIdByName(artist, artistType, accessToken);

    const trackType = "track";
    const trackData = await getTrackIdByName(track, trackType, accessToken);

    // const seedArtists = artistData.artistId;
    const recommendations = await getRecommendations(formInputs, accessToken);

    console.log("recommendation data (from controller): ", recommendations);

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
