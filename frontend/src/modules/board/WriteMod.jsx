import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "write/INITIALIZE"; //모든 내용 초기화
const CHANGE_FIELD = "wrtie/CHANGE_FIELD"; // 특정 key값 바꾸기
const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes("write/WRITE_POST"); //글작성

// 액션지정
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, content }) => ({
  title,
  content,
}));

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}
// state 초깃값 설정
const initialState = {
  title: "",
  content: "",
  // tags: [],
  post: null,
  postError: null,
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
  },
  initialState
);

export default WriteMod;
