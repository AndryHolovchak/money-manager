import { Payment } from "./../types/common.d";
import { put, takeEvery } from "redux-saga/effects";
//@ts-ignore
import data from "../data";
import { setPayments } from "../reducers/historyReducer";

export const LOAD_PAYMENTS = "history/load/payments";

export const loadPaymentsAction = () => ({ type: LOAD_PAYMENTS });

function* loadPaymentsWatcher() {}

//TODO: Move to payment saga
export function* historySaga() {
  yield takeEvery(LOAD_PAYMENTS, loadPaymentsWatcher);
}
