import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod, { registerSaga } from "./RegisterMod";
import LoginMod, { loginSaga } from "./LoginMod";
import WriteMod, { writeSaga } from "./board/WriteMod";
import BoardListMod, { listSaga } from "./board/BoardListMod";
import RoomMod, { roomSaga } from "./chat/RoomMod";
import ReadMod, { postSaga } from "./board/ReadMod";
import ChatMod, { chatSaga } from "./chat/ChatMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  BoardListMod,
  RoomMod,
  ReadMod,
  ChatMod,
});

export function* rootSaga() {
  yield all([
    writeSaga(),
    loginSaga(),
    registerSaga(),
    listSaga(),
    roomSaga(),
    postSaga(),
    chatSaga(),
  ]);
}

export default rootReducer;
