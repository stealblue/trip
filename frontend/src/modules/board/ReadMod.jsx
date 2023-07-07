import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] = createRequestActionTypes("post/READ_POST");
const UNLOAD_POST = "post/UNLOAD_POST";
const [LIKE_POST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE] = createRequestActionTypes("post/LIKE_POST"); //like

export const readPost = createAction(READ_POST);
export const unloadPost = createAction(UNLOAD_POST);
export const likePost = createAction(LIKE_POST, ({ no, id, bno }) => ({ no, id, bno }));

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
const likePostSaga = createRequestSaga(LIKE_POST, postsAPI.likePost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
  yield takeLatest(LIKE_POST, likePostSaga);
}

const initalState = {
  post: null,
  error: null,
  // like: null,
};

const ReadMod = handleActions(
  {
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIKE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [LIKE_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),

    [UNLOAD_POST]: () => initalState,
  },
  initalState
);

export default ReadMod;
