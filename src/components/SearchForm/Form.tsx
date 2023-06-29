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
    register,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => console.warn(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${styles.searchMenu} ${inter.className}`}>
      <Fieldset
        legendText="Artists"
        component="SelectArtists"
        element={"artists"}
        optionsList={OPTIONS_ARTISTS}
        control={control}
        errors={errors}
      />
     
      <Fieldset
        legendText="Genres"
        component="SelectGenres"
        element={"genres"}
        optionsList={OPTIONS_GENRES}
        control={control}
        errors={errors}
      />

      <Fieldset
        legendText="Features"
        component="Features"
        element={"features"}
        optionsList={OPTIONS_FEATURES}
        control={control}
        register={register}
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
