import { createAction, handleActions } from "redux-actions";

const INITIALIZE = "write/INITIALIZE"; //모든 내용 초기화
const CHANGE_FIELD = "wrtie/CHANGE_FIELD"; // 특정 key값 바꾸기

// 액션지정
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

// state 초깃값 설정
const initialState = {
  title: "",
  body: "",
  tags: [],
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState, // 초기 상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state, // 불변성 유지
      [key]: value, //특정 key값 없데이트
    }),
  },
  initialState
);

export default write;
