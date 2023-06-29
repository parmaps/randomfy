import React from "react";
import { FieldPath, UseFormRegister } from "react-hook-form";
import { Inter } from "@next/font/google";
import styles from "../../styles/Form.module.scss";
import { FormValues } from "@/types/form";

const inter = Inter({ subsets: ["latin"] });
type Props = {
  register: UseFormRegister<FormValues>;
  errors: any;
  element: FieldPath<FormValues>;
  placeholder: string;
};

const SearchRow = ({ register, errors, element, placeholder }: Props) => {
  return (
    <>
      <input
        className={`${styles.fieldBtn} ${inter.className}`}
        {...register(element, { required: true })}
        placeholder={placeholder}
      />

      {/* errors will return when field validation fails  */}
      {/* TODO 28/6 ver si uso    */}
      {/* {errors[field] && <span className={`${styles.error} ${inter.className}`}>Required Field</span>} */}
    </>
  );
};

export default SearchRow;
