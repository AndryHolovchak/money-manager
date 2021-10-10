import classNames from "classnames";
import React from "react";
import { useHistory } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { selectQuickPayments } from "../../reducers/userReducer";
import { QuickPaymentData } from "../../types/common";
import { AmountUI } from "../amountUI/AmountUI";
import Icon from "../icon/Icon";
import { QuickPayment } from "../quickPayment/QuickPayment";

import styles from "./QuickPaymentsList.module.sass";

export interface QuickPaymentsListProps {
  className?: string;
}

export const QuickPaymentsList = ({ className }: QuickPaymentsListProps) => {
  const quickPayments = useAppSelector(selectQuickPayments);

  const finalClassName = classNames([styles.quick_payments_list, className]);

  return (
    <div className={finalClassName}>
      {quickPayments.map((data, i) => (
        <QuickPayment data={data} key={i} />
      ))}
      <AddQuickPaymentItem />
    </div>
  );
};

const AddQuickPaymentItem = () => {
  const history = useHistory();

  return (
    <div
      className={styles.add_quick_payment_item}
      onClick={() => history.push("/add-quick-payment")}
    >
      <Icon
        name="plus-square"
        className={styles.add_quick_payment_item__icon}
      />
      <span className={styles.add_quick_payment_item__title}>
        Add quick payment
      </span>
    </div>
  );
};
