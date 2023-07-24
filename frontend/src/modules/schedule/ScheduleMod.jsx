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
const [
  GET_SAVED_LIST_DETAIL,
  GET_SAVED_LIST_DETAIL_SUCCESS,
  GET_SAVED_LIST_DETAIL_FAILURE,
] = createRequestActionTypes("schedule/GET_SAVED_LIST_DETAIL");

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
export const getSavedListDetail = createAction(
  GET_SAVED_LIST_DETAIL,
  ({ id, subject }) => ({
    id,
    subject,
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
const saveListSaga = createRequestSaga(SAVE_LIST, scheduleAPI.saveList);
const getSavedListSaga = createRequestSaga(
  GET_SAVED_LIST,
  scheduleAPI.getSavedList
);
const getSavedListDetailSaga = createRequestSaga(
  GET_SAVED_LIST_DETAIL,
  scheduleAPI.getSavedListDetail
);

export function* scheduleSaga() {
  yield takeLatest(ADD_SCHEDULE, addScheduleSaga);
  yield takeLatest(GET_SCHEDULE_LIST, getScheduleListSaga);
  yield takeLatest(SAVE_LIST, saveListSaga);
  yield takeLatest(GET_SAVED_LIST, getSavedListSaga);
  yield takeLatest(GET_SAVED_LIST_DETAIL, getSavedListDetailSaga);
}

const initialState = {
  addScheduleError: null,
  scheduleList: null,
  scheduleListError: null,
  saveScheduleListError: null,
  savedList: null,
  savedListError: null,
};

const ScheduleMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [ADD_SCHEDULE_SUCCESS]: (state, { payload: { addScheduleError } }) => ({
      ...state,
      addScheduleError,
    }),
    [ADD_SCHEDULE_FAILURE]: (state, { payload: { addScheduleError } }) => ({
      ...state,
      addScheduleError,
    }),
    [GET_SCHEDULE_LIST_SUCCESS]: (state, { payload: { scheduleList } }) => ({
      ...state,
      scheduleList,
      scheduleListError: null,
      addScheduleError: null,
    }),
    [GET_SCHEDULE_LIST_FAILURE]: (
      state,
      { payload: { scheduleListError } }
    ) => ({
      ...state,
      scheduleList: null,
      scheduleListError,
      addScheduleError: null,
    }),
    [SAVE_LIST_SUCCESS]: (state, { payload: { saveScheduleListError } }) => ({
      ...state,
      saveScheduleListError,
    }),
    [SAVE_LIST_FAILURE]: (state, { payload: { saveScheduleListError } }) => ({
      ...state,
      saveScheduleListError,
    }),
    [GET_SAVED_LIST_SUCCESS]: (state, { payload: { savedList } }) => ({
      ...state,
      savedList,
      savedListError: null,
      saveScheduleListError: null,
    }),
    [GET_SAVED_LIST_FAILURE]: (state, { payload: { savedListError } }) => ({
      ...state,
      savedList: null,
      savedListError,
      saveScheduleListError: null,
    }),
    [GET_SAVED_LIST_DETAIL_SUCCESS]: (
      state,
      { payload: { savedListDetail } }
    ) => ({
      ...state,
      savedListDetail,
      savedListDetailError: null,
    }),
    [GET_SAVED_LIST_DETAIL_FAILURE]: (
      state,
      { payload: { savedListDetailError } }
    ) => ({
      ...state,
      savedListDetail: null,
      savedListDetailError,
    }),
  },
  initialState
);

export default ScheduleMod;
