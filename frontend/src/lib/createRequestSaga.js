import { call, put } from "redux-saga/effects";
import { startLoading, finishLoading } from "../modules/loadingMod";

export const createRequestActionTypes = (type) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    console.log("제너레이터 함수 실행", action.payload);
    yield put(startLoading(type));
    try {
      console.log("type : ", type);
      console.log("request : ", request);
      console.log("action.payload : ", action.payload);
      const response = yield call(request, action.payload);
      console.log("response : ", response);
      yield put({
        type: SUCCESS,
        payload: response,
        meta: response,
      });
      console.log("try 끝");
    } catch (e) {
      console.log("error : ", e);
      yield put({
        type: FAILURE,
        payload: e?.response?.data,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
