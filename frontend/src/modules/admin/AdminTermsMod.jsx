import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import { takeLatest } from "redux-saga/effects";
import * as adminTermsAPI from "../../lib/api/admin/terms";
import { produce } from "immer";

const INITIALIZE_FORM = "admin/INITIALIZE_FORM";
const CHANGE_VALUE = "admin/CHANGE_VALUE";
const GET_NEWADMIN = "admin/GET_NEWADMIN";
const [GET_ADMIN, GET_ADMIN_SUCCESS, GET_ADMIN_FAILURE] =
  createRequestActionTypes("admin/GET_ADMIN");
const CHANGE_PHOTO_SUCCESS = "admin/CHANGE_PHOTO_SUCCESS";
const CHANGE_PHOTO_FAILURE = "admin/CHANGE_PHOTO_FAILURE";
const [CHANGE_INFORM, CHANGE_INFORM_SUCCESS, CHANGE_INFORM_FAILURE] =
  createRequestActionTypes("admin/CHANGE_INFORM");
const INPUT_ADDRESS = "admin/INPUT_ADDRESS";

export const initializeForm = createAction(INITIALIZE_FORM);
export const changeValue = createAction(
  CHANGE_VALUE,
  ({ form, value, key }) => ({
    value,
    key,
    form,
  })
);
export const getNewAdmin = createAction(
  GET_NEWADMIN,
  ({ id, nick, phone, zipcode, addr1, addr2 }) => ({
    id,
    nick,
    phone,
    zipcode,
    addr1,
    addr2,
  })
);
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
export const changeInform = createAction(
  CHANGE_INFORM,
  ({ id, businessName, nick, phone, zipcode, addr1, addr2 }) => ({
    id,
    businessName,
    nick,
    phone,
    zipcode,
    addr1,
    addr2,
  })
);
export const inputAddress = createAction(
  INPUT_ADDRESS,
  ({ addr1, zipcode }) => ({
    addr1,
    zipcode,
  })
);

const getAdminProcess = createRequestSaga(GET_ADMIN, adminTermsAPI.getAdmin);
const changeInformProcess = createRequestSaga(
  CHANGE_INFORM,
  adminTermsAPI.changeInform
);

export function* adminTermsSaga() {
  yield takeLatest(GET_ADMIN, getAdminProcess);
  yield takeLatest(CHANGE_INFORM, changeInformProcess);
}

const initialState = {
  newAdmin: {
    new_id: null,
    new_nick: null,
    new_phone: null,
    new_zipcode: null,
    new_addr1: null,
    new_addr2: null,
  },
  admin: null,
  adminError: null,
  img: null,
  imgError: null,
  changeInformError: null,
};

const AdminTermsMod = handleActions(
  {
    [INITIALIZE_FORM]: (state) => ({
      ...state,
      newAdmin: {
        new_id: null,
        new_nick: null,
        new_phone: null,
        new_zipcode: null,
        new_addr1: null,
        new_addr2: null,
      },
      changeInformError: null,
    }),
    [CHANGE_VALUE]: (state, { payload: { form, value, key } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [GET_NEWADMIN]: (
      state,
      { payload: { id, nick, phone, zipcode, addr1, addr2 } }
    ) => ({
      ...state,
      newAdmin: {
        new_id: id,
        new_nick: nick,
        new_phone: phone,
        new_zipcode: zipcode,
        new_addr1: addr1,
        new_addr2: addr2,
      },
    }),
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
    [CHANGE_INFORM_SUCCESS]: (state, { payload: { admin } }) => ({
      ...state,
      admin,
      changeInformError: false,
    }),
    [CHANGE_INFORM_FAILURE]: (state, { payload: { changeInformError } }) => ({
      ...state,
      admin: null,
      changeInformError,
    }),
    [INPUT_ADDRESS]: (state, { payload: { addr1, zipcode } }) =>
      produce(state, (draft) => {
        draft["newAdmin"]["addr1"] = addr1;
        draft["newAdmin"]["zipcode"] = zipcode;
      }),
  },
  initialState
);

export default AdminTermsMod;
