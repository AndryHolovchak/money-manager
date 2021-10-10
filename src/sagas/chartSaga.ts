import { put, takeEvery } from "redux-saga/effects";
//@ts-ignore
import data from "../data";
import { setTotalExpense, setTotalIncome } from "../reducers/chartReducer";
import { Amount } from "../types/common";

export const LOAD_BASIC_CHART_INFO = "chart/load/basicInfo";

export const loadBasicChartInfoAction = () => ({ type: LOAD_BASIC_CHART_INFO });

function* loadBasicChartInfoWatcher() {}

export function* chartSaga() {
  yield takeEvery(LOAD_BASIC_CHART_INFO, loadBasicChartInfoWatcher);
}
