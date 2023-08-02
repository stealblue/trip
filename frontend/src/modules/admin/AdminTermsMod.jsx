import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as adminTermsAPI from "../../lib/api/admin/terms";

const CHANGE_PHOTO_SUCCESS = "profile/CHANGE_PHOTO_SUCCESS";
const CHANGE_PHOTO_FAILURE = "profile/CHANGE_PHOTO_FAILURE";

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

const initialState = {
  img: null,
  imgError: null,
};

const AdminTermsMod = handleActions(
  {
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
