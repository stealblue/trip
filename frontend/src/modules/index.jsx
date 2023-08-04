import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import RegisterMod, { registerSaga } from "./auth/RegisterMod";
import LoginMod, { loginSaga } from "./auth/LoginMod";
import WriteMod, { writeSaga } from "./board/WriteMod";
import BoardListMod, { postsSaga } from "./board/BoardListMod";
import RoomMod, { RoomSaga } from "./chat/RoomMod";
import ReadMod, { postSaga } from "./board/ReadMod";
import ChatMod, { chatSaga } from "./chat/ChatMod";
import UserMod, { userSaga } from "./auth/UserMod";
import AreaMod, { areaSaga } from "./area/AreaMod";
import AreaListMod, { areaListSaga } from "./area/AreaListMod";
import ReplyWriteMod, { replySaga } from "./board/ReplyWriteMod";
import ReplyReadMod, { replyReadSaga } from "./board/ReplyReadMod";
import LodgingMod, { lodgingSaga } from "./room/LodgingMod";
import WishListMod, { wishListSaga } from "./wishList/WishListMod";
import BusMod, { busSaga } from "./traffic/BusMod";
import TrainMod, { trainSaga } from "./traffic/TrainMod";
import AdminUserMod, { adminUserSaga } from "./admin/AdminUserMod";
import AdminBoardMod, { adminBoardSaga } from "./admin/AdminBoardMod";
import AdminTermsMod, { adminTermsSaga } from "./admin/AdminTermsMod";
import ProfileMod, { ProfileSaga } from "./profile/ProfileMod";
import ScheduleMod, { scheduleSaga } from "./schedule/ScheduleMod";
import XmppMod, { XmppSaga } from "./chat/XmppMod";
import SearchMod, { searchSaga } from "./search/SearchMod";
import LoadingMod from "./loadingMod";
import MainboardMod, { mainPostsSaga } from "./main/MainboardMod";
import TicketMod, { ticketSaga } from "./traffic/TicketMod";

const rootReducer = combineReducers({
  LoginMod,
  LoadingMod,
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
  LodgingMod,
  WishListMod,
  BusMod,
  TrainMod,
  AdminUserMod,
  AdminBoardMod,
  ProfileMod,
  ScheduleMod,
  XmppMod,
  SearchMod,
  MainboardMod,
  AreaListMod,
  TicketMod,
  AdminTermsMod,
});

export function* rootSaga() {
  yield all([
    adminUserSaga(),
    adminBoardSaga(),
    adminTermsSaga(),
    writeSaga(),
    loginSaga(),
    registerSaga(),
    postsSaga(),
    userSaga(),
    chatSaga(),
    RoomSaga(),
    postSaga(),
    areaSaga(),
    replySaga(),
    replyReadSaga(),
    lodgingSaga(),
    wishListSaga(),
    busSaga(),
    trainSaga(),
    ProfileSaga(),
    scheduleSaga(),
    XmppSaga(),
    searchSaga(),
    mainPostsSaga(),
    areaListSaga(),
    ticketSaga()
  ]);
}

export default rootReducer;
