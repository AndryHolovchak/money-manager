import { combineReducers } from "redux";
import chartReducer from "./chartReducer";
import historyReducer from "./historyReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  history: historyReducer,
  chart: chartReducer,
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
