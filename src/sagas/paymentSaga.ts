import moment from "moment";
import { Amount, CategoryData, Payment } from "./../types/common.d";
import { put, takeEvery } from "redux-saga/effects";
import { addPayment } from "../reducers/historyReducer";
import {
  updateTotalExpenses,
  updateTotalIncome,
} from "../reducers/chartReducer";

export const ADD_PAYMENT = "payment/add/cs";

export interface AddPaymentPayload {
  amount: Amount;
  category: CategoryData;
}

interface AddPayment {
  payload: AddPaymentPayload;
  type: typeof ADD_PAYMENT;
}

export const addPaymentAction = (payload: AddPaymentPayload): AddPayment => ({
  type: ADD_PAYMENT,
  payload,
});

function* addPaymentWatcher({ payload }: AddPayment) {
  const { amount, category } = payload;

  const payment: Payment = {
    amount,
    category,
    timestamp: moment().toISOString(),
  };

  if (+payment.amount.value > 0) {
    yield put(updateTotalIncome(payment.amount));
  } else {
    yield put(updateTotalExpenses(payment.amount));
  }

  yield put(addPayment(payment));
}

export function* paymentSaga() {
  yield takeEvery(ADD_PAYMENT, addPaymentWatcher);
}
