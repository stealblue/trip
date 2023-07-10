import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "reply/INITIALIZE"; //모든 내용 초기화
const CHANGE_FIELD = "reply/CHANGE_FIELD"; // 특정 key값 바꾸기
const REPLY_SET_ORIGIN_POST = "reply/SET_ORIGIN_POST";
const [REPLY_WRITE_POST, REPLY_WRITE_POST_SUCCESS, REPLY_WRITE_POST_FAILURE] = createRequestActionTypes("reply/REPLY_WRITE_POST"); //글작성
const [REPLY_UPDATE_POST, REPLY_UPDATE_POST_SUCCESS, REPLY_UPDATE_POST_FAILURE] = createRequestActionTypes("reply/REPLY_UPDATE_POST"); // 글수정

// 액션지정
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const replywritePost = createAction(REPLY_WRITE_POST, ({ bno, id, content }) => ({
  bno,
  content,
  id,
}));
export const replysetOriginPost = createAction(REPLY_SET_ORIGIN_POST, (reply) => reply);
export const replyupdatePost = createAction(REPLY_UPDATE_POST, ({ no, content }) => ({ no, content }));

//사가
const replywritePostSaga = createRequestSaga(REPLY_WRITE_POST, postsAPI.replyPost);
const replyupdatePostSaga = createRequestSaga(REPLY_UPDATE_POST, postsAPI.replyModifyPost);
export function* replySaga() {
  console.log("replysagaaaaaaaaaaaaaaaaa");
  yield takeLatest(REPLY_WRITE_POST, replywritePostSaga);
  yield takeLatest(REPLY_UPDATE_POST, replyupdatePostSaga);
}

// state 초깃값 설정
const initialState = {
  content: "",
  reply: null,
  replyError: null,
};

const ReplyWriteMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state, // 불변성 유지
      [key]: value, //특정 key값 없데이트
    }),
    [REPLY_WRITE_POST]: (state) => ({
      ...state,
      reply: null,
      replyError: null,
    }),
    // 글 작성 성공
    [REPLY_WRITE_POST_SUCCESS]: (state, { payload: reply }) => ({
      ...state,
      reply,
    }),
    // 글작성 실패
    [REPLY_WRITE_POST_FAILURE]: (state, { payload: replyError }) => ({
      ...state,
      replyError,
    }),
    [REPLY_SET_ORIGIN_POST]: (state, { payload: reply }) => ({
      ...state,
      reply,
    }),
    [REPLY_UPDATE_POST_SUCCESS]: (state, { payload: reply }) => ({
      ...state,
      reply,
    }),
    [REPLY_UPDATE_POST_FAILURE]: (state, { payload: replyError }) => ({
      ...state,
      replyError,
    }),
  },
  initialState
);

export default ReplyWriteMod;
