import { GenreObject, OptionsValues, RecommendationParams } from "@/types/form";
export const capitalizeWord = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const mapGenresToOptionsValues = async (
  genresObjectList: GenreObject[]
) => {
  return genresObjectList.map(
    (genreObject): OptionsValues => ({
      label: capitalizeWord(genreObject.genre),
      value: genreObject.genre,
    })
  );
};

export const mapOptionsValuesToString = async (
  optionsList: OptionsValues[]
): Promise<string> => {
  const values = optionsList.map((object) => object.value);
  return values.join(",");
};

export const mapQueryParams = (params: RecommendationParams) => {
  return new URLSearchParams({
    seed_artists: params.seed_artists,
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
