import { combineReducers } from "redux";
// import { all } from "redux-saga/effect";
import write from "./write";

const rootReducer = combineReducers({
  write,
});

// export function* rootSaga() {
//   yield all([]);
// }

export default rootReducer;
