import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod from "./RegisterMod";
import LoginMod from "./LoginMod";
import CreateRoomMod, { createRoomSaga2 } from "./chat/CreateRoomMod";
import WriteMod from "./board/WriteMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  CreateRoomMod,
});

export function* rootSaga() {
  yield all([WriteMod(), createRoomSaga2()]);
}

export default rootReducer;
