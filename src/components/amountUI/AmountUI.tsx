import classNames from "classnames";
import React from "react";
import { Amount } from "../../types/common";

import styles from "./AmountUI.module.sass";

export interface AmountProps {
  amount: Amount;
  className?: string;
}

export const AmountUI = ({ amount, className }: AmountProps) => {
  const isIncome = +amount.value > 0;

  const finalClassName = classNames([
    styles.amount,
    className,
    { [styles["amount--income"]]: isIncome },
    { [styles["amount--outcome"]]: !isIncome },
  ]);

  return (
    <span className={finalClassName}>
      {isIncome ? "+" + amount.value : amount.value}
    </span>
  );
};
