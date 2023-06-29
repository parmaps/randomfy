import React from "react";
import styles from "../../styles/Feature.module.scss";
import { FeatureOptions, FormValues, OptionsValues } from "@/types/form";
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

  // console.log("feature value: " + feature.value);
  // console.log("feature index: " + index);

  // const test: FeatureOptions = { popularity_min: 0, popularity_max: 100 };
  const indexString = index.toString();
  const dinamic_param = `features.${indexString}`;
  // console.log("dinamic_param", dinamic_param);
  const dinamic_param2 = "features.1";
  // console.log("dinamic param 2", dinamic_param2);
  const feature_param = "features.popularity_min";

  return (
    <>
      <li className={styles.featureRow}>
        <label className={styles.field} htmlFor={`${feature.value}-${index}`}>
          {feature.label}
        </label>
        <input
          {...register!(`${feature.value}_min`)}
          type="number"
          id={`${feature.value}-min`}
          placeholder="0"
          min="0"
          max="100"></input>
        <input
          {...register!(`${feature.value}_max`)}
          type="number"
          id={`${feature.value}-max`}
          placeholder="100"
          min="0"
          max="100"></input>
      </li>
      {lastItem ? "" : <hr className={styles.divider}></hr>}
    </>
  );
};

export default FeatureItem;
