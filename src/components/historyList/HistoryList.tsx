import classNames from "classnames";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectPayments } from "../../reducers/historyReducer";
import { Payment } from "../../types/common";
import Icon from "../icon/Icon";

import styles from "./HistroyList.module.sass";

export const HistroyList = () => {
  const payments = useAppSelector(selectPayments);
  const [sortedPayments, setSortedPayments] = useState<Payment[]>([]);

  useEffect(() => {
    let allPayments = [...payments];
    allPayments.sort(
      (a, b) => moment(a.timestamp).unix() - moment(b.timestamp).unix()
    );
    setSortedPayments(allPayments);
  }, [payments]);

  if (!sortedPayments.length) {
    return <></>;
  }

  return (
    <div className={styles.history_list}>
      {sortedPayments.map((payment, i) => (
        <ListItem payment={payment} key={i} />
      ))}
    </div>
  );
};

interface ListItemProps {
  payment: Payment;
}

const ListItem = ({ payment }: ListItemProps) => {
  const amountClassName = classNames([
    styles.list_item__amount,
    { [styles["list_item__amount--income"]]: +payment.amount.value > 0 },
    { [styles["list_item__amount--outcome"]]: +payment.amount.value < 0 },
  ]);

  return (
    <div className={styles.list_item}>
      <Icon name={payment.category.icon} className={styles.list_item__icon} />
      <span className={styles.list_item__category}>
        {payment.category.name}
      </span>
      <span className={amountClassName}>{Math.abs(+payment.amount.value)}</span>
    </div>
  );
};
