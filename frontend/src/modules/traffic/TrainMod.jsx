import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as trafficAPI from "../../lib/api/traffic";
import { takeLatest } from "redux-saga/effects";
import { produce } from 'immer';

const INITIALIZE = createRequestActionTypes('train/INITIALIZE');
const [LIST_STATIONS, LIST_STATIONS_SUCCESS, LIST_STATIONS_FAILURE] = createRequestActionTypes("train/LIST_STATIONS");
const [START_STATIONS, START_STATIONS_SUCCESS, START_STATIONS_FAILURE] = createRequestActionTypes("train/START_STATIONS");
const [END_STATIONS, END_STATIONS_SUCCESS, END_STATIONS_FAILURE] = createRequestActionTypes("train/END_STATIONS");
const [List_TRAINS, List_TRAINS_SUCCESS, List_TRAINS_FAILURE] = createRequestActionTypes('train/List_TRAINS');
const SELECT_START = createRequestActionTypes('train/SELECT_START');
const SELECT_END = createRequestActionTypes('train/SELECT_END');

export const listStations = createAction(LIST_STATIONS);
export const startStations = createAction(START_STATIONS, ({ cityCode }) => ({ cityCode }));
export const endStations = createAction(END_STATIONS, ({ cityCode }) => ({ cityCode }));
export const selectStart = createAction(SELECT_START, ({ stationId }) => ({ stationId }));
export const selectEnd = createAction(SELECT_END, ({ stationId }) => ({ stationId }));
export const listTrains = createAction(List_TRAINS, ({ startStation, endStation, date }) => ({ startStation, endStation, date }));

const listStationsSaga = createRequestSaga(LIST_STATIONS, trafficAPI.listStations);
const startStationsSaga = createRequestSaga(START_STATIONS, trafficAPI.detailStations);
const endStationsSaga = createRequestSaga(END_STATIONS, trafficAPI.detailStations);
// const selectStartSaga = createRequestSaga(SELECT_START);
const listTrainsSaga = createRequestSaga(List_TRAINS, trafficAPI.listTrains);

export function* trainSaga() {
  yield takeLatest(LIST_STATIONS, listStationsSaga);
  yield takeLatest(START_STATIONS, startStationsSaga);
  yield takeLatest(END_STATIONS, endStationsSaga);
  // yield takeLatest(SELECT_START, selectStartSaga);
  yield takeLatest(List_TRAINS, listTrainsSaga);
}

const initialState = {
  stations: null,
  stationStartDetails: null,
  stationEndDetails: null,
  startStation: null,
  endStation: null,
  resultTrains: null,
  error: null
};

const TrainMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [LIST_STATIONS_SUCCESS]: (state, { payload: stations }) =>
      produce(state, (draft) => {
        draft.stations = stations;
      }),
    [LIST_STATIONS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [START_STATIONS_SUCCESS]: (state, { payload: stationStartDetails }) =>
      produce(state, (draft) => {
        draft.stationStartDetails = stationStartDetails;
      }),
    [START_STATIONS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [END_STATIONS_SUCCESS]: (state, { payload: stationEndDetails }) =>
      produce(state, (draft) => {
        draft.stationEndDetails = stationEndDetails;
      }),
    [END_STATIONS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [List_TRAINS_SUCCESS]: (state, { payload: resultTrains }) =>
      produce(state, (draft) => {
        draft.resultTrains = resultTrains;
      }),
    [List_TRAINS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [SELECT_START]: (state, { payload: stationId }) =>
      produce(state, (draft) => {
        draft.startStation = stationId;
      }),
    [SELECT_END]: (state, { payload: stationId }) =>
      produce(state, (draft) => {
        draft.endStation = stationId;
      })
  },
  initialState
);

export default TrainMod;
