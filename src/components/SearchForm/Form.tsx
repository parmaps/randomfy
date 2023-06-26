import React from "react";
import { Inter } from "@next/font/google";
import styles from "../../styles/Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@/types/form";
import Select from "./Select";
import {
  OPTIONS_ARTISTS,
  OPTIONS_FEATURES,
  OPTIONS_GENRES,
} from "./OptionsData";
import Fieldset from "./Fieldset";

const inter = Inter({ subsets: ["latin"] });
type Props = {};

const SearchForm = (props: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.searchMenu} ${inter.className}`}>
      <Fieldset
        legendText="Artists"
        optionsList={OPTIONS_ARTISTS}
        component="Select"
      />

      <Fieldset
        legendText="Genres"
        optionsList={OPTIONS_GENRES}
        component="Select"
      />

      <Fieldset
        legendText="Features"
        optionsList={OPTIONS_GENRES}
        component="Features"
      />

      <input
        type="submit"
        className={`${styles.submitBtn} 
        ${inter.className}`}
      />
    </form>
  );
};

export default SearchForm;
