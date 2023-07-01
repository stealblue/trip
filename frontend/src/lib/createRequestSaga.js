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
      const response = yield call(request, action.payload);
      console.log("응답 받았어요======== : ", response);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (e) {
      console.log("에러 받았어요========", e?.response?.data);
      yield put({
        type: FAILURE,
        payload: e?.response?.data,
        error: true,
      });
    }
    yield put(finishLoading(type));
  };
}
