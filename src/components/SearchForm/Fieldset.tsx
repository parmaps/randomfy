import React from "react";
import styles from "../../styles/Fieldset.module.scss";
import { Inter } from "@next/font/google";
import Select from "./Select";
import { FormValues, OptionsValues } from "@/types/form";
import Features from "./Features";
import useFetchGenres from "@/hooks/useFetchGenres";
import { Control, FieldPath, UseFormRegister } from "react-hook-form";

type Props = {
  legendText: string;
  optionsList: OptionsValues[];
  component: string;
  control: Control<FormValues>;
  element: FieldPath<FormValues>;
  errors: {};
};
const inter = Inter({ subsets: ["latin"] });

const Fieldset = ({
  legendText,
  optionsList,
  component,
  control,
  element,
  errors,
}: Props) => {
  const { genres, isLoading, error } = useFetchGenres();

  const isComponent = (componentType: string) => component === componentType;

  const artistsComponent = isComponent("SelectArtists") && (
    <Select
      optionsList={optionsList}
      isCreatable={true}
      control={control}
      element={element}
    />
  );
  const genresComponent = isComponent("SelectGenres") && genres && (
    <Select
      optionsList={genres}
      isCreatable={true}
      control={control}
      element={element}
    />
  );
  const featuresComponent = isComponent("Features") && <Features />;

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
