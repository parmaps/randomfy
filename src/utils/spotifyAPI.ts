import { RecommendationParams } from "@/types/form";
import { mapQueryParams } from "./mappings";

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
  recommendationParams: RecommendationParams,
  accessToken: string
) {
  console.log("reco params en fetchSpotifyReco: ", recommendationParams);

  console.log("seed artists: ", recommendationParams.seed_artists);

  const spotifyURL = "https://api.spotify.com/v1/recommendations";

  const queryParams = mapQueryParams(recommendationParams);

  const fetchURL = `${spotifyURL}?${queryParams}`;
  console.log("\n fetchURL: ", fetchURL);
  const fetchOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(fetchURL, fetchOptions);

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
