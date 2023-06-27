import React, { useState } from "react";
import FeatureItem from "./Feature";
import styles from "../../styles/Features.module.scss";
import { OPTIONS_FEATURES } from "./OptionsData";
import useFetchGenres from "@/hooks/useFetchGenres";

type Props = {};

const Features = (props: Props) => {
  const [features, setFeatures] = useState(OPTIONS_FEATURES);  

  {/* TODO 27/6 confirmar si esta ok refactor logic */}
  const mapFeatureItem = () => {
    return features.map((feature, index, arr) => (
      <FeatureItem
        key={feature.value}
        feature={feature}
        index={index}
        len={arr.length}
      />
    ));
  };

  const featureItem = mapFeatureItem()

  return (
    <div className={styles.featuresBody}>
      <div className={styles.minMaxRow}>
        <p id={styles.min}>Min</p>
        <p id={styles.max}>Max</p>
      </div>
      <ul className={styles.featuresList}>
        {/* {features.map((feature, index, arr) => (
          <FeatureItem
            key={feature.value}
            feature={feature}
            index={index}
            len={arr.length}
          />
        ))} */}
        {featureItem}
      </ul>
    </div>
  );
};

export default Features;
