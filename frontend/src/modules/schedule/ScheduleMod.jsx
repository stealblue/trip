import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as scheduleAPI from "../../lib/api/schedule";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = createRequestActionTypes("schedule/INITIALIZE");
const [ADD_SCHEDULE, ADD_SCHEDULE_SUCCESS, ADD_SCHEDULE_FAILURE] =
  createRequestActionTypes("schedule/ADD_SCHEDULE");
const [GET_SCHEDULE, GET_SCHEDULE_SUCCESS, GET_SCHEDULE_FAILURE] =
  createRequestActionTypes("schedule/GET_SCHEDULE");
const [CHANGE_SCHEDULE, CHANGE_SCHEDULE_SUCCESS, CHANGE_SCHEDULE_FAILURE] =
  createRequestActionTypes("schedule/CHANGE_SCHEDULE");
const [CREATE_SCHEDULE, CREATE_SCHEDULE_SUCCESS, CREATE_SCHEDULE_FAILURE] =
  createRequestActionTypes("schedule/CREATE_SCHEDULE");
const [
  GET_COMPLETED_LIST,
  GET_COMPLETED_LIST_SUCCESS,
  GET_COMPLETED_LIST_FAILURE,
] = createRequestActionTypes("schedule/GET_COMPLETED_LIST");

export const addSchedule = createAction(ADD_SCHEDULE, ({ id, contentId }) => ({
  id,
  contentId,
}));
export const getSchedule = createAction(GET_SCHEDULE, ({ id }) => ({
  id,
}));
export const changeSchedule = createAction(CHANGE_SCHEDULE, ({ id }) => ({
  id,
}));
export const createSchedule = createAction(CREATE_SCHEDULE, ({ id }) => ({
  id,
}));
export const getCompletedList = createAction(GET_COMPLETED_LIST, ({ id }) => ({
  id,
}));

const addScheduleSaga = createRequestSaga(
  ADD_SCHEDULE,
  scheduleAPI.addSchedule
);
const getScheduleSaga = createRequestSaga(
  GET_SCHEDULE,
  scheduleAPI.getSchedule
);
const changeScheduleSaga = createRequestSaga(
  CHANGE_SCHEDULE,
  scheduleAPI.changeSchedule
);
const createScheduleSaga = createRequestSaga(
  CREATE_SCHEDULE,
  scheduleAPI.createSchedule
);
const getCompletedListSaga = createRequestSaga(
  GET_COMPLETED_LIST,
  scheduleAPI.getCompletedList
);

export function* ScheduleSaga() {
  yield takeLatest(ADD_SCHEDULE, addScheduleSaga);
  yield takeLatest(GET_SCHEDULE, getScheduleSaga);
  yield takeLatest(CHANGE_SCHEDULE, changeScheduleSaga);
  yield takeLatest(CREATE_SCHEDULE, createScheduleSaga);
  yield takeLatest(GET_COMPLETED_LIST, getCompletedListSaga);
}

const initialState = {
  addToSchedule: null,
  addToScheduleError: null,
  schedule: [],
  scheduleError: null,
  createList: null,
  createListError: null,
  completedList: null,
  completedListError: null,
};

const ScheduleMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [ADD_SCHEDULE_SUCCESS]: (state, { payload: { addToSchedule } }) => ({
      ...state,
      addToSchedule,
      addToScheduleError: null,
    }),
    [ADD_SCHEDULE_FAILURE]: (state, { payload: { addToScheduleError } }) => ({
      ...state,
      addToSchedule: null,
      addToScheduleError,
    }),
    [GET_SCHEDULE_SUCCESS]: (state, { payload: { schedule } }) => ({
      ...state,
      schedule,
      scheduleError: null,
    }),
    [GET_SCHEDULE_FAILURE]: (state, { payload: { scheduleError } }) => ({
      ...state,
      schedule: null,
      scheduleError,
    }),
    [CHANGE_SCHEDULE_SUCCESS]: (state, { payload: { schedule } }) => ({
      ...state,
      schedule,
      scheduleError: null,
    }),
    [CHANGE_SCHEDULE_FAILURE]: (state, { payload: { scheduleError } }) => ({
      ...state,
      schedule: null,
      scheduleError,
    }),
    [CREATE_SCHEDULE_SUCCESS]: (state, { payload: { createList } }) => ({
      ...state,
      createList,
      createListError: null,
    }),
    [CREATE_SCHEDULE_FAILURE]: (state, { payload: { createListError } }) => ({
      ...state,
      createList: null,
      createListError,
    }),
    [GET_COMPLETED_LIST_SUCCESS]: (state, { payload: { completedList } }) => ({
      ...state,
      completedList,
      completedListError: null,
    }),
    [GET_COMPLETED_LIST_FAILURE]: (
      state,
      { payload: { completedListError } }
    ) => ({
      ...state,
      completedList: null,
      completedListError,
    }),
  },
  initialState
);

export default ScheduleMod;
