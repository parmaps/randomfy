import React from "react";
import { SharedData } from "@/types/form";

export interface FormContextType {
  sharedData: SharedData;
}

const FormContext = React.createContext<FormContextType | undefined>(undefined);

export default FormContext;
