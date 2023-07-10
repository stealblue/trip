import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as loginAPI from "../lib/api/login";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "login/INITIALIZE_FORM";
const CHANGE_VALUE = "login/CHANGE_VALUE";
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes("auth/LOGIN");
const [SEARCH_ID, SEARCH_ID_SUCCESS, SEARCH_ID_FAILURE] =
  createRequestActionTypes("auth/SEARCH_ID");
const [SEARCH_PWD, SEARCH_PWD_SUCCESS, SEARCH_PWD_FAILURE] =
  createRequestActionTypes("auth/SEARCH_PWD");

export const initializeLoginForm = createAction(INITIALIZE);
export const changeValue = createAction(CHANGE_VALUE);
export const login = createAction(LOGIN, ({ id, pwd }) => ({
  id,
  pwd,
}));
export const searchId = createAction(SEARCH_ID, ({ email, phone }) => ({
  email,
  phone,
}));
export const searchPwd = createAction(SEARCH_PWD, ({ email, phone }) => ({
  email,
  phone,
}));

const loginProcess = createRequestSaga(LOGIN, loginAPI.login);
const searchIdProcess = createRequestSaga(LOGIN, loginAPI.searchId);
const searchPwdProcess = createRequestSaga(LOGIN, loginAPI.searchPwd);

export function* loginSaga() {
  yield takeLatest(LOGIN, loginProcess);
  yield takeLatest(SEARCH_ID, searchIdProcess);
  yield takeLatest(SEARCH_PWD, searchPwdProcess);
}

const initialState = {
  id: null,
  pwd: null,
  auth: null,
  authError: null,
  searchId: null,
  seacchIdError: null,
  searchPwd: null,
  seacchPwdError: null,
};

const LoginMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_VALUE]: (state, { payload: { value, key } }) => ({
      ...state,
      [key]: value,
    }),
    [LOGIN_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      auth: auth,
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: { authError } }) => ({
      ...state,
      authError: authError,
    }),
    [SEARCH_ID_SUCCESS]: (state, { payload: { searchId } }) => ({
      ...state,
      searchId,
      searchIdError: null,
    }),
    [SEARCH_ID_FAILURE]: (state, { payload: { searchIdError } }) => ({
      ...state,
      searchId: null,
      searchIdError,
    }),
    [SEARCH_PWD_SUCCESS]: (state, { payload: { searchPwd } }) => ({
      ...state,
      searchPwd,
      searchPwdError: null,
    }),
    [SEARCH_PWD_FAILURE]: (state, { payload: { searchPwdError } }) => ({
      ...state,
      searchPwd: null,
      searchPwdError,
    }),
  },
  initialState
);

export default LoginMod;
