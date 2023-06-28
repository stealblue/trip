import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod from "./RegisterMod";
import LoginMod from "./LoginMod";
import CreateRoomMod, { createRoomSaga2 } from "./chat/CreateRoomMod";
import WriteMod, { writeSaga } from "./board/WriteMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  CreateRoomMod,
});

export function* rootSaga() {
  yield all([writeSaga(), createRoomSaga2()]);
}

export default rootReducer;
