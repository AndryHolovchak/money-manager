import classNames from "classnames";
import React from "react";
import styles from "./Input.module.sass";

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
  [inputProps: string]: any;
}

export const Input = ({
  value,
  onChange,
  className,
  label,
  ...inputProps
}: InputProps) => {
  const finalClassName = classNames([styles.input, className]);

  return (
    <label>
      {label && <span className={styles.input__label_text}>{label}</span>}
      <input
        value={value}
        onChange={onChange}
        className={finalClassName}
        {...inputProps}
      />
    </label>
  );
};
