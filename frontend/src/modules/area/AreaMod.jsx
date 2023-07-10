import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as areaAPI from "../../lib/api/area";
import { takeLatest } from "redux-saga/effects";
import { produce } from 'immer';

const INITIALIZE = createRequestActionTypes('area/INITIALIZE');
const [LIST_AREAS, LIST_AREAS_SUCCESS, LIST_AREAS_FAILURE] = createRequestActionTypes("area/LIST_AREAS");
const SHOW_AREA_CODE = createRequestActionTypes('area/SHOW_AREA_CODE');
const SHOW_PAGE_NO = createRequestActionTypes('area/SHOW_PAGE_NO');
const SHOW_CONTENT_TYPE_ID = createRequestActionTypes('area/SHOW_CONTENT_TYPE_ID');
const UNLOAD_PAGE = 'area/UNLOAD_PAGE';

export const listAreas = createAction(LIST_AREAS, ({ pageNo, areaCode, contentTypeId }) => ({ pageNo, areaCode, contentTypeId }));
export const showAreaCode = createAction(SHOW_AREA_CODE, (areaCode) => (areaCode));
export const showPageNo = createAction(SHOW_PAGE_NO, (pageNo) => (pageNo));
export const showContentTypeId = createAction(SHOW_CONTENT_TYPE_ID, (contentTypeId) => (contentTypeId));
export const unloadPage = createAction(UNLOAD_PAGE);

const listAreasSaga = createRequestSaga(LIST_AREAS, areaAPI.listAreas);

export function* areaSaga() {
  yield takeLatest(LIST_AREAS, listAreasSaga);
}

const initialState = {
  areaCode: null,
  pageNo: null,
  contentTypeId: null,
  areas: null,
  error: null,
};

const AreaMod = handleActions(
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
    [UNLOAD_PAGE]: () => initialState
  },
  initialState
);

export default AreaMod;
