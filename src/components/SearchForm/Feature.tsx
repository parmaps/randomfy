import React from "react";
import styles from "../../styles/Form.module.scss";
import { OptionsValues } from "@/types/form";

type Props = { feature: OptionsValues; index: number; len: number };

const FeatureItem = ({ feature, index, len }: Props) => {
  const isLastItem = (item: number, length: number) => {
    return item + 1 === length;
  };
  const lastItem = isLastItem(index, len);

  return (
    <>
      <div className={styles.featureRow}>
        <li className={styles.field}>{feature.label}</li>
        <input type="number"  placeholder="0" min="0" max="100"></input>
        <input type="number"  placeholder="100" min="0" max="100"></input>
      </div>
      {lastItem ? "" : <hr className={styles.divider}></hr>}
    </>
  );
};

export default FeatureItem;
