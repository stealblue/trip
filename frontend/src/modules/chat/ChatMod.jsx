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
const [LIST_CHATS, LIST_CHATS_SUCCESS, LIST_CHATS_FAILURE] =
  createRequestActionTypes("chat/LIST_CHATS"); // 리스트 조회 액션
const [INSERT_CHAT, INSERT_CHAT_SUCCESS, INSERT_CHAT_FAILURE] =
  createRequestActionTypes("chat/INSERT_CHAT"); // 방 생성 액션

// 액션 생성 함수
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const listChats = createAction(LIST_CHATS, ({ room }) => ({ room })); // 채팅 컬렉션의 room (채팅방의 _id)
export const insertChat = createAction(
  INSERT_CHAT,
  ({ room, user, content }) => ({
    room,
    user,
    content,
  })
);

const insertChatSaga = createRequestSaga(INSERT_CHAT, chatAPI.insertChat);
const listChatsSaga = createRequestSaga(LIST_CHATS, chatAPI.listChats);

export function* chatSaga() {
  yield takeLatest(LIST_CHATS, listChatsSaga);
  yield takeLatest(INSERT_CHAT, insertChatSaga);
}

// 초기화
const initialState = {
  room: null,
  user: "testAdmin2",
  content: null,
  chats: null,
  chat: null,
  chatError: null,
};

const ChatMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [LIST_CHATS_SUCCESS]: (state, { payload: chats }) => ({
      ...state,
      chats,
    }),
    [LIST_CHATS_FAILURE]: (state, { payload: chatError }) => ({
      ...state,
      chatError,
    }),
    [INSERT_CHAT_SUCCESS]: (state, { payload: chat }) => ({
      ...state,
      chat,
    }),
    [INSERT_CHAT_FAILURE]: (state, { payload: chatError }) => ({
      ...state,
      chatError,
    }),
  },
  initialState
);

export default ChatMod;
