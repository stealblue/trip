import { combineReducers } from "redux";

import { all } from "redux-saga/effects";
import RegisterMod from "./RegisterMod";
import LoginMod from "./LoginMod";
import WriteMod from "./WriteMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
});

export function* rootSaga() {
  yield all([WriteMod()]);
}

export default rootReducer;
