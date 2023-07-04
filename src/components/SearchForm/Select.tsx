import React, { useContext, useState } from "react";
import { MultiSelect, Option } from "react-multi-select-component";
import styles from "../../styles/Select.module.scss";
import { FormValues, OptionsValues } from "@/types/form";
import { Controller, FieldPath, FormState } from "react-hook-form";
import FormContext, { FormContextType } from "@/store/form-context";

type Props = {
  optionsList: OptionsValues[];
  isCreatable: boolean;
  element: FieldPath<FormValues>;
};

const Select = ({ optionsList, isCreatable, element }: Props) => {
  const [options, setOptions] = useState(optionsList);

  const formCtx: FormContextType | undefined = useContext(FormContext);
  if (!formCtx) {
    // TODO 30/6 ver como manejar; podria armar una funcion para esto (check formCtx)
    // Handle the case when the context value is undefined
    return null; // or return a loading state or fallback component
  }

  const { sharedData } = formCtx;

  return (
    <div>
      <Controller
        name={element}
        control={sharedData.controlState}
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
