import React from "react";
import SearchRow from "./SearchRow";
import { Inter } from "@next/font/google";
import styles from "../../styles/Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@/types/form";

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
        <SearchRow
          register={register}
          errors={errors}
          field={"artistOne"}
          placeholder="Artist"
        />
        <SearchRow
          register={register}
          errors={errors}
          field={"artistTwo"}
          placeholder="Artist"
        />
      </fieldset>
      <fieldset className={styles.genres}>
        <legend>Genres</legend>
        <SearchRow
          register={register}
          errors={errors}
          field={"genreOne"}
          placeholder="Genre"
        />
      </fieldset>
      <input type="submit" className={`${styles.submitBtn} ${inter.className}`}/>
    </form>
  );
};

export default SearchForm;
