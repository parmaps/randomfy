import React from "react";
import { Inter } from "@next/font/google";
import styles from "../../styles/Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@/types/form";
import {
  OPTIONS_ARTISTS,
  OPTIONS_FEATURES,
  OPTIONS_GENRES,
} from "./OptionsData";
import Fieldset from "./Fieldset";
import SearchRow from "./SearchRow";

const inter = Inter({ subsets: ["latin"] });
type Props = {};

const Form = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.warn(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.searchMenu} ${inter.className}`}>
      <Fieldset
        legendText="Artists"
        optionsList={OPTIONS_ARTISTS}
        component="SelectArtists"
        control={control}
        element={"artists"}
        errors={errors}
      />
     
      <Fieldset
        legendText="Genres"
        optionsList={OPTIONS_GENRES}
        component="SelectGenres"
        control={control}
        element={"genres"}
        errors={errors}
      />

      <Fieldset
        legendText="Features"
        optionsList={OPTIONS_FEATURES}
        component="Features"
        control={control}
        element={"features"}
        errors={errors}
      />

      <input
        type="submit"
        className={`${styles.submitBtn} 
        ${inter.className}`}
      />
    </form>
  );
};

export default Form;
