import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as adminTermsAPI from "../../lib/api/admin/terms";

const [GET_ADMIN, GET_ADMIN_SUCCESS, GET_ADMIN_FAILURE] =
  createRequestActionTypes("admin/GET_ADMIN");
const CHANGE_PHOTO_SUCCESS = "admin/CHANGE_PHOTO_SUCCESS";
const CHANGE_PHOTO_FAILURE = "admin/CHANGE_PHOTO_FAILURE";

export const getAdmin = createAction(GET_ADMIN, ({ id }) => ({ id }));
export const changePhotoSuccess = createAction(
  CHANGE_PHOTO_SUCCESS,
  ({ img }) => ({
    img,
  })
);
export const changePhotoFailure = createAction(
  CHANGE_PHOTO_FAILURE,
  ({ imgError }) => ({
    imgError,
  })
);

const getAdminProcess = createRequestSaga(GET_ADMIN, adminTermsAPI.getAdmin);

export function* adminTermsSaga() {
  yield takeLatest(GET_ADMIN, getAdminProcess);
}

const initialState = {
  admin: null,
  adminError: null,
  img: null,
  imgError: null,
};

const AdminTermsMod = handleActions(
  {
    [GET_ADMIN_SUCCESS]: (state, { payload: { admin } }) => ({
      ...state,
      admin,
      adminError: null,
    }),
    [GET_ADMIN_FAILURE]: (state, { payload: { adminError } }) => ({
      ...state,
      admin: null,
      adminError,
    }),
    [CHANGE_PHOTO_SUCCESS]: (state, { payload: { img } }) => ({
      ...state,
      img,
      imgError: null,
    }),
    [CHANGE_PHOTO_FAILURE]: (state, { payload: { imgError } }) => ({
      ...state,
      img: null,
      imgError,
    }),
  },
  initialState
);

export default AdminTermsMod;
