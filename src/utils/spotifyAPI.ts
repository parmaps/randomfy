import { RecommendationParams } from "@/types/form";

export async function fetchSpotifySearchData(
  searchParam: string,
  type: string,
  accessToken: string
) {
  console.log("searchParam: ", searchParam, "type: ", type);

  const spotifyURL = "https://api.spotify.com/v1/search";

  const fetchURL = `${spotifyURL}?q=${encodeURIComponent(
    searchParam
  )}&type=${type}`;

  const response = await fetch(fetchURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // API Response Handling: If response status is not in the success range (200-299), throw new error returning its code
  if (!response.ok) {
    const errorJson = await response.json();
    const { error } = errorJson;
    throw new Error(
      `Failed to fetch data from Spotify API: Status ${error.status} -> ${error.message}.`
    );
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error("Failed to parse JSON response from Spotify API");
  }
}

export async function fetchSpotifyRecommendations(
  recommendationParams: RecommendationParams
) {
  console.log("recommendation params: ", recommendationParams);

  const spotifyURL = "https://api.spotify.com/v1/recommendations";

  const queryParams = new URLSearchParams({
    seed_artists: recommendationParams.seedArtists,
    seed_genres: recommendationParams.seedGenres,
    seed_tracks: recommendationParams.seedTracks,
    min_valence: recommendationParams.minValence.toString(),
  });

  const fetchURL = `${spotifyURL}?${queryParams.toString()}`;
  console.log("\n fetchURL: ", fetchURL);

  const response = await fetch(fetchURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${recommendationParams.accessToken}`,
    },
  });

  if (!response.ok) {
    const errorJson = await response.json();
    const { error } = errorJson;
    throw new Error(
      `Failed to fetch data from Spotify API: Status ${error.status} -> ${error.message}.`
    );
  }

  try {
    return await response.json();
  } catch (error) {
    throw new Error("Failed to parse JSON response from Spotify API");
  }
}
