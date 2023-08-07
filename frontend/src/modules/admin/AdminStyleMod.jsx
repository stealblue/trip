import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as adminStyleAPI from "../../lib/api/admin/style";

const CHANGE_VALUE = "adminStyle/CHANGE_VALUE";
const [GET_STYLE, GET_STYLE_SUCCESS, GET_STYLE_FAILURE] =
  createRequestActionTypes("adminStyle/GET_STYLE");
const [CHANGE_STYLE, CHANGE_STYLE_SUCCESS, CHANGE_STYLE_FAILURE] =
  createRequestActionTypes("adminStyle/CHANGE_STYLE");

export const changeValue = createAction(CHANGE_VALUE, ({ selectedStyle }) => ({
  selectedStyle,
}));
export const getStyle = createAction(GET_STYLE, ({ id }) => ({
  id,
}));
export const changeStyle = createAction(CHANGE_STYLE, ({ id, adminStyle }) => ({
  id,
  adminStyle,
}));

const getStyleProcess = createRequestSaga(GET_STYLE, adminStyleAPI.getStyle);
const changeStyleProcess = createRequestSaga(
  CHANGE_STYLE,
  adminStyleAPI.changeStyle
);

export function* adminStyleSaga() {
  yield takeLatest(GET_STYLE, getStyleProcess);
  yield takeLatest(CHANGE_STYLE, changeStyleProcess);
}

const initialState = {
  selectedStyle: null,
  adminStyle: null,
  adminStyleError: null,
};

const AdminStyleMod = handleActions(
  {
    [CHANGE_VALUE]: (state, { payload: { selectedStyle } }) => ({
      ...state,
      selectedStyle,
    }),
    [GET_STYLE_SUCCESS]: (state, { payload: { adminStyle } }) => ({
      ...state,
      adminStyle,
      adminStyleError: null,
    }),
    [GET_STYLE_FAILURE]: (state, { payload: { adminStyleError } }) => ({
      ...state,
      adminStyle: null,
      adminStyleError,
    }),
    [CHANGE_STYLE_SUCCESS]: (state, { payload: { adminStyle } }) => ({
      ...state,
      adminStyle,
      adminStyleError: null,
    }),
    [CHANGE_STYLE_FAILURE]: (state, { payload: { adminStyleError } }) => ({
      ...state,
      adminStyle: null,
      adminStyleError,
    }),
  },
  initialState
);

export default AdminStyleMod;
