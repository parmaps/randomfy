import React from "react";
import styles from "../../styles/Fieldset.module.scss";
import { Inter } from "next/font/google";
import Select from "./Select";
import { FormValues, OptionsValues } from "@/types/form";
import Features from "./Features";
import { FieldPath, UseFormRegister } from "react-hook-form";
import { OPTIONS_GENRES } from "./OptionsData";

type Props = {
  legendText: string;
  optionsList: OptionsValues[];
  component: string;
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
  errors,
}: Props) => {
  // const genres = OPTIONS_GENRES;

  const isComponent = (componentType: string) => component === componentType;

  const artistsComponent = isComponent("SelectArtists") && (
    <Select optionsList={optionsList} isCreatable={true} element={element} />
  );
  const genresComponent = isComponent("SelectGenres") && optionsList && (
    <Select optionsList={optionsList} isCreatable={true} element={element} />
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
