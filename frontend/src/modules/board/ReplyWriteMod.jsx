import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "reply/INITIALIZE"; //모든 내용 초기화
const CHANGE_FIELD = "reply/CHANGE_FIELD"; // 특정 key값 바꾸기
const SET_ORIGIN_POST = "reply/SET_ORIGIN_POST";
const [REPLY_WRITE_POST, REPLY_WRITE_POST_SUCCESS, REPLY_WRITE_POST_FAILURE] = createRequestActionTypes("reply/REPLY_WRITE_POST"); //글작성
// const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] = createRequestActionTypes("write/UPDATE_POST"); // 글수정

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
export const setOriginPost = createAction(SET_ORIGIN_POST, (post) => post);
// export const updatePost = createAction(UPDATE_POST, ({ no, title, content }) => ({ no, title, content }));

//사가
const replywritePostSaga = createRequestSaga(REPLY_WRITE_POST, postsAPI.replyPost);
// const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
export function* replySaga() {
  yield takeLatest(REPLY_WRITE_POST, replywritePostSaga);
  //   yield takeLatest(UPDATE_POST, updatePostSaga);
}

// state 초깃값 설정
const initialState = {
  content: "",
  reply: null,
  replyError: null,
};

const ReplyMod = handleActions(
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
    // [SET_ORIGIN_POST]: (state, { payload: post }) => ({
    //   ...state,
    //   title: post.title,
    //   content: post.content,
    //   originPostId: post.no,
    // }),
    // [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
    //   ...state,
    //   post,
    // }),
    // [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
    //   ...state,
    //   postError,
    // }),
  },
  initialState
);

export default ReplyMod;
