import { getGenres } from "@/controllers/genreController";
import { GenreObject, Genres, OptionsValues } from "@/types/form";
export const capitalizeWord = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const map = async (genresList: string[]) => {
  return genresList.map((genre) => ({
    label: capitalizeWord(genre),
    value: genre,
  }));
};

export const mapGenresToOptionsValues = async (genresObjectList: GenreObject[]) => {
  return genresObjectList.map((genreObject): Genres => ({
    label: capitalizeWord(genreObject.genre),
    value: genreObject.genre,
  }));

  // return genresList.map((genre) => ({
  //   label: capitalizeWord(genre),
  //   value: genre,
  // }));
};
