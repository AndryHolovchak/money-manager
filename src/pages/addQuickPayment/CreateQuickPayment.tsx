import React from "react";
import { Input } from "../../components/input/Input";
import { Layout } from "../../components/layout/Layout";
import { useInput } from "../../hooks/useInput";
import styles from "./CreateQuickPayment.module.sass";

export const CreateQuickPayment = () => {
  const nameInput = useInput();
  const amountInput = useInput();

  return (
    <Layout withBackButton withMenu={false}>
      <div className={styles.create_quick_payment}>
        <span className={styles.create_quick_payment__title}>
          Create quick payment
        </span>
        <Input {...nameInput} placeholder="Name" />
        <div className={styles.create_quick_payment__amount_container}>
          <Input {...amountInput} placeholder="Amount" type="number" />
        </div>
      </div>
    </Layout>
  );
};
