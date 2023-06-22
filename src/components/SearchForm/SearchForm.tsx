import React from "react";
import SearchRow from "./SearchRow";
import { Inter } from "@next/font/google";
import styles from "../../styles/Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@/types/form";
import AddRow from "./AddRow";
import Select from "./Select";
import { OPTIONS_ARTISTS, OPTIONS_FEATURES, OPTIONS_GENRES } from "./OptionsData";

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
          <Select optionsList={OPTIONS_ARTISTS} isCreatable={true}/>
          {/* <SearchRow
            register={register}
            errors={errors}
            field={"artists"}
            placeholder="Add some Artists..."
          />
          <AddRow /> */}
          {/* <SearchRow
            register={register}
            errors={errors}
            field={"search-artists"}
            placeholder="Your Artists"
          /> */}
        </div>
      </fieldset>

      <fieldset className={styles.genres}>
        <legend className={inter.className}>Genres</legend>
        <div className={styles.row}>
          <Select optionsList={OPTIONS_GENRES} isCreatable={false}/>
          {/* <SearchRow
            register={register}
            errors={errors}
            field={"genres"}
            placeholder="Add some Genres..."
          />
          <AddRow />
          <SearchRow
            register={register}
            errors={errors}
            field={"search-genres"}
            placeholder="Your Genres"
          /> */}
        </div>
      </fieldset>

      <fieldset className={styles.features}>
        <legend className={inter.className}>Audio Features</legend>
        <div className={styles.row}>
          <Select optionsList={OPTIONS_FEATURES} isCreatable={false}/>
          {/* <SearchRow
            register={register}
            errors={errors}
            field={"features"}
            placeholder="Add some Features..."
          /> */}
          {/* <AddRow /> */}
          {/* <SearchRow
            register={register}
            errors={errors}
            field={"search-features"}
            placeholder="Your Features"
          /> */}
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
