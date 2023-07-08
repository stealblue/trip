import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as areaAPI from "../../lib/api/area";
import { takeLatest } from "redux-saga/effects";
import { produce } from 'immer';

const INITIALIZE = createRequestActionTypes('area/INITIALIZE');
const [LIST_AREAS, LIST_AREAS_SUCCESS, LIST_AREAS_FAILURE] = createRequestActionTypes("area/LIST_AREAS");
const SHOW_AREA_CODE = createRequestActionTypes('area/SHOW_AREA_CODE');

export const listAreas = createAction(LIST_AREAS, ({ pageNo, areaCode }) => ({ pageNo, areaCode }));
export const showAreaCode = createAction(SHOW_AREA_CODE, (areaCode) => (areaCode));

const listAreasSaga = createRequestSaga(LIST_AREAS, areaAPI.listAreas);

export function* areaSaga() {
  yield takeLatest(LIST_AREAS, listAreasSaga);
}

const initialState = {
  areaCode: null,
  PageNo: null,
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
      })
  },
  initialState
);

export default AreaMod;
