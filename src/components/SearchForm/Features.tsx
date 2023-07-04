import React, { useContext, useState } from "react";
import FeatureItem from "./Feature";
import styles from "../../styles/Features.module.scss";
import { OPTIONS_FEATURES } from "./OptionsData";
import { FieldPath, UseFormRegister } from "react-hook-form";
import { FormValues } from "@/types/form";
import FormContext, { FormContextType } from "@/store/form-context";

type Props = {
  element: FieldPath<FormValues>;
  register?: UseFormRegister<FormValues>;
};

const Features = ({ element }: Props) => {
  const [features, setFeatures] = useState(OPTIONS_FEATURES);

  const formCtx: FormContextType | undefined = useContext(FormContext);
  if (!formCtx) {
    // TODO 30/6 ver como manejar; podria armar una funcion para esto (check formCtx)
    // Handle the case when the context value is undefined
    return null; // or return a loading state or fallback component
  }
  const { sharedData } = formCtx;

  const mapFeatureItem = () => {
    return features.map((feature, index, arr) => (
      <FeatureItem
        key={feature.value}
        feature={feature}
        index={index}
        len={arr.length}
        element={element}
        register={sharedData.registerState}
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
