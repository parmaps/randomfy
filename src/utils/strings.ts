import { GenreObject, OptionsValues } from "@/types/form";
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

export const mapOptionsValuesToStrings = async (
  genresOptionsList: OptionsValues[]
) => {
  const genres = genresOptionsList.map((genreObject) => genreObject.value);
  return genres.join(",");
};
