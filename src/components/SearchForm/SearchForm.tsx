import React from "react";
import SearchRow from "./SearchRow";
import { Inter } from "@next/font/google";
import styles from "../../styles/Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@/types/form";
import AddRow from "./AddRow";

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.searchMenu}>
      <fieldset className={styles.artists}>
        <legend className={inter.className}>Artists</legend>
        <div className={styles.row}>
          <SearchRow
            register={register}
            errors={errors}
            field={"artists"}
            placeholder="Choose some Artists..."
          />
          <AddRow />
        </div>
      </fieldset>

      <fieldset className={styles.genres}>
        <legend className={inter.className}>Genres</legend>
        <div className={styles.row}>
          <SearchRow
            register={register}
            errors={errors}
            field={"genres"}
            placeholder="Choose some Genres..."
          />
          <AddRow />
        </div>
      </fieldset>

      <fieldset className={styles.features}>
        <legend className={inter.className}>Audio Features</legend>
        <div className={styles.row}>
          <SearchRow
            register={register}
            errors={errors}
            field={"features"}
            placeholder="Choose some Features..."
          />
          <AddRow />
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
