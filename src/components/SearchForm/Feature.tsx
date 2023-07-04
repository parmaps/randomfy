import React from "react";
import styles from "../../styles/Feature.module.scss";
import {
  FeatureOptionsMaxString,
  FeatureOptionsMin,
  FeatureOptionsMinString,
  FormValues,
  OptionsValues,
} from "@/types/form";
import { Control, FieldPath, UseFormRegister } from "react-hook-form";

type Props = {
  feature: OptionsValues;
  index: number;
  len: number;
  element: FieldPath<FormValues>;
  register?: UseFormRegister<FormValues>;
};

const FeatureItem = ({ feature, index, len, register }: Props) => {
  const isLastItem = (item: number, length: number) => {
    return item + 1 === length;
  };
  const lastItem = isLastItem(index, len);

  // const feature_min = `features.${feature.value}_min`;

  const value_min = `${feature.value}_min`;
  const value_max = `${feature.value}_max`;
  const feature_min = `features.${value_min}` as FeatureOptionsMinString;
  const feature_max = `features.${value_max}` as FeatureOptionsMaxString;

  return (
    <>
      <li className={styles.featureRow}>
        <label className={styles.field} htmlFor={`${feature.value}-${index}`}>
          {feature.label}
        </label>
        <input
          {...register!(feature_min)}
          type="number"
          defaultValue={0}
          id={`${feature.value}-min`}
          min={0}
          max={100}></input>
        <input
          {...register!(feature_max)}
          type="number"
          defaultValue={100}
          id={`${feature.value}-max`}
          min="0"
          max="100"></input>
      </li>
      {lastItem ? "" : <hr className={styles.divider}></hr>}
    </>
  );
};

export default FeatureItem;
