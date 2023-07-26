import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as areaAPI from "../../lib/api/area";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = createRequestActionTypes("area/INITIALIZE");
const [LIST_AREAS, LIST_AREAS_SUCCESS, LIST_AREAS_FAILURE] =
  createRequestActionTypes("area/LIST_AREAS");
const [LIST_DETAIL, LIST_DETAIL_SUCCESS, LIST_DETAIL_FAILURE] =
  createRequestActionTypes("area/LIST_DETAIL");

export const listAreas = createAction(LIST_AREAS, ({ pageNo, areaCode }) => ({
  pageNo,
  areaCode,
}));
export const listDetail = createAction(
  LIST_DETAIL,
  ({ contentId, contentTypeId }) => ({
    contentId,
    contentTypeId,
  })
);

const listAreasSaga = createRequestSaga(LIST_AREAS, areaAPI.listAreas);
const listDetailSaga = createRequestSaga(LIST_DETAIL, areaAPI.listDetail);

export function* areaListSaga() {
  yield takeLatest(LIST_AREAS, listAreasSaga);
  yield takeLatest(LIST_DETAIL, listDetailSaga);
}

const initialState = {
  areas: null,
  error: null,
  getDetail: null,
  getDetailError: null,
};

const AreaListMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [LIST_AREAS_SUCCESS]: (state, { payload: areas }) => ({
      ...state,
      areas,
    }),
    [LIST_AREAS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [LIST_DETAIL_SUCCESS]: (state, { payload: { getDetail } }) => ({
      ...state,
      getDetail,
      getDetailError: null,
    }),
    [LIST_DETAIL_FAILURE]: (state, { payload: { getDetailError } }) => ({
      ...state,
      getDetail: null,
      getDetailError,
    }),
  },
  initialState
);

export default AreaListMod;
