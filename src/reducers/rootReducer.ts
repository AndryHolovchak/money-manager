import { combineReducers } from "redux";
import historyReducer from "./historyReducer";

const rootReducer = combineReducers({
  history: historyReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
