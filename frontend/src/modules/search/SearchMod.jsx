import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as areaAPI from "../../lib/api/area";
import { takeLatest } from "redux-saga/effects";
import { produce } from 'immer';

const INITIALIZE = createRequestActionTypes('search/INITIALIZE');
const [LIST_AREAS, LIST_AREAS_SUCCESS, LIST_AREAS_FAILURE] = createRequestActionTypes("search/LIST_AREAS");
const SHOW_AREA_CODE = createRequestActionTypes('search/SHOW_AREA_CODE');
const SHOW_PAGE_NO = createRequestActionTypes('search/SHOW_PAGE_NO');
const SHOW_CONTENT_TYPE_ID = createRequestActionTypes('search/SHOW_CONTENT_TYPE_ID');
const SHOW_KEYWORD = createRequestActionTypes('search/SHOW_KEYWORD');
const UNLOAD_PAGE = 'search/UNLOAD_PAGE';

export const listAreas = createAction(LIST_AREAS, ({ pageNo, areaCode, contentTypeId, keyword }) => ({ pageNo, areaCode, contentTypeId, keyword }));
export const showAreaCode = createAction(SHOW_AREA_CODE, (areaCode) => (areaCode));
export const showPageNo = createAction(SHOW_PAGE_NO, (pageNo) => (pageNo));
export const showContentTypeId = createAction(SHOW_CONTENT_TYPE_ID, (contentTypeId) => (contentTypeId));
export const showKeyword = createAction(SHOW_KEYWORD, (keyword) => (keyword));
export const unloadPage = createAction(UNLOAD_PAGE);

const listSearchSaga = createRequestSaga(LIST_AREAS, areaAPI.listSearch);

export function* searchSaga() {
  yield takeLatest(LIST_AREAS, listSearchSaga);
}

const initialState = {
  areaCode: null,
  pageNo: 1,
  contentTypeId: null,
  keyword: null,
  areas: null,
  error: null,
};

const SearchMod = handleActions(
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
    [SHOW_KEYWORD]: (state, { payload: keyword }) =>
      produce(state, (draft) => {
        draft.keyword = keyword;
      }),
    [SHOW_CONTENT_TYPE_ID]: (state, { payload: contentTypeId }) =>
      produce(state, (draft) => {
        draft.contentTypeId = contentTypeId;
      }),
    [UNLOAD_PAGE]: () => initialState
  },
  initialState
);

export default SearchMod;
