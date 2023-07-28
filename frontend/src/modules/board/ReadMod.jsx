import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE] =
  createRequestActionTypes("post/READ_POST");
const UNLOAD_POST = "post/UNLOAD_POST";
const [LIKE_POST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE] =
  createRequestActionTypes("post/LIKE_POST"); //like
const [IS_LIKE, IS_LIKE_SUCCESS, IS_LIKE_FAILURE] =
  createRequestActionTypes("post/IS_LIKE"); // like 여부
const [GET_LIKE, GET_LIKE_SUCCESS, GET_LIKE_FAILURE] =
  createRequestActionTypes("post/GET_LIKE");

export const readPost = createAction(READ_POST);
export const unloadPost = createAction(UNLOAD_POST);
export const likePost = createAction(LIKE_POST, ({ no, id, bno }) => ({
  no,
  id,
  bno,
}));
export const isLike = createAction(IS_LIKE, ({ bno, id }) => ({ bno, id }));
export const getLike = createAction(GET_LIKE, ({ bno, id }) => ({ bno, id }));

const readPostSaga = createRequestSaga(READ_POST, postsAPI.readPost);
const likePostSaga = createRequestSaga(LIKE_POST, postsAPI.likePost);
const isLikeSaga = createRequestSaga(IS_LIKE, postsAPI.isLike);
const getLikeSaga = createRequestSaga(GET_LIKE, postsAPI.getLike);

export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
  yield takeLatest(LIKE_POST, likePostSaga);
  yield takeLatest(IS_LIKE, isLikeSaga);
  yield takeLatest(GET_LIKE, getLikeSaga);
}

const initalState = {
  post: null,
  error: null,
  myLike: null,
  myLikeError: null,
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
    [IS_LIKE_SUCCESS]: (state, { payload: { myLike } }) => ({
      ...state,
      myLike,
      myLikeError: null,
    }),
    [IS_LIKE_FAILURE]: (state, { payload: { myLikeError } }) => ({
      ...state,
      myLike: null,
      myLikeError,
    }),
    [GET_LIKE_SUCCESS]: (state, { payload: { myLike } }) => ({
      ...state,
      myLike,
      myLikeError: null,
    }),
    [GET_LIKE_FAILURE]: (state, { payload: { myLikeError } }) => ({
      ...state,
      myLike: null,
      myLikeError,
    }),
    [UNLOAD_POST]: () => initalState,
  },
  initalState
);

export default ReadMod;
