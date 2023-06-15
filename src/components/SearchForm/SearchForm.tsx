import React from "react";
import SearchRow from "./SearchRow";
import styles from "../../styles/Form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues } from "@/types/form";

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
      <SearchRow register={register} errors={errors} />
      <input type="submit" />
    </form>
  );
};

export default SearchForm;
