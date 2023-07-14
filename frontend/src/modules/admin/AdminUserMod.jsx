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

export const getUserList = createAction(GET_USER_LIST);
export const getUserDetail = createAction(GET_USER_DETAIL, ({ id }) => ({
  id,
}));
export const deleteUser = createAction(DELETE_USER, ({ id }) => ({ id }));

const getUserListProcess = createRequestSaga(
  GET_USER_LIST,
  adminAPI.getUserList
);
const getUserDetailProcess = createRequestSaga(
  GET_USER_DETAIL,
  adminAPI.getUserDetail
);
const deleteUserProcess = createRequestSaga(DELETE_USER, adminAPI.deleteUser);

export function* adminUserSaga() {
  yield takeLatest(GET_USER_LIST, getUserListProcess);
  yield takeLatest(GET_USER_DETAIL, getUserDetailProcess);
  yield takeLatest(DELETE_USER, deleteUserProcess);
}

const initialState = {
  userList: [],
  totalUser: null,
  listError: null,
  user: null,
  userError: null,
  deleteError: null,
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
  },
  initialState
);

export default AdminUserMod;
