import React from "react";
import styles from "../../styles/Feature.module.scss";
import { FormValues, OptionsValues } from "@/types/form";
import { Control, FieldPath, UseFormRegister } from "react-hook-form";

type Props = {
  feature: OptionsValues;
  index: number;
  len: number;
  control: Control<FormValues>;
  register?: UseFormRegister<FormValues>;
  element: FieldPath<FormValues>;
};

const FeatureItem = ({ feature, index, len, register, element }: Props) => {
  const isLastItem = (item: number, length: number) => {
    return item + 1 === length;
  };
  const lastItem = isLastItem(index, len);

  return (
    <>
      <div className={styles.featureRow}>
        <li className={styles.field}>{feature.label}</li>
        <input
          {...register!(element)}
          type="number"
          placeholder="0"
          min="0"
          max="100"></input>
        <input
          {...register!(element)}
          type="number"
          placeholder="100"
          min="0"
          max="100"></input>
      </div>
      {lastItem ? "" : <hr className={styles.divider}></hr>}
    </>
  );
};

export default FeatureItem;
