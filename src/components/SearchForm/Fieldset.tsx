import React from "react";
import styles from "../../styles/Fieldset.module.scss";
import { Inter } from "@next/font/google";
import Select from "./Select";
import { FormValues, OptionsValues } from "@/types/form";
import Features from "./Features";
import useFetchGenres from "@/hooks/useFetchGenres";
import { Control, FieldPath, UseFormRegister } from "react-hook-form";
import { OPTIONS_GENRES } from "./OptionsData";

type Props = {
  legendText: string;
  optionsList: OptionsValues[];
  component: string;
  control: Control<FormValues>;
  register?: UseFormRegister<FormValues>;
  element: FieldPath<FormValues>;
  errors: {};
};
const inter = Inter({ subsets: ["latin"] });

const Fieldset = ({
  legendText,
  optionsList,
  component,
  element,
  control,
  register,
  errors,
}: Props) => {
  // TODO 29/6 cambiado para evitar gatillar pedidos a la API de Spotify
  // const { genres, isLoading, error } = useFetchGenres();
  const genres = OPTIONS_GENRES;

  const isComponent = (componentType: string) => component === componentType;

  const artistsComponent = isComponent("SelectArtists") && (
    <Select
      optionsList={optionsList}
      isCreatable={true}
      element={element}
      control={control}
    />
  );
  const genresComponent = isComponent("SelectGenres") && genres && (
    <Select
      optionsList={genres}
      isCreatable={true}
      element={element}
      control={control}
    />
  );
  const featuresComponent = isComponent("Features") && (
    <Features element={element} control={control} register={register} />
  );

  return (
    <fieldset className={styles.fieldsets}>
      <legend className={inter.className}>{legendText}</legend>
      {/* {isLoading && <span>Loading...</span>} */}
      {artistsComponent}
      {genresComponent}
      {featuresComponent}
      {/* {genres && (
        <>
          {selectComponent}
          {featuresComponent}
        </>
      )} */}
    </fieldset>
  );
};

export default Fieldset;
