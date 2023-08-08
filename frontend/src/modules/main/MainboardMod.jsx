import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as postsAPI from "../../../src/lib/api/main";
import { takeLatest } from "redux-saga/effects";

const [MAIN_LIST_POSTS, MAIN_LIST_POSTS_SUCCESS, MAIN_LIST_POSTS_FAILURE] =
  createRequestActionTypes("main/MAIN_LIST_POSTS");
const [GET_MAIN_STYLE, GET_MAIN_STYLE_SUCCESS, GET_MAIN_STYLE_FAILURE] =
  createRequestActionTypes("main/GET_MAIN_STYLE");

export const mainlistPosts = createAction(MAIN_LIST_POSTS);
export const getMainStyle = createAction(GET_MAIN_STYLE);

const mainListPostsSaga = createRequestSaga(
  MAIN_LIST_POSTS,
  postsAPI.mainListPosts
);
const getMainStyleSaga = createRequestSaga(
  GET_MAIN_STYLE,
  postsAPI.getMainStyle
);

export function* mainPostsSaga() {
  yield takeLatest(MAIN_LIST_POSTS, mainListPostsSaga);
  yield takeLatest(GET_MAIN_STYLE, getMainStyleSaga);
}

const initialState = {
  posts: null,
  error: null,
  mainStyle: {},
  styleError: null,
};

const BoardListMod = handleActions(
  {
    [MAIN_LIST_POSTS_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
      error: null,
    }),
    [MAIN_LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      posts: null,
      error,
    }),
    [GET_MAIN_STYLE_SUCCESS]: (state, { payload: { mainStyle } }) => ({
      ...state,
      mainStyle,
      styleError: null,
    }),
    [GET_MAIN_STYLE_FAILURE]: (state, { payload: { styleError } }) => ({
      ...state,
      mainStyle: null,
      styleError,
    }),
  },
  initialState
);

export default BoardListMod;
