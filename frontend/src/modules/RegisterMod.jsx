import { createAction, handleActions } from "redux-actions";

const INITIALIZE_FORM = "register/INITIALIZE_FORM";
const REGISTER = "register/REGISTER";
const REGISTER_SUCCESS = "register/REGISTER_SUCCESS";
const REGISTER_FAILUER = "register/REGISTER_FAILUER";

export const initializeRegisterForm = createAction(INITIALIZE_FORM);
export const register = createAction(REGISTER,({value, key}) => ({value, key}));
export const registerSuccess = createAction(REGISTER_SUCCESS, (form) => form);
export const registerFailure = createAction(REGISTER_FAILUER, (error) => error);

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
    [REGISTER]: (state, {payload: {value, key}}) => ({
      ...state,
      [key]: value,
    }),
    [REGISTER_SUCCESS]: (state, action) => ({
      ...state,
    }),
    [REGISTER_FAILUER]: (state, action) => ({
      ...state,
    }),
  },
  initialState
);

export default RegisterMod;
