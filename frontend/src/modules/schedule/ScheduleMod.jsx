import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as scheduleAPI from "../../lib/api/schedule";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE_ERROR = createRequestActionTypes("schedule/INITIALIZE_ERROR");
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
  DELETE_SAVED_LIST,
  DELETE_SAVED_LIST_SUCCESS,
  DELETE_SAVED_LIST_FAILURE,
] = createRequestActionTypes("schedule/DELETE_SAVED_LIST");
const [
  GET_SAVED_LIST_DETAIL,
  GET_SAVED_LIST_DETAIL_SUCCESS,
  GET_SAVED_LIST_DETAIL_FAILURE,
] = createRequestActionTypes("schedule/GET_SAVED_LIST_DETAIL");
const [
  GET_DUPLICATE_CHECK,
  GET_DUPLICATE_CHECK_SUCCESS,
  GET_DUPLICATE_CHECK_FAILURE,
] = createRequestActionTypes("schedule/GET_DUPLICATE_CHECK");

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
export const deleteSavedList = createAction(
  DELETE_SAVED_LIST,
  ({ id, _id }) => ({
    id,
    _id,
  })
);
export const getSavedListDetail = createAction(
  GET_SAVED_LIST_DETAIL,
  ({ id, subject }) => ({
    id,
    subject,
  })
);
export const getDuplicateCheck = createAction(
  GET_DUPLICATE_CHECK,
  ({ id, subject }) => ({
    id,
    subject,
  })
);
export const initializeError = createAction(INITIALIZE_ERROR);

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
const deleteSavedListSaga = createRequestSaga(
  DELETE_SAVED_LIST,
  scheduleAPI.deleteSavedList
);
const getSavedListDetailSaga = createRequestSaga(
  GET_SAVED_LIST_DETAIL,
  scheduleAPI.getSavedListDetail
);
const getDuplicateCheckSaga = createRequestSaga(
  GET_DUPLICATE_CHECK,
  scheduleAPI.getDuplicateCheck
);

export function* scheduleSaga() {
  yield takeLatest(ADD_SCHEDULE, addScheduleSaga);
  yield takeLatest(GET_SCHEDULE_LIST, getScheduleListSaga);
  yield takeLatest(SAVE_LIST, saveListSaga);
  yield takeLatest(GET_SAVED_LIST, getSavedListSaga);
  yield takeLatest(DELETE_SAVED_LIST, deleteSavedListSaga);
  yield takeLatest(GET_SAVED_LIST_DETAIL, getSavedListDetailSaga);
  yield takeLatest(GET_DUPLICATE_CHECK, getDuplicateCheckSaga);
}

const initialState = {
  addScheduleError: null,
  scheduleList: null,
  scheduleListError: null,
  saveScheduleListError: null,
  savedList: null,
  savedListError: null,
  savedListDetail: null,
  savedListDetailError: null,
  savedListDeleteError: null,
  duplicateCheck: null,
};

const ScheduleMod = handleActions(
  {
    [INITIALIZE_ERROR]: (state) => ({
      ...state,
      addScheduleError: null,
      duplicateCheck: null,
      savedListDeleteError: null,
    }),
    [ADD_SCHEDULE_SUCCESS]: (state, { payload: { addScheduleError } }) => ({
      ...state,
      addScheduleError,
      scheduleListError: null,
    }),
    [ADD_SCHEDULE_FAILURE]: (state, { payload: { addScheduleError } }) => ({
      ...state,
      addScheduleError,
      scheduleListError: null,
    }),
    [GET_SCHEDULE_LIST_SUCCESS]: (state, { payload: { scheduleList } }) => ({
      ...state,
      scheduleList,
      scheduleListError: false,
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
      scheduleList: null,
      duplicateCheck: null,
    }),
    [SAVE_LIST_FAILURE]: (state, { payload: { saveScheduleListError } }) => ({
      ...state,
      saveScheduleListError,
      duplicateCheck: null,
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
    [DELETE_SAVED_LIST_SUCCESS]: (
      state,
      { payload: { savedListDeleteError } }
    ) => ({
      ...state,
      savedListDeleteError,
    }),
    [DELETE_SAVED_LIST_FAILURE]: (
      state,
      { payload: { savedListDeleteError } }
    ) => ({
      ...state,
      savedListDeleteError,
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
    [GET_DUPLICATE_CHECK_SUCCESS]: (
      state,
      { payload: { duplicateCheck } }
    ) => ({
      ...state,
      duplicateCheck,
    }),
    [GET_DUPLICATE_CHECK_FAILURE]: (
      state,
      { payload: { duplicateCheck } }
    ) => ({
      ...state,
      duplicateCheck,
    }),
  },
  initialState
);

export default ScheduleMod;
