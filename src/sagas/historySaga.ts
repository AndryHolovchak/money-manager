import { Expsense, Income } from "./../types/common.d";
import { put, takeEvery } from "redux-saga/effects";
//@ts-ignore
import data from "../data";
import { addIncome, setExpenses, setIncomes } from "../reducers/historyReducer";

export const LOAD_INCOMES = "history/load/incomes";
export const LOAD_EXSPENSES = "history/load/expenses";

export const loadIncomesAction = () => ({ type: LOAD_INCOMES });
export const loadExpensesAction = () => ({ type: LOAD_EXSPENSES });

function* loadIncomesWatcher() {
  const incomes: Income[] = data.incomes;

  yield put(setIncomes(incomes));
}

function* loadExpensesWatcher() {
  const expenses: Expsense[] = data.expenses;

  yield put(setExpenses(expenses));
}

export function* historySaga() {
  yield takeEvery(LOAD_INCOMES, loadIncomesWatcher);
  yield takeEvery(LOAD_EXSPENSES, loadExpensesWatcher);
}
