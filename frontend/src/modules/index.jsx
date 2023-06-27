import { combineReducers } from "redux";

import { all } from "redux-saga/effects";
import RegisterMod from "./RegisterMod";
import LoginMod from "./LoginMod";
import WriteMod from "./board/WriteMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
