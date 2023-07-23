import { all, call, takeLatest, put } from 'redux-saga/effects';

import service from '../../lib/api/chat/room';


export const types = {
  CREATE_ROOM_START: 'CREATE_ROOM_START',
  CREATE_ROOM_FAILURE: 'CREATE_ROOM_FAILURE',
  ROOMS_LIST_START: 'ROOMS_LIST_START',
  ROOMS_LIST_SUCCESS: 'ROOMS_LIST_SUCCESS',
  ROOMS_LIST_FAILURE: 'ROOMS_LIST_FAILURE',
  DESTROY_ROOM_START: 'DESTROY_ROOM_START',
  DESTROY_ROOM_FAILURE: 'DESTROY_ROOM_FAILURE',
}

export const createRoomStart = (name) => ({
  type: types.CREATE_ROOM_START,
  payload: name
})

export const createRoomFailure = (error) => ({
  type: types.CREATE_ROOM_FAILURE,
  payload: error
})

export const roomsListStart = () => ({
  type: types.ROOMS_LIST_START
})

export const roomsListSuccess = (rooms) => ({
  type: types.ROOMS_LIST_SUCCESS,
  payload: rooms
})

export const roomsListFailure = ({ error }) => ({
  type: types.ROOMS_LIST_FAILURE,
  payload: { error }
})

export const destroyRoomStart = (room) => ({
  type: types.DESTROY_ROOM_START,
  payload: room
})

export const destroyRoomFailure = ({ error }) => ({
  type: types.DESTROY_ROOM_FAILURE,
  payload: { error }
})

export function* createRoom({ payload: name }) {
  try {
    const { data, error } = yield call(service.create, name)
    if (data !== 0) yield put(createRoomFailure(error))
    else yield put(roomsListStart())
  } catch (error) {
    yield put(createRoomFailure(error))
  }
}

export function* onCreateRoomStart() {
  yield takeLatest(types.CREATE_ROOM_START, createRoom)
}


export function* roomsList() {
  try {
    const { data, error } = yield call(service.list)
    if (error) yield put(roomsListFailure({ error }))
    else yield put(roomsListSuccess(data))
  } catch (error) {
    yield put(roomsListFailure({ error }))
  }
}

export function* onRoomsListStart() {
  yield takeLatest(types.ROOMS_LIST_START, roomsList)
}


export function* destroyRoom({ payload: room }) {
  try {
    const { error } = yield call(service.delete, room)
    if (error) yield put(destroyRoomFailure({ error }))
    yield put(roomsListStart())
  } catch (error) {
    yield put(destroyRoomFailure({ error }))
  }
}

export function* onDestroyRoomStart() {
  yield takeLatest(types.DESTROY_ROOM_START, destroyRoom)
}


export function* RoomSaga() {
  yield all([
    call(onCreateRoomStart),
    call(onRoomsListStart),
    call(onDestroyRoomStart)
  ])
}

const INITIAL_STATE = {
  list: [],
  error: null
}

const RoomMod = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case types.CREATE_ROOM_FAILURE:
      return { ...state, error: payload }
    case types.ROOMS_LIST_SUCCESS:
      return { error: null, list: payload }
    case types.ROOMS_LIST_FAILURE:
      return { error: payload, list: [] }
    default:
      return state
  }
}

export default RoomMod;

