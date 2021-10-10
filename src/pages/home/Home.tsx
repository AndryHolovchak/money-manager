import React from "react";
import { useAppSelector } from "../../app/hooks";
import { HistroyList } from "../../components/historyList/HistoryList";
import { Layout } from "../../components/layout/Layout";
import { QuickPaymentsList } from "../../components/quickPaymentsLlist/QuickPaymentsList";
import {
  selectTotalExpenses,
  selectTotalIncome,
} from "../../reducers/chartReducer";

import styles from "./Home.module.sass";

export const Home = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <BasicChartInfo />
        <HistroyList />
        <QuickPaymentsList className={styles.home__quick_payments} />
      </div>
    </Layout>
  );
};

const BasicChartInfo = () => {
  const totalIncome = useAppSelector(selectTotalIncome);
  const totalExpenses = useAppSelector(selectTotalExpenses);

  return (
    <div className={styles.basic_chart_info}>
      <span className={styles.basic_chart_info__expenses}>
        -{totalExpenses.value}
      </span>
      <span className={styles.basic_chart_info__balance}>
        {+totalIncome.value + +totalExpenses.value}
      </span>
      <span className={styles.basic_chart_info__income}>
        +{totalIncome.value}
      </span>
    </div>
  );
};
