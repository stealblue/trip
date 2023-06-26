import { createAction, handleActions } from "redux-actions";


const  LOGIN_REQUEST = "auth/LOGIN_REQUEST";
const  LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const  LOGIN_FAILURE = "auth/LOGIN_FAILURE";

export const loginRequest = createAction(LOGIN_REQUEST, request => request);
export const loginSuccess = createAction(LOGIN_SUCCESS, form => form);
export const loginFailure = createAction(LOGIN_FAILURE, error => error);

const initialState = {
    id: null,
    pwd: null,
};

const LoginModule = handleActions(
    {
        [LOGIN_REQUEST]: (state, action) => ({

        }),
        [LOGIN_SUCCESS]: (state, action) => ({

        }),
        [LOGIN_FAILURE]: (state, action) => ({

        }),
    },
    initialState,
);

export default LoginModule;