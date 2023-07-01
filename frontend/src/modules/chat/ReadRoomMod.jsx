import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as chatAPI from "../../lib/api/chat";
import { takeLatest } from "redux-saga/effects";

const [READ_ROOM, READ_ROOM_SUCCESS, READ_ROOM_FAILURE] =
  createRequestActionTypes("chat/READ_ROOM");

export const listRooms = createAction(READ_ROOM, ({ _id }) => ({ _id }));

const listRoomsSaga = createRequestSaga(READ_ROOM, chatAPI.listRooms);

export function* listRoomsSaga2() {
  yield takeLatest(READ_ROOM, listRoomsSaga);
}

const initialState = { rooms: null, error: null };

const ReadRoomMod = handleActions(
  {
    [READ_ROOM_SUCCESS]: (state, { payload: rooms }) => ({
      ...state,
      rooms,
      // lastPage: parseInt(response.headers["last-page"], 10), // 문자열을 숫자로 변환
    }),
    [READ_ROOM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default ReadRoomMod;
