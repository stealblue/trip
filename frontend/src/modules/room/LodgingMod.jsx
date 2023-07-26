import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as areaAPI from "../../lib/api/area";
import { takeLatest } from "redux-saga/effects";
import { produce } from "immer";

const INITIALIZE = createRequestActionTypes("room/INITIALIZE");
const [LIST_AREAS, LIST_AREAS_SUCCESS, LIST_AREAS_FAILURE] =
  createRequestActionTypes("room/LIST_AREAS");
const [LIST_DETAIL, LIST_DETAIL_SUCCESS, LIST_DETAIL_FAILURE] =
  createRequestActionTypes("room/LIST_DETAIL");
const SHOW_AREA_CODE = createRequestActionTypes("room/SHOW_AREA_CODE");
const SHOW_PAGE_NO = createRequestActionTypes("room/SHOW_PAGE_NO");
const SHOW_CONTENT_TYPE_ID = createRequestActionTypes(
  "room/SHOW_CONTENT_TYPE_ID"
);
const UNLOAD_PAGE = "room/UNLOAD_PAGE";

export const listAreas = createAction(
  LIST_AREAS,
  ({ pageNo, areaCode, contentTypeId }) => ({ pageNo, areaCode, contentTypeId })
);
export const showAreaCode = createAction(
  SHOW_AREA_CODE,
  (areaCode) => areaCode
);
export const showPageNo = createAction(SHOW_PAGE_NO, (pageNo) => pageNo);
export const showContentTypeId = createAction(
  SHOW_CONTENT_TYPE_ID,
  (contentTypeId) => contentTypeId
);
export const unloadPage = createAction(UNLOAD_PAGE);
export const listDetail = createAction(
  LIST_DETAIL,
  ({ contentId, contentTypeId }) => ({
    contentId,
    contentTypeId,
  })
);

const listAreasSaga = createRequestSaga(LIST_AREAS, areaAPI.listAreas);
const listDetailSaga = createRequestSaga(LIST_DETAIL, areaAPI.listDetail);

export function* lodgingSaga() {
  yield takeLatest(LIST_AREAS, listAreasSaga);
  yield takeLatest(LIST_DETAIL, listDetailSaga);
}

const initialState = {
  areaCode: null,
  pageNo: 1,
  contentTypeId: null,
  areas: null,
  error: null,
  getDetail: null,
  getDetailError: null,
};

const LodgingMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [LIST_AREAS_SUCCESS]: (state, { payload: areas }) =>
      produce(state, (draft) => {
        draft.areas = areas;
      }),
    [LIST_AREAS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [SHOW_AREA_CODE]: (state, { payload: areaCode }) =>
      produce(state, (draft) => {
        draft.areaCode = areaCode;
      }),
    [SHOW_PAGE_NO]: (state, { payload: pageNo }) =>
      produce(state, (draft) => {
        draft.pageNo = pageNo;
      }),
    [SHOW_CONTENT_TYPE_ID]: (state, { payload: contentTypeId }) =>
      produce(state, (draft) => {
        draft.contentTypeId = contentTypeId;
      }),
    [UNLOAD_PAGE]: () => initialState,
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

export default LodgingMod;
