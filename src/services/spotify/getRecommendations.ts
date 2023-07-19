import { fetchSpotifyRecommendations } from "@/utils/spotifyAPI";

export async function getRecommendations(
  seedArtists: string,
  seedGenres: string,
  seedTracks: string,
  minValence: number,
  accessToken: string
) {

  try {
    const recommendationData = await fetchSpotifyRecommendations(
      seedArtists,
      seedGenres,
      seedTracks,
      minValence,
      accessToken
    );
    console.log("recommendation data: ", recommendationData);
    // if (!foundArtist) {
    //   throw new Error("Artist not found");
    // }

    // return { artistName, artistId };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
