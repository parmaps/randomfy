import React, { useState } from "react";
import FeatureItem from "./FeatureItem";
import styles from '../../styles/Form.module.scss'
import { OPTIONS_FEATURES } from "./OptionsData";

type Props = {};

const Features: React.FC = (props: Props) => {
  const [features, setFeatures] = useState(OPTIONS_FEATURES);

  return (
    <div>
      <ul className={styles.featuresList}>
        {features.map((feature) => (
          <FeatureItem key={feature.value} feature={feature} />
        ))}
      </ul>
    </div>
  );
};

export default Features;
