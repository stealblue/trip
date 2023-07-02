import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod, { registerSaga } from "./RegisterMod";
import LoginMod, { loginSaga } from "./LoginMod";
import CreateRoomMod, { createRoomSaga2 } from "./chat/CreateRoomMod";
import ListRoomsMod, { listRoomsSaga2 } from "./chat/ListRoomsMod";
import WriteMod, { writeSaga } from "./board/WriteMod";
import BoardListMod, { listSaga } from "./board/BoardListMod";
import ReadRoomMod, { readRoomSaga2 } from "./chat/ReadRoomMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  CreateRoomMod,
  ListRoomsMod,
  BoardListMod,
  ReadRoomMod,
});

export function* rootSaga() {
  yield all([
    writeSaga(),
    createRoomSaga2(),
    loginSaga(),
    registerSaga(),
    listRoomsSaga2(),
    listSaga(),
    readRoomSaga2(),
  ]);
}

export default rootReducer;
