import { combineReducers } from "redux";
import { all } from "redux-saga/effect";
import WriteModule from "./WriteModule";

const rootReducer = combineReducers({
  WriteModule,
});

export function* rootSaga() {
  yield all([WriteModule()]);
}

export default rootReducer;
