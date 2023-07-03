import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod, { registerSaga } from "./RegisterMod";
import LoginMod, { loginSaga } from "./LoginMod";
import WriteMod, { writeSaga } from "./board/WriteMod";
import BoardListMod, { listSaga } from "./board/BoardListMod";
import RoomMod, { roomSaga } from "./chat/RoomMod";
import ReadMod, { postSaga } from "./board/ReadMod";
import UserMod, { userSaga } from "./UserMod";

const rootReducer = combineReducers({
  LoginMod,
  RegisterMod,
  UserMod,
  WriteMod,
  BoardListMod,
  RoomMod,
  ReadMod,
});

export function* rootSaga() {
  yield all([
    writeSaga(),
    loginSaga(),
    registerSaga(),
    userSaga(),
    listSaga(),
    roomSaga(),
    postSaga(),
  ]);
}

export default rootReducer;
