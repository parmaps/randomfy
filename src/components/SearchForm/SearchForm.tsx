import React from "react";
import SearchRow from "./SearchRow";
import { Inter } from "@next/font/google";
import styles from "../../styles/Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@/types/form";
import AddRow from "./AddRow";
import Select from "./Select";
import {
  OPTIONS_ARTISTS,
  OPTIONS_FEATURES,
  OPTIONS_GENRES,
} from "./OptionsData";
import Features from "./Features";

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
      <fieldset className={styles.artists}>
        <legend className={inter.className}>Artists</legend>
        <div className={styles.row}>
          <Select optionsList={OPTIONS_ARTISTS} isCreatable={true} />
        </div>
      </fieldset>

      <fieldset className={styles.genres}>
        <legend className={inter.className}>Genres</legend>
        <div className={styles.row}>
          <Select optionsList={OPTIONS_GENRES} isCreatable={false} />
        </div>
      </fieldset>

      <fieldset className={styles.features}>
        <legend className={inter.className}>Audio Features</legend>
        <div className={styles.row}>
          <Features />
        </div>
      </fieldset>
      
      <input
        type="submit"
        className={`${styles.submitBtn} 
        ${inter.className}`}
      />
    </form>
  );
};

export default SearchForm;
