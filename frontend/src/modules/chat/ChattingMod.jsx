import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as chatAPI from "../../lib/api/chat";

// 액션 타입
// const INITIALIZE = "chat/INITIALIZE";
const INSERT_TEXT = "chat/INSERT_TEXT";
const [SEND_CHATTING, SEND_CHATTING_SUCCESS, SEND_CHATTING_FAILURE] =
  createRequestActionTypes("chat/SEND_CHATTING");

// export const initialize = createAction(INITIALIZE);
export const insertText = createAction(INSERT_TEXT, ({ key, value }) => ({
  key,
  value,
}));
export const sendChatting = createAction(
  SEND_CHATTING,
  ({ room, user, chat }) => ({ room, user, chat })
);

const createChat = createRequestSaga(SEND_CHATTING, chatAPI.insertChat);

export function* createChatSaga() {
  yield takeLatest(SEND_CHATTING, createChat);
}

const initialState = { chats: null, chatError: null };

const ChattingMod = handleActions({
  // [INITIALIZE]: (state) => initialState,
  [INSERT_TEXT]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [SEND_CHATTING_SUCCESS]: (state, { payload: chats }) => ({
    ...state,
    chats,
  }),
  [SEND_CHATTING_FAILURE]: (state, { payload: chatError }) => ({
    ...state,
    chatError,
  }),
  initialState,
});

export default ChattingMod;
