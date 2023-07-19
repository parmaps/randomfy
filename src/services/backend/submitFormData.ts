import { FormValues } from "@/types/form";
import { mapOptionsValuesToStrings } from "@/utils/strings";

export async function submitFormData(formData: FormValues) {
  const { artists, genres, features } = formData;
  const mappedGenres = await mapOptionsValuesToStrings(genres);
  console.log(mappedGenres);
}
