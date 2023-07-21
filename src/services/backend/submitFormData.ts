import { FormValues, RecommendationParams } from "@/types/form";
import { mapOptionsValuesToString } from "@/utils/mappings";

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
  const fetchURL = "http://localhost:3000/api/search";
  const jsonBody = JSON.stringify(formInputs);
  const fetchOptions = { method: "POST", body: jsonBody };

  try {
    const response = await fetch(fetchURL, fetchOptions);

    if (!response.ok) {
      const errorJson = await response.json();
      const { error } = errorJson;
      throw new Error(
        `Failed to fetch data from api/search: Status ${response.status} -> ${error}.`
      );
    }

    try {
      const data = await response.json();
      console.log("data from submitFormData: ", data);
      return data;
    } catch (error) {
      throw new Error("Failed to parse JSON response from api/search");
    }
  } catch (error) {
    console.error("Error handling fetch request:", error);
    throw error;
  }
}
