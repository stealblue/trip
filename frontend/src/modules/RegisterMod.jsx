import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as registerAPI from "../lib/api/register";
import { takeLatest } from "redux-saga/effects";
import { produce } from "immer";

const INITIALIZE_FORM = "register/INITIALIZE_FORM";
const CHANGE_VALUE = "register/CHANGE_VALUE";
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILUER] =
  createRequestActionTypes("register/REGISTER");
const [ID_CHECK, ID_CHECK_SUCCESS, ID_CHECK_FAILUER] =
  createRequestActionTypes("register/ID_CHECK");
const [NICK_CHECK, NICK_CHECK_SUCCESS, NICK_CHECK_FAILUER] =
  createRequestActionTypes("register/NICK_CHECK");
const [PHONE_CHECK, PHONE_CHECK_SUCCESS, PHONE_CHECK_FAILUER] =
  createRequestActionTypes("register/PHONE_CHECK");
const [AUTHNUM_CHECK, AUTHNUM_CHECK_SUCCESS, AUTHNUM_CHECK_FAILUER] =
  createRequestActionTypes("register/AUTHNUM_CHECK");

export const initializeRegisterForm = createAction(INITIALIZE_FORM);
export const changeValue = createAction(
  CHANGE_VALUE,
  ({ form, value, key }) => ({
    value,
    key,
    form,
  })
);
export const register = createAction(REGISTER, (form) => form);
export const idChk = createAction(ID_CHECK, ({ id }) => ({
  id,
}));
export const nickChk = createAction(NICK_CHECK, ({ nick }) => ({
  nick,
}));
export const phoneChk = createAction(NICK_CHECK, ({ phone }) => ({
  phone,
}));
export const authNumChk = createAction(NICK_CHECK, ({ authNum }) => ({
  authNum,
}));

export const registerProcess = createRequestSaga(
  REGISTER,
  registerAPI.register
);

export const idChkProcess = createRequestSaga(ID_CHECK, registerAPI.idChk);
export const nickChkProcess = createRequestSaga(
  NICK_CHECK,
  registerAPI.nickChk
);
export const phoneChkProcess = createRequestSaga(
  PHONE_CHECK,
  registerAPI.phoneChk
);
export const authNumChkProcess = createRequestSaga(
  AUTHNUM_CHECK,
  registerAPI.authNumChk
);

export function* registerSaga() {
  yield takeLatest(REGISTER, registerProcess);
  yield takeLatest(ID_CHECK, idChkProcess);
  yield takeLatest(NICK_CHECK, nickChkProcess);
  yield takeLatest(PHONE_CHECK, phoneChkProcess);
  yield takeLatest(AUTHNUM_CHECK, authNumChkProcess);
}

const initialState = {
  user: {
    email: null,
    id: null,
    domain: null,
    pwd: null,
    pwdConfirm: null,
    nick: null,
    phone: null,
    addr1: null,
    addr2: null,
    zipcode: null,
    gender: null,
  },
  auth: {
    auth: null,
    authError: null,
    idAuth: null,
    idError: null,
    pwdAuth: null,
    pwdError: null,
    nickAuth: null,
    nickError: null,
    phoneAuth: null,
    phoneError: null,
    authNum: null,
    authNumError: null,
  },
};

const RegisterMod = handleActions(
  {
    [INITIALIZE_FORM]: (state) => initialState,
    [CHANGE_VALUE]: (state, { payload: { form, value, key } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [REGISTER_SUCCESS]: (state, { payload: form }) => ({
      ...state,
      form,
    }),
    [REGISTER_FAILUER]: (state, action) => ({
      ...state,
    }),
    [ID_CHECK_SUCCESS]: (state, { payload: { idAuth } }) => ({
      ...state,
      idAuth: idAuth,
      idError: null,
    }),
    [ID_CHECK_FAILUER]: (state, { payload: { idError } }) => ({
      ...state,
      idAuth: null,
      idError: idError,
    }),
    [NICK_CHECK_SUCCESS]: (state, { payload: { nickAuth } }) => ({
      ...state,
      nickAuth: nickAuth,
      nickError: null,
    }),
    [NICK_CHECK_FAILUER]: (state, { payload: { nickError } }) => ({
      ...state,
      nickAuth: null,
      nickError: nickError,
    }),
    [PHONE_CHECK_SUCCESS]: (state, { payload: { phoneAuth } }) => ({
      ...state,
      phoneAuth: phoneAuth,
      phoneError: null,
    }),
    [PHONE_CHECK_FAILUER]: (state, { payload: { phoneError } }) => ({
      ...state,
      phoneAuth: null,
      phoneError: phoneError,
    }),
    [AUTHNUM_CHECK_SUCCESS]: (state, { payload: { authNum } }) => ({
      ...state,
      authNum: authNum,
      authNumError: null,
    }),
    [AUTHNUM_CHECK_FAILUER]: (state, { payload: { authNumError } }) => ({
      ...state,
      authNum: null,
      authNumError: authNumError,
    }),
  },
  initialState
);

export default RegisterMod;
