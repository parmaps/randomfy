import { FormValues, RecommendationParams } from "@/types/form";
import { mapOptionsValuesToString } from "@/utils/strings";

export async function mapFormData(formData: FormValues) {
  const { artists, genres, features } = formData;
  const mappedArtists = await mapOptionsValuesToString(artists);
  const mappedGenres = await mapOptionsValuesToString(genres);
  return {
    seed_artists: mappedArtists,
    seed_genres: mappedGenres,
    ...features,
  };
}

export async function submitFormData(formInputs: RecommendationParams) {
  console.log("formInputs: ", formInputs);

  const fetchURL = "http://localhost:3000/api/search";
}
