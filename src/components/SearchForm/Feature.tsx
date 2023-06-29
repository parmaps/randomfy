import React from "react";
import styles from "../../styles/Feature.module.scss";
import {
  FeatureOptions,
  FeatureOptions2,
  FormValues,
  OptionsValues,
} from "@/types/form";
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

  const feature_min = `features.${feature.value}_min`;
  const feature_max = `features.${feature.value}_max`;

  return (
    <>
      <li className={styles.featureRow}>
        <label className={styles.field} htmlFor={`${feature.value}-${index}`}>
          {feature.label}
        </label>
        <input
          {...register!(feature_min as keyof FormValues)}
          type="number"
          defaultValue="0"
          id={`${feature.value}-min`}
          min={0}
          max={100}></input>
        <input
          {...register!(feature_max as keyof FormValues)}
          type="number"
          defaultValue="100"
          id={`${feature.value}-max`}
          min="0"
          max="100"></input>
      </li>
      {lastItem ? "" : <hr className={styles.divider}></hr>}
    </>
  );
};

export default FeatureItem;
