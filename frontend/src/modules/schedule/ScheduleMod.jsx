import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as scheduleAPI from "../../lib/api/schedule";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = createRequestActionTypes("schedule/INITIALIZE");
const [ADD_SCHEDULE, ADD_SCHEDULE_SUCCESS, ADD_SCHEDULE_FAILURE] =
  createRequestActionTypes("schedule/ADD_SCHEDULE");
const [
  GET_SCHEDULE_LIST,
  GET_SCHEDULE_LIST_SUCCESS,
  GET_SCHEDULE_LIST_FAILURE,
] = createRequestActionTypes("schedule/GET_SCHEDULE_LIST");
const [CHANGE_PROCEDURE, CHANGE_PROCEDURE_SUCCESS, CHANGE_PROCEDURE_FAILURE] =
  createRequestActionTypes("schedule/CHANGE_PROCEDURE");

export const addSchedule = createAction(
  ADD_SCHEDULE,
  ({ id, contentId, title, contentTypeId }) => ({
    id,
    contentId,
    title,
    contentTypeId,
  })
);
export const getScheduleList = createAction(GET_SCHEDULE_LIST, ({ id }) => ({
  id,
}));
export const changeProcedure = createAction(
  CHANGE_PROCEDURE,
  ({ id, scheduleList }) => ({
    id,
    scheduleList,
  })
);

const addScheduleSaga = createRequestSaga(
  ADD_SCHEDULE,
  scheduleAPI.addSchedule
);
const getScheduleListSaga = createRequestSaga(
  GET_SCHEDULE_LIST,
  scheduleAPI.getScheduleList
);
const changeProcedureSaga = createRequestSaga(
  CHANGE_PROCEDURE,
  scheduleAPI.changeProcedure
);

export function* scheduleSaga() {
  yield takeLatest(ADD_SCHEDULE, addScheduleSaga);
  yield takeLatest(GET_SCHEDULE_LIST, getScheduleListSaga);
  yield takeLatest(CHANGE_PROCEDURE, changeProcedureSaga);
}

const initialState = {
  addSchedule: null,
  addScheduleError: null,
  scheduleList: null,
  scheduleListError: null,
};

const ScheduleMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [ADD_SCHEDULE_SUCCESS]: (state, { payload: { addSchedule } }) => ({
      ...state,
      addSchedule,
      addScheduleError: null,
    }),
    [ADD_SCHEDULE_FAILURE]: (state, { payload: { addScheduleError } }) => ({
      ...state,
      addSchedule: null,
      addScheduleError,
    }),
    [GET_SCHEDULE_LIST_SUCCESS]: (state, { payload: { scheduleList } }) => ({
      ...state,
      scheduleList,
      scheduleListError: null,
    }),
    [GET_SCHEDULE_LIST_FAILURE]: (
      state,
      { payload: { scheduleListError } }
    ) => ({
      ...state,
      scheduleList: null,
      scheduleListError,
    }),
    [CHANGE_PROCEDURE_SUCCESS]: (state, { payload: { scheduleList } }) => ({
      ...state,
      scheduleList,
      scheduleListError: null,
    }),
    [CHANGE_PROCEDURE_FAILURE]: (
      state,
      { payload: { scheduleListError } }
    ) => ({
      ...state,
      scheduleList: null,
      scheduleListError,
    }),
  },
  initialState
);

export default ScheduleMod;
