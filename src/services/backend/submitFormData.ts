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
  const jsonBody = JSON.stringify(formInputs);

  const fetchURL = "http://localhost:3000/api/search";

  const fetchOptions = { method: "POST", body: jsonBody };

  try {
    const response = await fetch(fetchURL, fetchOptions);
    console.log("response desde submitFormData: ", response);

    if (!response.ok) {
      const errorJson = await response.json();
      const { error } = errorJson;
      console.log(error);
      // throw new Error(
      //     //   `Failed to fetch data from api/search: Status ${response.status} -> ${error}.`
      //     // );
    }
  } catch (error) {
    console.error("Error handling fetch request:", error);
  }
}
