import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as trafficAPI from "../../lib/api/traffic";
import { takeLatest } from "redux-saga/effects";
import { produce } from 'immer';

const INITIALIZE = createRequestActionTypes('bus/INITIALIZE');
const [LIST_TERMINALS, LIST_TERMINALS_SUCCESS, LIST_TERMINALS_FAILURE] = createRequestActionTypes("bus/LIST_TERMINALS");
const [START_TERMINALS, START_TERMINALS_SUCCESS, START_TERMINALS_FAILURE] = createRequestActionTypes("bus/START_TERMINALS");
const [END_TERMINALS, END_TERMINALS_SUCCESS, END_TERMINALS_FAILURE] = createRequestActionTypes("bus/END_TERMINALS");
const [LIST_BUSES, LIST_BUSES_SUCCESS, LIST_BUSES_FAILURE] = createRequestActionTypes('bus/LIST_BUSES');
const SELECT_START_TERMINAL = createRequestActionTypes('bus/SELECT_START');
const SELECT_END_TERMINAL = createRequestActionTypes('bus/SELECT_END');
const SELECT_DATE_BUS = createRequestActionTypes('train/SELECT_DATE');
const SELECT_PAGE_BUS = createRequestActionTypes('train/SELECT_PAGE');
const UNLOAD_BUS = 'bus/UNLOAD_BUS';

export const listTerminals = createAction(LIST_TERMINALS);
export const startTerminals = createAction(START_TERMINALS, ({ cityCode }) => ({ cityCode }));
export const endTerminals = createAction(END_TERMINALS, ({ cityCode }) => ({ cityCode }));
export const selectStartTerminal = createAction(SELECT_START_TERMINAL, ({ terminalId }) => ({ terminalId }));
export const selectEndTerminal = createAction(SELECT_END_TERMINAL, ({ terminalId }) => ({ terminalId }));
export const selectDate = createAction(SELECT_DATE_BUS, ({ dateBus }) => ({ dateBus }));
export const selectPage = createAction(SELECT_PAGE_BUS, (pageNoBus) => (pageNoBus));
export const listBuses = createAction(LIST_BUSES, ({ startTerminal, endTerminal, dateBus, pageNoBus }) => ({ startTerminal, endTerminal, dateBus, pageNoBus }));
export const unloadBus = createAction(UNLOAD_BUS);

const listTerminalsSaga = createRequestSaga(LIST_TERMINALS, trafficAPI.listTerminals);
const startTerminalsSaga = createRequestSaga(START_TERMINALS, trafficAPI.detailTerminals);
const endTerminalsSaga = createRequestSaga(END_TERMINALS, trafficAPI.detailTerminals);
const listBusesSaga = createRequestSaga(LIST_BUSES, trafficAPI.listBuses);

export function* busSaga() {
  yield takeLatest(LIST_TERMINALS, listTerminalsSaga);
  yield takeLatest(START_TERMINALS, startTerminalsSaga);
  yield takeLatest(END_TERMINALS, endTerminalsSaga);
  yield takeLatest(LIST_BUSES, listBusesSaga);
}

const initialState = {
  terminals: null,
  terminalStartDetails: null,
  terminalEndDetails: null,
  startTerminal: null,
  endTerminal: null,
  error: null,
  dateBus: null,
  pageNoBus: 1
};

const BusMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [LIST_TERMINALS_SUCCESS]: (state, { payload: terminals }) =>
      produce(state, (draft) => {
        draft.terminals = terminals;
      }),
    [LIST_TERMINALS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [START_TERMINALS_SUCCESS]: (state, { payload: terminalStartDetails }) =>
      produce(state, (draft) => {
        draft.terminalStartDetails = terminalStartDetails;
      }),
    [START_TERMINALS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [END_TERMINALS_SUCCESS]: (state, { payload: terminalEndDetails }) =>
      produce(state, (draft) => {
        draft.terminalEndDetails = terminalEndDetails;
      }),
    [END_TERMINALS_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [LIST_BUSES_SUCCESS]: (state, { payload: resultBuses }) =>
      produce(state, (draft) => {
        draft.resultBuses = resultBuses;
      }),
    [LIST_BUSES_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [SELECT_START_TERMINAL]: (state, { payload: terminalId }) =>
      produce(state, (draft) => {
        draft.terminalId = terminalId;
      }),
    [SELECT_END_TERMINAL]: (state, { payload: terminalId }) =>
      produce(state, (draft) => {
        draft.terminalId = terminalId;
      }),
    [SELECT_DATE_BUS]: (state, { payload: dateBus }) =>
      produce(state, (draft) => {
        draft.dateBus = dateBus;
      }),
    [SELECT_PAGE_BUS]: (state, { payload: pageNoBus }) =>
      produce(state, (draft) => {
        draft.pageNoBus = pageNoBus;
      }),
    [UNLOAD_BUS]: () => initialState
  },
  initialState
);

export default BusMod;
