import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../../lib/createRequestSaga";
import * as ticketAPI from "../../lib/api/ticket";
import { takeLatest } from "redux-saga/effects";
import { produce } from "immer";

const INITIALIZE = createRequestActionTypes("ticket/INITIALIZE");
const [LIST_TICKETS, LIST_TICKETS_SUCCESS, LIST_TICKETS_FAILURE] = createRequestActionTypes("ticket/LIST_TICKETS");
const [FIND_VACANCY, FIND_VACANCY_SUCCESS, FIND_VACANCY_FAILURE] = createRequestActionTypes("ticket/FIND_VACANCY");
const [CREATE_TICKET, CREATE_TICKET_SUCCESS, CREATE_TICKET_FAILURE] = createRequestActionTypes('ticket/CREATE_TICKET');
const UNLOAD_PAGE = "ticket/UNLOAD_PAGE";

export const initialize = createAction(INITIALIZE);
// export const listTickets = createAction(LIST_TICKETS,
//   ({ no, category, uno, startPlace, startDate, endPlace, endDate, type, createAt, page }) =>
//     ({ no, category, uno, startPlace, startDate, endPlace, endDate, type, createAt, page })
// );
export const listTickets = createAction(LIST_TICKETS, ({ page }) => ({ page }));
export const findVacancy = createAction(FIND_VACANCY,
  ({ category, type, startPlace, endPlace, startDate, endDate }) =>
    ({ category, type, startPlace, endPlace, startDate, endDate })
);
export const createTicket = createAction(CREATE_TICKET,
  ({ category, uno, type, price, startPlace, startDate, endPlace, endDate, seats }) =>
    ({ category, uno, type, price, startPlace, startDate, endPlace, endDate, seats })
);
export const unloadPage = createAction(UNLOAD_PAGE);

const listTicketsSaga = createRequestSaga(LIST_TICKETS, ticketAPI.listTickets);
const findVacancySaga = createRequestSaga(FIND_VACANCY, ticketAPI.findVacancy);
const createTicketSaga = createRequestSaga(CREATE_TICKET, ticketAPI.createTicket);

export function* ticketSaga() {
  yield takeLatest(LIST_TICKETS, listTicketsSaga);
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
    [LIST_TICKETS_SUCCESS]: (state, { payload: { tickets } }) =>
      produce(state, (draft) => {
        draft.tickets = tickets;
      }),
    [LIST_TICKETS_FAILURE]: (state, { payload: { error } }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [FIND_VACANCY_SUCCESS]: (state, { payload: { tickets } }) =>
      produce(state, (draft) => {
        draft.tickets = tickets;
      }),
    [FIND_VACANCY_FAILURE]: (state, { payload: { error } }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [CREATE_TICKET_SUCCESS]: (state, { payload: message }) =>
      produce(state, (draft) => {
        draft.message = message;
      }),
    [CREATE_TICKET_FAILURE]: (state, { payload: error }) =>
      produce(state, (draft) => {
        draft.error = error;
      }),
    [UNLOAD_PAGE]: () => initialState,
  },
  initialState
);

export default TicketMod;
