import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [LIST_POSTS, LIST_POSTS_SUCCESS, LIST_POSTS_FAILURE] = createRequestActionTypes("posts/LIST_POSTS");

export const listPosts = createAction(LIST_POSTS, ({ title, content, id }) => ({ title, content, id }));

const boardListSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);
export function* listSaga() {
  yield takeLatest(LIST_POSTS, boardListSaga);
}

const initialState = {
  posts: null,
  error: null,
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
  },
  initialState
);

export default BoardListMod;
