import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as trafficAPI from "../../lib/api/traffic";
import { takeLatest } from "redux-saga/effects";
import { produce } from 'immer';

const INITIALIZE = createRequestActionTypes('bus/INITIALIZE');
const [LIST_TERMINALS, LIST_TERMINALS_SUCCESS, LIST_TERMINALS_FAILURE] = createRequestActionTypes("bus/LIST_TERMINALS");
const [START_TERMINALS, START_TERMINALS_SUCCESS, START_TERMINALS_FAILURE] = createRequestActionTypes("bus/START_TERMINALS");
const [END_TERMINALS, END_TERMINALS_SUCCESS, END_TERMINALS_FAILURE] = createRequestActionTypes("bus/END_TERMINALS");
const SELECT_START = createRequestActionTypes('bus/SELECT_START');
const SELECT_END = createRequestActionTypes('bus/SELECT_END');

export const listTerminals = createAction(LIST_TERMINALS);
export const startTerminals = createAction(START_TERMINALS, ({ cityCode }) => ({ cityCode }));
export const endTerminals = createAction(END_TERMINALS, ({ cityCode }) => ({ cityCode }));
export const selectStart = createAction(SELECT_START, (terminalId) => (terminalId));
export const selectEnd = createAction(SELECT_END, (terminalId) => (terminalId));

const listTerminalsSaga = createRequestSaga(LIST_TERMINALS, trafficAPI.listTerminals);
const startTerminalsSaga = createRequestSaga(START_TERMINALS, trafficAPI.detailTerminals);
const endTerminalsSaga = createRequestSaga(END_TERMINALS, trafficAPI.detailTerminals);

export function* busSaga() {
  yield takeLatest(LIST_TERMINALS, listTerminalsSaga);
  yield takeLatest(START_TERMINALS, startTerminalsSaga);
  yield takeLatest(END_TERMINALS, endTerminalsSaga);
}

const initialState = {
  terminals: null,
  terminalStartDetails: null,
  terminalEndDetails: null,
  startTerminal: null,
  endTerminal: null,
  error: null
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
    [SELECT_START]: (state, { payload: terminalId }) =>
      produce(state, (draft) => {
        draft.terminalId = terminalId;
      }),
    [SELECT_END]: (state, { payload: terminalId }) =>
      produce(state, (draft) => {
        draft.terminalId = terminalId;
      })
  },
  initialState
);

export default BusMod;
