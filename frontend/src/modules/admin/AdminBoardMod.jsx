import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as adminAPI from "../../lib/api/admin";

const [GET_BOARD_LIST, GET_BOARD_LIST_SUCCESS, GET_BOARD_LIST_FAILURE] =
  createRequestActionTypes("admin/GET_USERLIST");
const [GET_BOARD_DETAIL, GET_BOARD_DETAIL_SUCCESS, GET_BOARD_DETAIL_FAILURE] =
  createRequestActionTypes("admin/GET_DETAIL");
const [DELETE_BOARD, DELETE_BOARD_SUCCESS, DELETE_BOARD_FAILURE] =
  createRequestActionTypes("admin/DELETE_USER");

export const getBoardList = createAction(GET_BOARD_LIST);
export const getBoardDetail = createAction(GET_BOARD_DETAIL, ({ no }) => ({
  no,
}));
export const deleteBoard = createAction(DELETE_BOARD, ({ no }) => ({ no }));

const getBoardListProcess = createRequestSaga(
  GET_BOARD_LIST,
  adminAPI.getBoardList
);
const getBoardDetailProcess = createRequestSaga(
  GET_BOARD_DETAIL,
  adminAPI.getBoardDetail
);
const deleteBoardProcess = createRequestSaga(
  DELETE_BOARD,
  adminAPI.deleteBoard
);

export function* adminBoardSaga() {
  yield takeLatest(GET_BOARD_LIST, getBoardListProcess);
  yield takeLatest(GET_BOARD_DETAIL, getBoardDetailProcess);
  yield takeLatest(DELETE_BOARD, deleteBoardProcess);
}

const initialState = {
  boardList: [],
  totalBoard: null,
  listError: null,
  board: null,
  boardError: null,
  deleteError: null,
};

const AdminBoardMod = handleActions(
  {
    [GET_BOARD_LIST_SUCCESS]: (
      state,
      { payload: { boardList, totalBoard } }
    ) => ({
      ...state,
      boardList,
      totalBoard,
      boardError: null,
    }),
    [GET_BOARD_LIST_FAILURE]: (state, { payload: { boardError } }) => ({
      ...state,
      boardList: null,
      totalBoard: null,
      boardError,
    }),
    [GET_BOARD_DETAIL_SUCCESS]: (state, { payload: { board } }) => ({
      ...state,
      board,
      boardError: null,
    }),
    [GET_BOARD_DETAIL_FAILURE]: (state, { payload: { boardError } }) => ({
      ...state,
      board: null,
      boardError,
    }),
    [DELETE_BOARD_SUCCESS]: (state, { payload: { deleteError } }) => ({
      ...state,
      deleteError,
    }),
    [DELETE_BOARD_FAILURE]: (state, { payload: { deleteError } }) => ({
      ...state,
      deleteError,
    }),
  },
  initialState
);

export default AdminBoardMod;
