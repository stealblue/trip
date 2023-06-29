import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod, { registerSaga } from "./RegisterMod";
import LoginMod, { loginSaga } from "./LoginMod";
import CreateRoomMod, { createRoomSaga2 } from "./chat/CreateRoomMod";
import WriteMod, { writeSaga } from "./board/WriteMod";
import BoardListMod, { listSaga } from "./board/BoardListMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  CreateRoomMod,
  BoardListMod,
});

export function* rootSaga() {
  yield all([writeSaga(), createRoomSaga2(), loginSaga(), registerSaga(), listSaga()]);
}

export default rootReducer;
