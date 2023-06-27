import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
// import ListRoomMod from "../../lib/api/List";
import { takeLatest } from "redux-saga/effects";
import * as chatAPI from "../../lib/api/chat";

const INITIALIZE = "chat/INITIALIZE";
const CHANGE_FIELD = "chat/CHANGE_FIELD";
const [CREATE_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE] =
  createRequestActionTypes("chat/CREATE_ROOM");
const SET_ORIGINAL_ROOM = "chat/SET_ORIGINAL_ROOM";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(
  CREATE_ROOM,
  ({ title, host, password, max }) => ({
    title,
    host,
    max,
    password,
  })
);
export const setOriginalPost = createAction(SET_ORIGINAL_ROOM, (room) => room);

const createRoomSaga = createRequestSaga(CREATE_ROOM, chatAPI.createRoom);

export function* createRoomSaga2() {
  yield takeLatest(CREATE_ROOM, createRoomSaga);
}

const initialState = {
  title: "",
  max: 2,
  password: "",
  host: "",
  createError: null,
  originalRoomId: null,
};

const CreateRoomMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [CREATE_ROOM]: (state) => ({
      ...state,
      createError: null,
    }),
    [CREATE_ROOM_SUCCESS]: (state, { payload: room }) => ({
      ...state,
      room,
    }),
    [CREATE_ROOM_FAILURE]: (state, { payload: createError }) => ({
      ...state,
      createError,
    }),
    [SET_ORIGINAL_ROOM]: (state, { payload: room }) => ({
      ...state,
      title: room.title,
      host: room.host,
      max: room.max,
      originalPostId: room._id,
    }),
  },
  initialState
);

export default CreateRoomMod;
