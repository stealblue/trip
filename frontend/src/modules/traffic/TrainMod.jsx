import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as trafficAPI from "../../lib/api/traffic";
import { takeLatest } from "redux-saga/effects";
import { produce } from 'immer';

const INITIALIZE = createRequestActionTypes('train/INITIALIZE');
const [LIST_STATIONS, LIST_STATIONS_SUCCESS, LIST_STATIONS_FAILURE] = createRequestActionTypes("train/LIST_STATIONS");
const [START_STATIONS, START_STATIONS_SUCCESS, START_STATIONS_FAILURE] = createRequestActionTypes("train/START_STATIONS");
const [END_STATIONS, END_STATIONS_SUCCESS, END_STATIONS_FAILURE] = createRequestActionTypes("train/END_STATIONS");
const [LIST_TRAINS, LIST_TRAINS_SUCCESS, LIST_TRAINS_FAILURE] = createRequestActionTypes('train/List_TRAINS');
const SELECT_START_STATION = createRequestActionTypes('train/SELECT_START_STATION');
const SELECT_END_STATION = createRequestActionTypes('train/SELECT_END_STATION');
const SELECT_DATE_TRAIN = createRequestActionTypes('train/SELECT_DATE_TRAIN');
const SELECT_PAGE_TRAIN = createRequestActionTypes('train/SELECT_PAGE_TRAIN');
const UNLOAD_TRAIN = 'train/UNLOAD_TRAIN';

export const listStations = createAction(LIST_STATIONS);
export const startStations = createAction(START_STATIONS, ({ cityCode }) => ({ cityCode }));
export const endStations = createAction(END_STATIONS, ({ cityCode }) => ({ cityCode }));
export const selectStartStation = createAction(SELECT_START_STATION, ({ stationId }) => ({ stationId }));
export const selectEndStation = createAction(SELECT_END_STATION, ({ stationId }) => ({ stationId }));
export const selectDateTrain = createAction(SELECT_DATE_TRAIN, ({ dateTrain }) => ({ dateTrain }));
export const selectPageTrain = createAction(SELECT_PAGE_TRAIN, (pageNoTrain) => (pageNoTrain));
export const listTrains = createAction(LIST_TRAINS, ({ startStation, endStation, dateTrain, pageNoTrain }) => ({ startStation, endStation, dateTrain, pageNoTrain }));
export const unloadTrain = createAction(UNLOAD_TRAIN);

const listStationsSaga = createRequestSaga(LIST_STATIONS, trafficAPI.listStations);
const startStationsSaga = createRequestSaga(START_STATIONS, trafficAPI.detailStations);
const endStationsSaga = createRequestSaga(END_STATIONS, trafficAPI.detailStations);
const listTrainsSaga = createRequestSaga(LIST_TRAINS, trafficAPI.listTrains);

export function* trainSaga() {
  yield takeLatest(LIST_STATIONS, listStationsSaga);
  yield takeLatest(START_STATIONS, startStationsSaga);
  yield takeLatest(END_STATIONS, endStationsSaga);
  yield takeLatest(LIST_TRAINS, listTrainsSaga);
}

const initialState = {
  stations: null,
  stationStartDetails: null,
  stationEndDetails: null,
  startStation: null,
  endStation: null,
  resultTrains: null,
  error: null,
  dateTrain: null,
  pageNoTrain: 1
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
    [LIST_TRAINS_SUCCESS]: (state, { payload: resultTrains }) =>
      produce(state, (draft) => {
        draft.resultTrains = resultTrains;
      }),
    [LIST_TRAINS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [SELECT_START_STATION]: (state, { payload: stationId }) =>
      produce(state, (draft) => {
        draft.startStation = stationId;
      }),
    [SELECT_END_STATION]: (state, { payload: stationId }) =>
      produce(state, (draft) => {
        draft.endStation = stationId;
      }),
    [SELECT_DATE_TRAIN]: (state, { payload: dateTrain }) =>
      produce(state, (draft) => {
        draft.dateTrain = dateTrain;
      }),
    [SELECT_PAGE_TRAIN]: (state, { payload: pageNoTrain }) =>
      produce(state, (draft) => {
        draft.pageNoTrain = pageNoTrain;
      }),
    [UNLOAD_TRAIN]: () => initialState
  },
  initialState
);

export default TrainMod;
