import { combineReducers } from "redux";

import { all } from "redux-saga/effects";
import RegisterMod from "./RegisterMod";
import LoginMod from "./LoginMod";
import WriteMod from "./WriteMod";
import CreateRoomMod, { createRoomSaga2 } from "./chat/CreateRoomMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  CreateRoomMod,
  // ChatMod,
});

export function* rootSaga() {
  yield all([WriteMod(), createRoomSaga2()]);
}

export default rootReducer;
