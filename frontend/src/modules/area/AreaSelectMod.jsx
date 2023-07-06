// import { createAction, handleActions } from "redux-actions";
// import { createRequestActionTypes } from "../../lib/createRequestSaga";
// import { takeLatest } from "redux-saga/effects";

// const INITIALIZE_AREA = createRequestActionTypes('area/INITIALIZE_AREA')
// const SELECT_AREA = createRequestActionTypes("area/SELECT_AREA");

// export const initializeArea = createAction(INITIALIZE_AREA);
// export const selectArea = createAction(SELECT_AREA, ({ areaCode }) => ({ areaCode }));

// export function* selectAreaSaga() { yield takeLatest(SELECT_AREA, selectArea); }

// const initialState = { areaCode: null }

// const AreaselectMod = handleActions(
//   {
//     [INITIALIZE_AREA]: (state) => initialState,
//     [SELECT_AREA]: (state, { payload: areaCode }) => ({ ...state, areaCode })
//   },
//   initialState
// );

// export default AreaselectMod;
