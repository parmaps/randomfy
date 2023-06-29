import React, { useState } from "react";
import FeatureItem from "./Feature";
import styles from "../../styles/Features.module.scss";
import { OPTIONS_FEATURES } from "./OptionsData";
import { Control, FieldPath, UseFormRegister } from "react-hook-form";
import { FormValues } from "@/types/form";

type Props = {
  control: Control<FormValues>;
  register?: UseFormRegister<FormValues>;
  element: FieldPath<FormValues>;
};

const Features = ({ control, register, element }: Props) => {
  const [features, setFeatures] = useState(OPTIONS_FEATURES);

  const mapFeatureItem = () => {
    return features.map((feature, index, arr) => (
      <FeatureItem
        key={feature.value}
        feature={feature}
        index={index}
        len={arr.length}
        control={control}
        register={register}
        element={element}
      />
    ));
  };

  const featureItem = mapFeatureItem();

  return (
    <div className={styles.featuresBody}>
      <div className={styles.minMaxRow}>
        <p id={styles.min}>Min</p>
        <p id={styles.max}>Max</p>
      </div>
      <ul className={styles.featuresList}>{featureItem}</ul>
    </div>
  );
};

export default Features;
