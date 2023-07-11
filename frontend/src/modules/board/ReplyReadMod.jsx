import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as postsAPI from "../../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [REPLY_READ_POST, REPLY_READ_POST_SUCCESS, REPLY_READ_POST_FAILURE] =
  createRequestActionTypes("reply/READ_POST");

export const replyReadPost = createAction(REPLY_READ_POST);

const replyreadPostSaga = createRequestSaga(
  REPLY_READ_POST,
  postsAPI.replyReadPosts
);

export function* replyReadSaga() {
  yield takeLatest(REPLY_READ_POST, replyreadPostSaga);
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
  },
  initalState
);

export default ReplyReadMod;
