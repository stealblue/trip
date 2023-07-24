import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as postsAPI from "../../../src/lib/api/main";
import { takeLatest } from "redux-saga/effects";

const [MAIN_LIST_POSTS, MAIN_LIST_POSTS_SUCCESS, MAIN_LIST_POSTS_FAILURE] = createRequestActionTypes("main/MAIN_LIST_POSTS");

export const mainlistPosts = createAction(MAIN_LIST_POSTS);

const mainListPostsSaga = createRequestSaga(MAIN_LIST_POSTS, postsAPI.mainListPosts);

export function* mainPostsSaga() {
  yield takeLatest(MAIN_LIST_POSTS, mainListPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
};

const BoardListMod = handleActions(
  {
    [MAIN_LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [MAIN_LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default BoardListMod;
