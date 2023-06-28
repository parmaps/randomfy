import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import styles from "../../styles/Select.module.scss";
import { OptionsValues } from "@/types/form";
import useFetchGenres from "@/hooks/useFetchGenres";

type Props = {
  optionsList: OptionsValues[],
  isCreatable: boolean
};


const Select = ({optionsList, isCreatable}: Props) => {
 
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState(optionsList);
  const { genres, isLoading, error } = useFetchGenres();

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
