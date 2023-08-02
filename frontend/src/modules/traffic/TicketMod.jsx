import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../../lib/createRequestSaga";
import * as ticketAPI from "../../lib/api/ticket";
import { takeLatest } from "redux-saga/effects";
import { produce } from "immer";

const INITIALIZE = createRequestActionTypes("ticket/INITIALIZE");
const [FIND_VACANCY, FIND_VACANCY_SUCESS, FIND_VACANCY_FAILURE] = createRequestActionTypes("ticket/FIND_VACANCY");
const [CREATE_TICKET, CREATE_TICKET_SUCESS, CREATE_TICKET_FAILURE] = createRequestActionTypes('ticket/CREATE_TICKET');
const UNLOAD_PAGE = "ticket/UNLOAD_PAGE";

export const initialize = createAction(INITIALIZE);
export const findVacancy = createAction(FIND_VACANCY,
  ({ category, type, startPlace, endPlace, startDate, endDate }) =>
    ({ category, type, startPlace, endPlace, startDate, endDate })
);
export const createTicket = createAction(CREATE_TICKET,
  ({ category, uno, type, price, startPlace, startDate, endPlace, endDate, seats }) =>
    ({ category, uno, type, price, startPlace, startDate, endPlace, endDate, seats })
);
export const unloadPage = createAction(UNLOAD_PAGE);

const findVacancySaga = createRequestSaga(FIND_VACANCY, ticketAPI.findVacancy);
const createTicketSaga = createRequestSaga(CREATE_TICKET, ticketAPI.createTicket);

export function* ticketSaga() {
  yield takeLatest(FIND_VACANCY, findVacancySaga);
  yield takeLatest(CREATE_TICKET, createTicketSaga);
}

const initialState = {
  message: null,
  tickets: null,
  error: null,
};

const TicketMod = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    // [ADD_WISHLIST_SUCCESS]: (state, { payload: { wishList } }) =>
    //   produce(state, (draft) => {
    //     draft.wishList = wishList;
    //   }),
    // [ADD_WISHLIST_FAILURE]: (state, { payload: { error } }) =>
    //   produce(state, (draft) => {
    //     draft.error = error;
    //   }),
    [UNLOAD_PAGE]: () => initialState,
  },
  initialState
);

export default TicketMod;
