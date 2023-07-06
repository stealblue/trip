import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as registerAPI from "../lib/api/register";
import { takeLatest } from "redux-saga/effects";
import { produce } from "immer";

const INITIALIZE_FORM = "register/INITIALIZE_FORM";
const CHANGE_VALUE = "register/CHANGE_VALUE";
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes("register/REGISTER");
const [ID_CHECK, ID_CHECK_SUCCESS, ID_CHECK_FAILURE] =
  createRequestActionTypes("register/ID_CHECK");
const ID_MODIFY = "register/ID_MODIFY";
const PWD_CHECK = "register/PWD_CHECK";
const [NICK_CHECK, NICK_CHECK_SUCCESS, NICK_CHECK_FAILURE] =
  createRequestActionTypes("register/NICK_CHECK");
const NICK_MODIFY = "register/NICK_MODIFY";
const [PHONE_CHECK, PHONE_CHECK_SUCCESS, PHONE_CHECK_FAILURE] =
  createRequestActionTypes("register/PHONE_CHECK");
const PHONE_MODIFY = "register/PHONE_MODIFY";

const [AUTHNUM_CHECK, AUTHNUM_CHECK_SUCCESS, AUTHNUM_CHECK_FAILURE] =
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
export const idModify = createAction(ID_MODIFY);
export const pwdChk = createAction(PWD_CHECK, ({ form, key, value }) => ({
  form,
  key,
  value,
}));
export const nickChk = createAction(NICK_CHECK, ({ nick }) => ({
  nick,
}));
export const nickModify = createAction(NICK_MODIFY);
export const phoneChk = createAction(PHONE_CHECK, ({ phone }) => ({
  phone,
}));
export const phoneModify = createAction(PHONE_MODIFY);
export const authNumChk = createAction(AUTHNUM_CHECK, ({ authNum, phone }) => ({
  authNum,
  phone,
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
    [REGISTER_FAILURE]: (state, action) => ({
      ...state,
    }),
    [ID_CHECK_SUCCESS]: (state, { payload: { idAuth } }) =>
      produce(state, (draft) => {
        draft["auth"]["idAuth"] = idAuth;
        draft["auth"]["idError"] = false;
      }),
    [ID_CHECK_FAILURE]: (state, { payload: { idError } }) =>
      produce(state, (draft) => {
        draft["auth"]["idAuth"] = false;
        draft["auth"]["idError"] = idError;
      }),
    [ID_MODIFY]: (state) =>
      produce(state, (draft) => {
        draft["auth"]["idAuth"] = null;
        draft["auth"]["idError"] = null;
      }),
    [PWD_CHECK]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [NICK_CHECK_SUCCESS]: (state, { payload: { nickAuth } }) =>
      produce(state, (draft) => {
        draft["auth"]["nickAuth"] = nickAuth;
        draft["auth"]["nickError"] = false;
      }),
    [NICK_CHECK_FAILURE]: (state, { payload: { nickError } }) =>
      produce(state, (draft) => {
        draft["auth"]["nickAuth"] = false;
        draft["auth"]["nickError"] = nickError;
      }),
    [NICK_MODIFY]: (state) =>
      produce(state, (draft) => {
        draft["auth"]["nickAuth"] = null;
        draft["auth"]["nickError"] = null;
      }),
    [PHONE_CHECK_SUCCESS]: (state, { payload: { phoneAuth } }) => ({
      ...state,
      phoneAuth: phoneAuth,
      phoneError: null,
    }),
    [PHONE_CHECK_FAILURE]: (state, { payload: { phoneError } }) => ({
      ...state,
      phoneAuth: null,
      phoneError: phoneError,
    }),
    [PHONE_MODIFY]: (state) =>
      produce(state, (draft) => {
        draft["auth"]["phoneAuth"] = null;
        draft["auth"]["phoneError"] = null;
      }),
    [AUTHNUM_CHECK_SUCCESS]: (state, { payload: { authNum } }) => ({
      ...state,
      authNum: authNum,
      authNumError: null,
    }),
    [AUTHNUM_CHECK_FAILURE]: (state, { payload: { authNumError } }) => ({
      ...state,
      authNum: null,
      authNumError: authNumError,
    }),
  },
  initialState
);

export default RegisterMod;
