import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod, { registerSaga } from "./RegisterMod";
import LoginMod, { loginSaga } from "./LoginMod";
import CreateRoomMod, { createRoomSaga2 } from "./chat/CreateRoomMod";
import ListRoomsMod, { listRoomsSaga2 } from "./chat/ListRoomsMod";
import WriteMod, { writeSaga } from "./board/WriteMod";
import BoardListMod, { listSaga } from "./board/BoardListMod";
import ReadMod, { postSaga } from "./board/ReadMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  CreateRoomMod,
  ListRoomsMod,
  BoardListMod,
  ReadMod,
});

export function* rootSaga() {
  yield all([writeSaga(), createRoomSaga2(), loginSaga(), registerSaga(), listRoomsSaga2(), listSaga(), postSaga()]);
}

export default rootReducer;
