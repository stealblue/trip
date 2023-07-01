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

export const initializeLoginForm = createAction(INITIALIZE);
export const changeValue = createAction(CHANGE_VALUE);
export const login = createAction(LOGIN, ({ id, pwd }) => ({
  id,
  pwd,
}));

const loginProcess = createRequestSaga(LOGIN, loginAPI.login);

export function* loginSaga() {
  yield takeLatest(LOGIN, loginProcess);
}

const initialState = {
  id: null,
  pwd: null,
  auth: null,
  authError: null,
};

const LoginMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_VALUE]: (state, { payload: { value, key } }) => ({
      ...state,
      [key]: value,
    }),
    [LOGIN_SUCCESS]: (state, { payload: { auth, nick } }) => ({
      ...state,
      nick: nick,
      auth: auth,
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: { authError } }) => ({
      ...state,
      authError: authError,
    }),
  },
  initialState
);

export default LoginMod;
