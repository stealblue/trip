import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as adminAPI from "../../lib/api/admin";

const [GET_USER_LIST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE] =
  createRequestActionTypes("admin/GET_USER_LIST");
const [GET_USER_DETAIL, GET_USER_DETAIL_SUCCESS, GET_USER_DETAIL_FAILURE] =
  createRequestActionTypes("admin/GET_USER_DETAIL");
const [DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAILURE] =
  createRequestActionTypes("admin/DELETE_USER");
const [GET_USER_ACTION, GET_USER_ACTION_SUCCESS, GET_USER_ACTION_FAILURE] =
  createRequestActionTypes("admin/GET_USER_ACTION");

export const getUserList = createAction(GET_USER_LIST);
export const getUserDetail = createAction(GET_USER_DETAIL, ({ id }) => ({
  id,
}));
export const deleteUser = createAction(DELETE_USER, ({ id }) => ({ id }));
export const getUserAction = createAction(GET_USER_ACTION);

const getUserListProcess = createRequestSaga(
  GET_USER_LIST,
  adminAPI.getUserList
);
const getUserDetailProcess = createRequestSaga(
  GET_USER_DETAIL,
  adminAPI.getUserDetail
);
const deleteUserProcess = createRequestSaga(DELETE_USER, adminAPI.deleteUser);
const getUserActionProcess = createRequestSaga(
  GET_USER_ACTION,
  adminAPI.getUserAction
);

export function* adminUserSaga() {
  yield takeLatest(GET_USER_LIST, getUserListProcess);
  yield takeLatest(GET_USER_DETAIL, getUserDetailProcess);
  yield takeLatest(DELETE_USER, deleteUserProcess);
  yield takeLatest(GET_USER_ACTION, getUserActionProcess);
}

const initialState = {
  userList: [],
  totalUser: null,
  listError: null,
  user: null,
  userError: null,
  deleteError: null,
  userAction: null,
  userActionError: null,
};

const AdminUserMod = handleActions(
  {
    [GET_USER_LIST_SUCCESS]: (state, { payload: { userList, totalUser } }) => ({
      ...state,
      userList,
      totalUser,
      listError: null,
    }),
    [GET_USER_LIST_FAILURE]: (state, { payload: { listError } }) => ({
      ...state,
      userList: null,
      listError,
    }),
    [GET_USER_DETAIL_SUCCESS]: (state, { payload: { user } }) => ({
      ...state,
      user,
      userError: null,
    }),
    [GET_USER_DETAIL_FAILURE]: (state, { payload: { userError } }) => ({
      ...state,
      user: null,
      userError,
    }),
    [DELETE_USER_SUCCESS]: (state, { payload: { deleteError } }) => ({
      ...state,
      deleteError,
    }),
    [DELETE_USER_FAILURE]: (state, { payload: { deleteError } }) => ({
      ...state,
      deleteError,
    }),
    [GET_USER_ACTION_SUCCESS]: (state, { payload: { userAction } }) => ({
      ...state,
      userAction,
      userActionError: null,
    }),
    [GET_USER_ACTION_FAILURE]: (state, { payload: { userActionError } }) => ({
      ...state,
      userAction: null,
      userActionError,
    }),
  },
  initialState
);

export default AdminUserMod;
