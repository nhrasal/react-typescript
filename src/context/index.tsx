import { createContext, useContext, useState } from 'react';

type ContextProps = {
  data: any;
  setFormValues: Function;
};

export const FormContext = createContext({} as ContextProps);

export default function FormProvider({ children }) {
  const [data, setData] = useState<any>();

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values
    }));
  };

  return <FormContext.Provider value={{ data, setFormValues }}>{children}</FormContext.Provider>;
}

export const useFormData = () => useContext(FormContext);
