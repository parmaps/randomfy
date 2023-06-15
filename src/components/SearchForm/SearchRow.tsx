import React from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import styles from "../../styles/Form.module.scss";
import { FormValues } from "@/types/form";

type Props = { register: UseFormRegister<FormValues>; errors: any };


const SearchRow = ({ register, errors }: Props) => {
  console.log(errors)
  return (
    <>
      <input
        className={styles.searchRow}
        {...register("artist", { required: true })}
        placeholder="Artist Name"
      />    
     
      {/* errors will return when field validation fails  */}
      {/* TODO 14/6 agregar className    */}
      {errors.artist && <span>Required Field</span>}
    </>
  );
};

export default SearchRow;
