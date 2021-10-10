import React from "react";
import { HistroyList } from "../../components/historyList/HistoryList";
import { Layout } from "../../components/layout/Layout";

import styles from "./Chart.module.sass";

export const Chart = () => {
  return (
    <Layout>
      <div className={styles.chart}>
        <HistroyList />
      </div>
    </Layout>
  );
};
