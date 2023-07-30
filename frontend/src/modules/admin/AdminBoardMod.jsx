import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as adminAPI from "../../lib/api/admin";

const [GET_BOARD_LIST, GET_BOARD_LIST_SUCCESS, GET_BOARD_LIST_FAILURE] =
  createRequestActionTypes("admin/GET_BOARD_LIST");
const [GET_BOARD_DETAIL, GET_BOARD_DETAIL_SUCCESS, GET_BOARD_DETAIL_FAILURE] =
  createRequestActionTypes("admin/GET_BOARD_DETAIL");
const [DELETE_BOARD, DELETE_BOARD_SUCCESS, DELETE_BOARD_FAILURE] =
  createRequestActionTypes("admin/DELETE_BOARD");
const [GET_BOARD_ACTION, GET_BOARD_ACTION_SUCCESS, GET_BOARD_ACTION_FAILURE] =
  createRequestActionTypes("admin/GET_BOARD_ACTION");
const [CREATE_NOTICE, CREATE_NOTICE_SUCESS, CREATE_NOTICE_FAILURE] =
  createRequestActionTypes('admin/CREATE_NOTICE');
const [DONE_NOTICE, DONE_NOTICE_SUCESS, DONE_NOTICE_FAILURE] =
  createRequestActionTypes('admin/DONE_NOTICE');

export const getBoardList = createAction(GET_BOARD_LIST);
export const getBoardDetail = createAction(GET_BOARD_DETAIL, ({ no }) => ({ no }));
export const deleteBoard = createAction(DELETE_BOARD, ({ no }) => ({ no }));
export const getBoardAction = createAction(GET_BOARD_ACTION);
export const createNotice = createAction(CREATE_NOTICE, ({ title, content, id }) => ({ title, content, id }));
export const doneNotice = createAction(DONE_NOTICE, ({ no }) => ({ no }));

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
const getBoardActionProcess = createRequestSaga(
  GET_BOARD_ACTION,
  adminAPI.getBoardAction
);
const createNoticeProcess = createRequestSaga(
  CREATE_NOTICE,
  adminAPI.createNotice
)
const doneNoticeProcess = createRequestSaga(
  DONE_NOTICE,
  adminAPI.doneNotice
);

export function* adminBoardSaga() {
  yield takeLatest(GET_BOARD_LIST, getBoardListProcess);
  yield takeLatest(GET_BOARD_DETAIL, getBoardDetailProcess);
  yield takeLatest(DELETE_BOARD, deleteBoardProcess);
  yield takeLatest(GET_BOARD_ACTION, getBoardActionProcess);
  yield takeLatest(CREATE_NOTICE, createNoticeProcess);
  yield takeLatest(DONE_NOTICE, doneNoticeProcess);
}

const initialState = {
  boardList: [],
  totalBoard: null,
  listError: null,
  board: null,
  boardError: null,
  deleteError: null,
  boardAction: null,
  boardActionError: null,
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
    [GET_BOARD_LIST_FAILURE]: (state, { payload: { listError } }) => ({
      ...state,
      boardList: null,
      totalBoard: null,
      listError,
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
    [GET_BOARD_ACTION_SUCCESS]: (state, { payload: { boardAction } }) => ({
      ...state,
      boardAction,
      boardActionError: null,
    }),
    [GET_BOARD_ACTION_FAILURE]: (state, { payload: { boardActionError } }) => ({
      ...state,
      boardAction: null,
      boardActionError,
    }),
    [CREATE_NOTICE_SUCESS]: (state, { payload: { board } }) => ({
      ...state,
      board,
      boardError: null
    }),
    [CREATE_NOTICE_FAILURE]: (state, { payload: { boardError } }) => ({
      ...state,
      board: null,
      boardError
    }),
    [DONE_NOTICE_SUCESS]: (state, { payload: { board } }) => ({
      ...state,
      board,
      boardError: null
    }),
    [DONE_NOTICE_FAILURE]: (state, { payload: { boardError } }) => ({
      ...state,
      board: null,
      boardError
    })
  },
  initialState
);

export default AdminBoardMod;
