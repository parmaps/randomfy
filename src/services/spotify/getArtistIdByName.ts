import { fetchSpotifyData } from "@/utils/spotifyAPI";

export async function getArtistIdByName(
  artist: string,
  type: string,
  accessToken: string
) {
  try {
    const artistData = await fetchSpotifyData(artist, type, accessToken);
    const { artists } = artistData;
    const foundArtist = artists.items[0];
    if (!foundArtist) {
      throw new Error("Artist not found");
    }
    const artistName: string = foundArtist.name;
    const artistId: string = foundArtist.id;

    return { artistName, artistId };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
