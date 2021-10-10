import { QuickPaymentData } from "./../types/common.d";
import { put, takeEvery } from "redux-saga/effects";
//@ts-ignore
import data from "../data";
import { setQuickPayments } from "../reducers/userReducer";

export const LOAD_QUICK_PAYMENTS = "user/load/quickPayments";

export const loadQuickPaymentsAction = () => ({ type: LOAD_QUICK_PAYMENTS });

function* loadQuickPaymentsWatcher() {
  const quickPayments: QuickPaymentData[] = data.user.quickPayments;
  yield put(setQuickPayments(quickPayments));
}

export function* userSaga() {
  yield takeEvery(LOAD_QUICK_PAYMENTS, loadQuickPaymentsWatcher);
}
