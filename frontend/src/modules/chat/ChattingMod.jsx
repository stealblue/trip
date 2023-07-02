import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as chatAPI from "../../lib/api/chat";

// 액션 타입
const CHAT_INITIALIZE = "chat/CHAT_INITIALIZE";
const INSERT_TEXT = "chat/INSERT_TEXT";
const [SEND_CHATTING, SEND_CHATTING_SUCCESS, SEND_CHATTING_FAILURE] =
  createRequestActionTypes("chat/SEND_CHATTING");

export const initialize = createAction(CHAT_INITIALIZE);
export const insertText = createAction(INSERT_TEXT, ({ room, user, chat }) => ({
  room,
  user,
  chat,
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
  [CHAT_INITIALIZE]: (state) => initialState,
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
