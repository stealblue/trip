// chat(채팅에 관한 module들을 한 곳에 모아두기로 생각해서 생성)
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as chatAPI from "../../lib/api/chat";
import { takeLatest } from "redux-saga/effects";

// 액션 타입
const INITIALIZE = "chat/INITIALIZE"; // 값 초기화 액션
const CHANGE_FIELD = "chat/CHANGE_FIELD"; // 값 변경 액션
const [LIST_ROOMS, LIST_ROOMS_SUCCESS, LIST_ROOMS_FAILURE] =
  createRequestActionTypes("chat/LIST_ROOMS"); // 리스트 조회 액션
const [CREATE_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE] =
  createRequestActionTypes("chat/CREATE_ROOM"); // 방 생성 액션
const [READ_ROOM, READ_ROOM_SUCCESS, READ_ROOM_FAILURE] =
  createRequestActionTypes("chat/READ_ROOM"); // 특정 방 조회 액션
const [DELETE_ROOM, DELETE_ROOM_SUCCESS, DELETE_ROOM_FAILURE] =
  createRequestActionTypes("chat/DELETE_ROOM"); // 특정 방 삭제 액션

// 액션 생성 함수
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const createRoom = createAction(
  CREATE_ROOM,
  ({ title, max, password, owner }) => ({ title, max, password, owner })
);
export const listRooms = createAction(LIST_ROOMS, ({ page }) => ({ page }));
export const readRoom = createAction(READ_ROOM, ({ _id }) => ({ _id }));
export const deleteRoom = createAction(DELETE_ROOM, ({ _id }) => ({ _id }));

const createRoomSaga = createRequestSaga(CREATE_ROOM, chatAPI.createRoom);
const listRoomsSaga = createRequestSaga(LIST_ROOMS, chatAPI.listRooms);
const readRoomSaga = createRequestSaga(READ_ROOM, chatAPI.readRoom);
const deleteRoomSaga = createRequestSaga(DELETE_ROOM, chatAPI.deleteRoom);

export function* roomSaga() {
  yield takeLatest(LIST_ROOMS, listRoomsSaga);
  yield takeLatest(CREATE_ROOM, createRoomSaga);
  yield takeLatest(READ_ROOM, readRoomSaga);
  yield takeLatest(DELETE_ROOM, deleteRoomSaga);
}

// 초기화
const initialState = {
  title: "",
  max: 2,
  password: "",
  owner: "testAdmin1",
  room: null,
  rooms: null,
  roomError: null,
  message: null,
};

const RoomMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [CREATE_ROOM_SUCCESS]: (state, { payload: room }) => ({
      ...state,
      room,
    }),
    [CREATE_ROOM_FAILURE]: (state, { payload: roomError }) => ({
      ...state,
      roomError,
    }),
    [LIST_ROOMS_SUCCESS]: (state, { payload: rooms }) => ({
      ...state,
      rooms,
    }),
    [LIST_ROOMS_FAILURE]: (state, { payload: roomError }) => ({
      ...state,
      roomError,
    }),
    [READ_ROOM_SUCCESS]: (state, { payload: room }) => ({
      ...state,
      room,
    }),
    [READ_ROOM_FAILURE]: (state, { payload: roomError }) => ({
      ...state,
      roomError,
    }),
    [DELETE_ROOM_SUCCESS]: (state, { payload: message }) => ({
      // 애매함
      ...state,
      message,
    }),
    [DELETE_ROOM_FAILURE]: (state, { payload: roomError }) => ({
      ...state,
      roomError,
    }),
  },
  initialState
);

export default RoomMod;
