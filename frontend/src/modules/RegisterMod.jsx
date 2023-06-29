import { createAction, handleActions } from "redux-actions";
import createRequestSaga from "../lib/createRequestSaga";
import * as registerAPI from "../lib/api/register";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE_FORM = "register/INITIALIZE_FORM";
const REGISTER = "register/REGISTER";
const REGISTER_SUCCESS = "register/REGISTER_SUCCESS";
const REGISTER_FAILUER = "register/REGISTER_FAILUER";

export const initializeRegisterForm = createAction(INITIALIZE_FORM);
export const register = createAction(REGISTER, ({ value, key, form }) => ({
  value,
  key,
  form,
}));

export const registerProcess = createRequestSaga(
  REGISTER,
  registerAPI.register
);

export function* registerSaga() {
  yield takeLatest(REGISTER, registerProcess);
}

const initialState = {
  id: null,
  pwd: null,
  nick: null,
  phone: null,
  addr1: null,
  addr2: null,
  zipcode: null,
  gender: null,
};

const RegisterMod = handleActions(
  {
    [INITIALIZE_FORM]: (state) => initialState,
    [REGISTER]: (state, { payload: { value, key } }) => ({
      ...state,
      [key]: value,
    }),
    [REGISTER_SUCCESS]: (state, { payload: { value, key } }) => ({
      ...state,
      [key]: value,
    }),
    [REGISTER_FAILUER]: (state, action) => ({
      ...state,
    }),
  },
  initialState
);

export default RegisterMod;
