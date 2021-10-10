import { useState } from "react";

export interface UseInputResult {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (initValue: string = ""): UseInputResult => {
  const [value, setValue] = useState(initValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};
