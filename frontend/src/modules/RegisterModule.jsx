import { createAction, handleActions } from "redux-actions";

const REGISTER_REQUEST = "auth/REGISTER_REQUEST";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILUER = "auth/REGISTER_FAILUER";

export const registeRequest = createAction(REGISTER_REQUEST, request => request);
export const registerSuccess = createAction(REGISTER_SUCCESS, form => form);
export const registerFailure = createAction(REGISTER_FAILUER, error => error);

const initialState = {
        id: null,
        pwd: null,
        nick: null,
        phone: null,
        addr1: null,
        addr2: null,
        zipcode: null,
        gender: null,
        grade: null
};

const RegisterModule = handleActions(
    {
        [REGISTER_REQUEST]: (state, action) => ({
            ...state,
        }),
        [REGISTER_SUCCESS]: (state, action) => ({
            ...state,
        }),
        [REGISTER_FAILUER]: (state, action) => ({
            ...state,
        }),
    },
    initialState,
);

export default RegisterModule;
