import { createAction, handleActions } from "redux-actions";

const INITIALIZE_FORM = "login/INITIALIZE_FORM";
const LOGIN = "login/LOGIN";
const LOGIN_SUCCESS = "login/LOGIN_SUCCESS";
const LOGIN_FAILURE = "login/LOGIN_FAILURE";

export const initializeLoginForm = createAction(INITIALIZE_FORM);
export const login = createAction(LOGIN, ({value, key}) => ({
  value, key
}));
export const loginSuccess = createAction(LOGIN_SUCCESS, (form) => form);
export const loginFailure = createAction(LOGIN_FAILURE, (error) => error);

const initialState = {
  id: null,
  pwd: null,
};

const LoginMod = handleActions(
  {
    [INITIALIZE_FORM]: (state) => initialState,
    [LOGIN]: (state, {payload: {value, key}}) => ({
      ...state,
      [key]: value,
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
    }),
    [LOGIN_FAILURE]: (state, action) => ({
      ...state,
    }),
  },
  initialState
);

export default LoginMod;
