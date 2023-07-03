import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod, { registerSaga } from "./RegisterMod";
import LoginMod, { loginSaga } from "./LoginMod";
import WriteMod, { writeSaga } from "./board/WriteMod";
import BoardListMod, { postsSaga } from "./board/BoardListMod";
import RoomMod, { roomSaga } from "./chat/RoomMod";
import ReadMod, { postSaga } from "./board/ReadMod";

const rootReducer = combineReducers({
  RegisterMod,
  LoginMod,
  WriteMod,
  BoardListMod,
  RoomMod,
  ReadMod,
});

export function* rootSaga() {
  yield all([writeSaga(), loginSaga(), registerSaga(), postsSaga(), roomSaga(), postSaga()]);
}

export default rootReducer;
