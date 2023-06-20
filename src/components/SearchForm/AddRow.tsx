import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "../../styles/Form.module.scss"

type Props = {
};

const AddRow = (props: Props) => {
  return <AiFillPlusCircle title="add row" className={styles.addBtn} />;
};

export default AddRow;
