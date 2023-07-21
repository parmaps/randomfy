import {
  Features,
  GenreObject,
  OptionsValues,
  RecommendationParams,
} from "@/types/form";
export const capitalizeWord = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const mapGenresToOptionsValues = (genresObjectList: GenreObject[]) => {
  return genresObjectList.map(
    (genreObject): OptionsValues => ({
      label: capitalizeWord(genreObject.genre),
      value: genreObject.genre,
    })
  );
};

export const mapOptionsValuesToString = (optionsList: OptionsValues[]) => {
  const values = optionsList.map((object) => object.value);
  return values.join(",");
};

export const mapQueryParams = (params: RecommendationParams) => {
  return new URLSearchParams({
    seed_artists: params.seed_artists,
    seed_genres: params.seed_genres || "",
    // seed_tracks: recommendationParams.seed_tracks, // TODO 19/7 ver si lo agrego en V2.0
    min_popularity: params.popularity_min,
    min_energy: params.energy_min,
    min_danceability: params.danceability_min,
    min_instrumentalness: params.instrumentalness_min,
    min_valence: params.valence_min,
    min_tempo: "0", // TODO 21/7 sacar tempo de opciones
    max_popularity: params.popularity_max, //
    max_energy: params.energy_max,
    max_danceability: params.danceability_max,
    max_instrumentalness: params.instrumentalness_max,
    max_valence: params.valence_max,
    max_tempo: "240", // TODO 21/7 sacar tempo de opciones
  });
};

export const scaleToZeroOne = (stringNumber: string): string => {
  const number = parseFloat(stringNumber);
  if (isNaN(number) || number < 0 || number > 100) {
    throw new Error("Input must be a number between 0 and 100");
  }
  const transformedValue = number / 100;
  return transformedValue.toString();
};

export const scaleFeatures = (features: Features) => {
  const newFeatures = { ...features };
  let feature: keyof Features;
  for (feature in features) {
    if (feature !== "popularity_max" && feature !== "popularity_min" ) {
      let value = features[feature];
      const newValue = scaleToZeroOne(value);
      newFeatures[feature] = newValue;
    }
  }
  return newFeatures;
};
