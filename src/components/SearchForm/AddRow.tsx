import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "../../styles/Form.module.scss";

type Props = {};

const AddRow = (props: Props) => {
  
  const handleClick = (event: any) => {
    console.log(event)
  }

  return <AiFillPlusCircle title="add row" className={styles.addBtn} onClick={handleClick}/>;
};

export default AddRow;
