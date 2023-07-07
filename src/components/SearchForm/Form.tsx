import React from "react";
import { Inter } from "@next/font/google";
import styles from "../../styles/Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues, SharedData } from "@/types/form";
import {
  OPTIONS_ARTISTS,
  OPTIONS_FEATURES,
  OPTIONS_GENRES,
} from "./OptionsData";
import Fieldset from "./Fieldset";
import FormContext from "@/store/form-context";
import useFetchGenresRandomfy from "@/hooks/useFetchGenresRandomfy";

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

  const sharedData: SharedData = {
    registerState: register,
    controlState: control,
  };

  const { genres, isLoading, error } = useFetchGenresRandomfy();

  return (
    <FormContext.Provider value={{ sharedData }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${styles.searchMenu} ${inter.className}`}>
        <Fieldset
          legendText="Artists"
          component="SelectArtists"
          element={"artists"}
          optionsList={OPTIONS_ARTISTS}
          errors={errors}
        />

        <Fieldset
          legendText="Genres"
          component="SelectGenres"
          element={"genres"}
          optionsList={genres}
          errors={errors}
        />

        <Fieldset
          legendText="Features"
          component="Features"
          element={"features"}
          optionsList={OPTIONS_FEATURES}
          register={register}
          errors={errors}
        />

        <input
          type="submit"
          className={`${styles.submitBtn} 
        ${inter.className}`}
        />
      </form>
    </FormContext.Provider>
  );
};

export default Form;
