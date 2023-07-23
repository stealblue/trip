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
const [SAVE_LIST, SAVE_LIST_SUCCESS, SAVE_LIST_FAILURE] =
  createRequestActionTypes("schedule/SAVE_LIST");
const [GET_SAVED_LIST, GET_SAVED_LIST_SUCCESS, GET_SAVED_LIST_FAILURE] =
  createRequestActionTypes("schedule/GET_SAVED_LIST");

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
export const saveList = createAction(
  SAVE_LIST,
  ({ id, subject, scheduleList }) => ({
    id,
    subject,
    scheduleList,
  })
);
export const getSavedList = createAction(GET_SAVED_LIST, ({ id }) => ({
  id,
}));

const addScheduleSaga = createRequestSaga(
  ADD_SCHEDULE,
  scheduleAPI.addSchedule
);
const getScheduleListSaga = createRequestSaga(
  GET_SCHEDULE_LIST,
  scheduleAPI.getScheduleList
);
const saveListSaga = createRequestSaga(SAVE_LIST, scheduleAPI.saveList);
const getSavedListSaga = createRequestSaga(
  GET_SAVED_LIST,
  scheduleAPI.getSavedList
);

export function* scheduleSaga() {
  yield takeLatest(ADD_SCHEDULE, addScheduleSaga);
  yield takeLatest(GET_SCHEDULE_LIST, getScheduleListSaga);
  yield takeLatest(SAVE_LIST, saveListSaga);
  yield takeLatest(GET_SAVED_LIST, getSavedListSaga);
}

const initialState = {
  addSchedule: null,
  addScheduleError: null,
  scheduleList: null,
  scheduleListError: null,
  saveScheduleList: null,
  saveScheduleListError: null,
  savedList: null,
  savedListError: null,
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
    [SAVE_LIST_SUCCESS]: (state, { payload: { saveScheduleList } }) => ({
      ...state,
      saveScheduleList,
      saveScheduleListError: null,
    }),
    [SAVE_LIST_FAILURE]: (state, { payload: { saveScheduleListError } }) => ({
      ...state,
      saveScheduleList: null,
      saveScheduleListError,
    }),
    [GET_SAVED_LIST_SUCCESS]: (state, { payload: { savedList } }) => ({
      ...state,
      savedList,
      savedListError: null,
    }),
    [GET_SAVED_LIST_FAILURE]: (state, { payload: { savedListError } }) => ({
      ...state,
      savedList: null,
      savedListError,
    }),
  },
  initialState
);

export default ScheduleMod;
