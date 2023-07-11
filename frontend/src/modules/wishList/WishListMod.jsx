import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as wishListAPI from "../../lib/api/wishList";
import { takeLatest } from "redux-saga/effects";
import { produce } from 'immer';

const INITIALIZE = createRequestActionTypes('wishList/INITIALIZE');
const [ADD_WISHLIST, ADD_WISHLIST_SUCCESS, ADD_WISHLIST_FAILURE] = createRequestActionTypes('wishList/ADD_WISHLIST');
const UNLOAD_PAGE = 'wishList/UNLOAD_PAGE';

export const addWishList = createAction(ADD_WISHLIST, ({ id, contentid }) => ({ id, contentid }));
export const unloadPage = createAction(UNLOAD_PAGE);

const addWishListSaga = createRequestSaga(ADD_WISHLIST, wishListAPI.addWishList);

export function* wishListSaga() {
  yield takeLatest(ADD_WISHLIST, addWishListSaga);
}

const initialState = {
  wishList: null,
  wishLists: null,
  error: null,
};

const WishListMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [ADD_WISHLIST_SUCCESS]: (state, { payload: wishList }) =>
      produce(state, (draft) => {
        draft.wishList = wishList;
      }),
    [ADD_WISHLIST_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [UNLOAD_PAGE]: () => initialState
  },
  initialState
);

export default WishListMod;
