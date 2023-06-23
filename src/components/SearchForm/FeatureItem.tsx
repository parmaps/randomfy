import { OptionsValues } from "@/types/form";
import React from "react";
import styles from "../../styles/Form.module.scss";

type Props = { feature: OptionsValues; i: number; len: number };

const FeatureItem = ({ feature, i, len }: Props) => {
  const isLastItem = (item: number, length: number) => {
    return item + 1 === length;
  };
  const lastItem = isLastItem(i, len);

  return (
    <>
      <li className={styles.fieldBtn}>{feature.label}</li>
      {lastItem ? "" : <hr className={styles.divider}></hr>}
    </>
  );
};

export default FeatureItem;
