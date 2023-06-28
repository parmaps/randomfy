// TODO 22/6 -> refactor <fieldset></fieldset> de SearchForm aca para parametrizar

import React from "react";
import styles from "../../styles/Fieldset.module.scss";
import { Inter } from "@next/font/google";
import Select from "./Select";
import { OptionsValues } from "@/types/form";
import Features from "./Features";
import useFetchGenres from "@/hooks/useFetchGenres";

type Props = {
  legendText: string;
  optionsList: OptionsValues[];
  component: string;
};
const inter = Inter({ subsets: ["latin"] });

const Fieldset = ({ legendText, optionsList, component }: Props) => {
  const { genres, isLoading, error } = useFetchGenres();

  const isComponent = (componentType: string) => component === componentType;

  const artistsComponent = isComponent("SelectArtists") && (
    <Select optionsList={optionsList} isCreatable={true} />
  );
  const genresComponent = isComponent("SelectGenres") && genres && (
    <Select optionsList={genres} isCreatable={true} />
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
