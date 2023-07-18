import { fetchSpotifyData } from "@/utils/spotifyAPI";

export async function getTrackIdByName(
  track: string,
  type: string,
  accessToken: string
) {
  try {
    const trackData = await fetchSpotifyData(track, type, accessToken);
    const { tracks } = trackData;
    const foundTrack = tracks.items[0];
    if (!foundTrack) {
      throw new Error("Track not found");
    }
    const artistName: string = foundTrack.artists[0].name;
    const trackName: string = foundTrack.name;
    const trackID: string = foundTrack.id;

    return { artistName, trackName, trackID };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
