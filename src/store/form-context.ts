import { FormValues, SharedData } from "@/types/form";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface FormContextType {
  sharedData: SharedData;
}


const FormContext = React.createContext<FormContextType | undefined>(undefined);

export default FormContext;
