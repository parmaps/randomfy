import { OptionsValues } from "@/types/form";
import React from "react";
import styles from "../../styles/Form.module.scss"

type Props = { feature: OptionsValues };

const FeatureItem = ({ feature }: Props) => {
  return <li className={styles.fieldBtn}>{feature.label}</li>;
};

export default FeatureItem;
