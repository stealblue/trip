import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as chatAPI from "../../lib/api/chat";

// 액션 타입
const INITIALIZE = "chat/INITIALIZE";
const CHANGE_FIELD = "chat/CHANGE_FIELD";
const [CREATE_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE] =
  createRequestActionTypes("chat/CREATE_ROOM");

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

const createRoomSaga = createRequestSaga(CREATE_ROOM, chatAPI.createRoom);

export function* createRoomSaga2() {
  yield takeLatest(CREATE_ROOM, createRoomSaga);
}

// 초기화
const initialState = {
  title: "",
  max: 2,
  password: "",
  owner: "testAdmin1",
  room: null,
  roomError: null,
};

// 리듀서
const CreateRoomMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    // [CREATE_ROOM]: (state) => ({
    //   ...state,
    //   room: null,
    //   roomError: null,
    // }),
    [CREATE_ROOM_SUCCESS]: (state, { payload: room }) => ({
      ...state,
      room,
    }),
    [CREATE_ROOM_FAILURE]: (state, { payload: roomError }) => ({
      ...state,
      roomError,
    }),
  },
  initialState
);

export default CreateRoomMod;
