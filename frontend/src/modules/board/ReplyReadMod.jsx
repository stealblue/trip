import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [REPLY_READ_POST, REPLY_READ_POST_SUCCESS, REPLY_READ_POST_FAILURE] =
  createRequestActionTypes("reply/READ_POST");
const [REPLY_DELETE_POST, REPLY_DELETE_POST_SUCCESS, REPLY_DELETE_POST_FAILURE] = createRequestActionTypes('reply/REPLY_DELETE_POST');

export const replyReadPost = createAction(REPLY_READ_POST);
export const replyDeletePost = createAction(
  REPLY_DELETE_POST,
  ({ bno, no }) => ({ bno, no })
);

const replyreadPostSaga = createRequestSaga(
  REPLY_READ_POST,
  postsAPI.replyReadPosts
);
const replyDeletePostSaga = createRequestSaga(
  REPLY_DELETE_POST,
  postsAPI.replyRemovePost
);

export function* replyReadSaga() {
  yield takeLatest(REPLY_READ_POST, replyreadPostSaga);
  yield takeLatest(REPLY_DELETE_POST, replyDeletePostSaga);
}

const initalState = {
  replys: null,
  error: null,
  // like: null, replyreadP
};

const ReplyReadMod = handleActions(
  {
    [REPLY_READ_POST_SUCCESS]: (state, { payload: replys }) => ({
      ...state,
      replys,
    }),
    [REPLY_READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [REPLY_DELETE_POST_SUCCESS]: (state, { payload: replys }) => ({
      ...state,
      replys
    }),
    [REPLY_DELETE_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    })
  },
  initalState
);

export default ReplyReadMod;
