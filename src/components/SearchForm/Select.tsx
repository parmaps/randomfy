import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import styles from "../../styles/Form.module.scss";
import { OptionsValues } from "@/types/form";

type Props = {
  optionsList: OptionsValues[],
  isCreatable: boolean
};

// TODO agregar props para parametrizar -> options

const Select = ({optionsList, isCreatable}: Props) => {
  const OPTIONS_LIST = [
    { label: "Rock", value: "rock" },
    { label: "Alternative", value: "alternative" },
    { label: "Samba", value: "samba" },
    { label: "IDM", value: "IDM" },
    { label: "Electronic", value: "electronic" },
    { label: "Reggae 🍎", value: "reggae" },
    { label: "Tangerine", value: "tangerine" },
    { label: "Pineapple", value: "pineapple" },
    { label: "Peach", value: "peach" },
  ];

  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState(optionsList);

  return (
    <div>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        className={styles.select}
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Genres"}
        isCreatable={isCreatable}
      />
    </div>
  );
};

export default Select;
