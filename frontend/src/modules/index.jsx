import { combineReducers } from "redux";

import { all } from "redux-saga/effects";
import RegisterMod from "./RegisterMod";
import LoginMod from "./LoginMod";
import WriteMod from "./WriteMod";
import ChatMod from "./ChatMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  ChatMod,
});

export function* rootSaga() {
  yield all([WriteMod()]);
}

export default rootReducer;
