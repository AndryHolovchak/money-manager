import { all } from "redux-saga/effects";
import { chartSaga } from "./chartSaga";
import { historySaga } from "./historySaga";
import { paymentSaga } from "./paymentSaga";
import { userSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([historySaga(), chartSaga(), userSaga(), paymentSaga()]);
}
