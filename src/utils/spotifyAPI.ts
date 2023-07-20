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

const mapQueryParams = (params: RecommendationParams) => {
  return new URLSearchParams({
    // seed_artists: recommendationParams.seed_artists,
    seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
    seed_genres: params.seed_genres || "",
    // seed_tracks: recommendationParams.seed_tracks, // TODO 19/7 ver si lo agrego en V2.0
    min_popularity: params.popularity_min, // TODO parsear a int, ver donde conviene
    min_energy: params.energy_min,
    min_danceability: params.danceability_min,
    min_instrumentalness: params.instrumentalness_min,
    min_valence: params.valence_min,
    min_tempo: params.tempo_min,
    max_popularity: params.popularity_max, // TODO parsear a int, ver donde conviene
    max_energy: params.energy_max,
    max_danceability: params.danceability_max,
    max_instrumentalness: params.instrumentalness_max,
    max_valence: params.valence_max,
    max_tempo: params.tempo_max,
  });
};

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
