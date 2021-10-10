import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { addPaymentAction } from "../../sagas/paymentSaga";
import { QuickPaymentData } from "../../types/common";
import { AmountUI } from "../amountUI/AmountUI";
import Icon from "../icon/Icon";

import styles from "./QuickPayment.module.sass";

export interface QuickPaymentProps {
  data: QuickPaymentData;
}

export const QuickPayment = ({ data }: QuickPaymentProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () =>
    dispatch(
      addPaymentAction({ amount: data.amount, category: data.category })
    );

  return (
    <div className={styles.quick_payment} onClick={handleClick}>
      <Icon
        name={data.category.icon}
        className={styles.quick_payment__category_icon}
      />
      <span className={styles.quick_payment__name}>{data.name}</span>
      <AmountUI amount={data.amount} />
    </div>
  );
};
