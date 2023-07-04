import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "write/INITIALIZE"; //모든 내용 초기화
const CHANGE_FIELD = "wrtie/CHANGE_FIELD"; // 특정 key값 바꾸기
const SET_ORIGIN_POST = "write/SET_ORIGIN_POST";
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes("write/WRITE_POST"); //글작성
const [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE] = createRequestActionTypes("write/UPDATE_POST"); // 글수정

// 액션지정
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, content, id }) => ({
  title,
  content,
  id,
}));
export const setOriginPost = createAction(SET_ORIGIN_POST, (post) => post);
export const updatePost = createAction(UPDATE_POST, ({ no, title, content }) => ({ no, title, content }));

//사가
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

// state 초깃값 설정
const initialState = {
  title: "",
  content: "",
  // tags: [],
  post: null,
  postError: null,
  originPostId: null,
};

const WriteMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state, // 불변성 유지
      [key]: value, //특정 key값 없데이트
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
    // 글 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 글작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGIN_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      content: post.content,
      originPostId: post.no,
    }),
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [UPDATE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState
);

export default WriteMod;
