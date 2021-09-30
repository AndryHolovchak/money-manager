import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Icon from "../../components/icon/Icon";
import { Layout } from "../../components/layout/Layout";
import { selectExpenses, selectIncomes } from "../../reducers/historyReducer";
import { loadExpensesAction, loadIncomesAction } from "../../sagas/historySaga";

export const Home = () => {
  const dispatch = useAppDispatch();
  const incomes = useAppSelector(selectIncomes);
  const expenses = useAppSelector(selectExpenses);

  useEffect(() => {
    dispatch(loadIncomesAction());
    dispatch(loadExpensesAction());
  }, []);

  return (
    <Layout>
      <div>
        {incomes.map((item, i) => (
          <span key={i}>{item.amount.value + item.amount.currency}</span>
        ))}
        <br />
        <br />
        {expenses.map((item, i) => (
          <>
            <span>category:{item.category}</span>
            <span key={i}>{item.amount.value + item.amount.currency}</span>
            <br />
          </>
        ))}
      </div>
    </Layout>
  );
};
