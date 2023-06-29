import React, { useState } from "react";
import { MultiSelect, Option } from "react-multi-select-component";
import styles from "../../styles/Select.module.scss";
import { FormValues, OptionsValues } from "@/types/form";
import { Control, Controller, FieldPath } from "react-hook-form";

type Props = {
  optionsList: OptionsValues[];
  isCreatable: boolean;
  control: Control<FormValues>;
  element: FieldPath<FormValues>;
};

const Select = ({ optionsList, isCreatable, control, element }: Props) => {
  const [options, setOptions] = useState(optionsList);

  return (
    <div>
      <Controller
        control={control}
        name={element}
        rules={{ required: false }}
        defaultValue={[]}
        render={({ field }) => {
          return (
            <MultiSelect
              className={styles.select}
              options={options}
              value={field.value as unknown as Option[]}
              labelledBy={"Genres"}
              onChange={field.onChange}
              isCreatable={isCreatable}
            />
          );
        }}
      />
    </div>
  );
};

export default Select;
