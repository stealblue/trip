import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod, { registerSaga } from "./auth/RegisterMod";
import LoginMod, { loginSaga } from "./auth/LoginMod";
import WriteMod, { writeSaga } from "./board/WriteMod";
import BoardListMod, { postsSaga } from "./board/BoardListMod";
import RoomMod, { roomSaga } from "./chat/RoomMod";
import ReadMod, { postSaga } from "./board/ReadMod";
import ChatMod, { chatSaga } from "./chat/ChatMod";
import UserMod, { userSaga } from "./auth/UserMod";
import AreaMod, { areaSaga } from "./area/AreaMod";
import ReplyWriteMod, { replySaga } from "./board/ReplyWriteMod";
import ReplyReadMod, { replyReadSaga } from "./board/ReplyReadMod";
const rootReducer = combineReducers({
  LoginMod,
  RegisterMod,
  UserMod,
  WriteMod,
  BoardListMod,
  RoomMod,
  ReadMod,
  ChatMod,
  AreaMod,
  ReplyWriteMod,
  ReplyReadMod,
});

export function* rootSaga() {
  yield all([
    writeSaga(),
    loginSaga(),
    registerSaga(),
    postsSaga(),
    userSaga(),
    chatSaga(),
    roomSaga(),
    postSaga(),
    areaSaga(),
    replySaga(),
    replyReadSaga(),
  ]);
}

export default rootReducer;
