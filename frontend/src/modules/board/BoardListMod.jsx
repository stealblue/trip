import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as postsAPI from "../../../src/lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] = createRequestActionTypes("posts/LIST_POSTS");
const [LIST_NOTICES, LIST_NOTICES_SUCESS, LIST_NOTICES_FAILURE] = createRequestActionTypes('posts/LIST_NOTICES');

export const listPosts = createAction(LIST_POSTS);
export const listNotices = createAction(LIST_NOTICES);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
const listNoticeSaga = createRequestSaga(LIST_NOTICES, postsAPI.headerListNotices);

export function* postsSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
  yield takeLatest(LIST_NOTICES, listNoticeSaga);
}

const initialState = {
  posts: null,
  error: null,
  notices: null // 공지사항을 따로 빼서 상단에서 보여주기 위함
};

const BoardListMod = handleActions(
  {
    [LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_NOTICES_SUCESS]: (state, { payload: notices }) => ({
      ...state,
      notices
    }),
    [LIST_NOTICES_FAILURE]: (state, { payload: error }) => ({
      ...state, error
    })
  },
  initialState
);

export default BoardListMod;
