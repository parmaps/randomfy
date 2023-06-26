// TODO 22/6 -> refactor <fieldset></fieldset> de SearchForm aca para parametrizar

import React from "react";
import styles from "../../styles/Form.module.scss";
import { Inter } from "@next/font/google";
import Select from "./Select";
import { OptionsValues } from "@/types/form";
import Features from "./Features";

type Props = {
  legendText: string;
  optionsList: OptionsValues[];
  component: string;
};
const inter = Inter({ subsets: ["latin"] });

// Params
const options = "Options List";

const Fieldset = ({ legendText, optionsList, component }: Props) => {
  // TODO 26/6 -> refactor Business Logic
  const isComponent = (componentType: string) => component === componentType;

  const selectComponent = isComponent("Select") && (
    <Select optionsList={optionsList} isCreatable={true} />
  );
  const featuresComponent = isComponent("Features") && <Features />;

  return (
    <fieldset className={styles.artists}>
      <legend className={inter.className}>{legendText}</legend>
      {selectComponent}
      {featuresComponent}
    </fieldset>
  );
};

export default Fieldset;
