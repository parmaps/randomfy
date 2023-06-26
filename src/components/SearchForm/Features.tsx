import React, { useState } from "react";
import FeatureItem from "./Feature";
import styles from "../../styles/Features.module.scss";
import { OPTIONS_FEATURES } from "./OptionsData";

type Props = {};

const Features = (props: Props) => {
  const [features, setFeatures] = useState(OPTIONS_FEATURES);

  return (
    <div className={styles.featuresBody}>
      <div className={styles.minMaxRow}>
        <p id={styles.min}>Min</p>
        <p id={styles.max}>Max</p>
      </div>
      <ul className={styles.featuresList}>
        {/* TODO 26/6 refactor logic */}
        {features.map((feature, index, arr) => (
          <FeatureItem
            key={feature.value}
            feature={feature}
            index={index}
            len={arr.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default Features;
