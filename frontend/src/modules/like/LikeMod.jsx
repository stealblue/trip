// import { createAction, handleActions } from "redux-actions";
// import createRequestSaga, {
//   createRequestActionTypes,
// } from "../../lib/createRequestSaga";
// import { takeLatest } from "redux-saga/effects";
// import * as likeAPI from "../../lib/api/like";

// const IS_LIKE = createRequestActionTypes("like/IS_LIKE");

// export const isLike = createAction(IS_LIKE);

// const isLikeSaga = createRequestSaga(IS_LIKE, likeAPI.isLike);

// export function* ProfileSaga() {
//   yield takeLatest(IS_LIKE, isLikeSaga);
// }

// const initialState = {
//   like: null,
//   isLike: false,
// };

// const LikeMod = handleActions(
//   {
//     []
//   },
//   initialState
// );

// export default LikeMod;
