import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as chatAPI from "../../lib/api/chat";
import { takeLatest } from "redux-saga/effects";

const [LIST_ROOMS, LIST_ROOMS_SUCCESS, LIST_ROOMS_FAILURE] =
  createRequestActionTypes("chat/LIST_ROOMS");

export const listRooms = createAction(LIST_ROOMS, ({ username, page }) => ({
  username,
  page,
}));

const listRoomsSaga = createRequestSaga(LIST_ROOMS, chatAPI.listRooms);

export function* roomsSaga() {
  yield takeLatest(LIST_ROOMS, listRoomsSaga);
}

const initialState = {
  rooms: null,
  error: null,
  lastPage: 1,
};

const ListRoomsMod = handleActions(
  {
    [LIST_ROOMS_SUCCESS]: (state, { payload: rooms, meta: response }) => ({
      ...state,
      rooms,
      lastPage: parseInt(response.headers["last-page"], 10), // 문자열을 숫자로 변환
    }),
    [LIST_ROOMS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default ListRoomsMod;
