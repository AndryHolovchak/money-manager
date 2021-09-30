import { all } from "redux-saga/effects";
import { historySaga } from "./historySaga";

export default function* rootSaga() {
  yield all([historySaga()]);
}
