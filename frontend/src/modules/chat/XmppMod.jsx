// reduser
import { all, call, takeLatest, put } from 'redux-saga/effects'
import users from '../../lib/api/chat/user';
import createXmppClient from '../../lib/api/chat/xmppClient';

export const types = {
  REGISTER_START: 'REGISTER_START',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  LOGIN_START: 'LOGIN_START',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  GET_LAST_START: 'GET_LAST_START',
  GET_LAST_SUCCESS: 'GET_LAST_SUCCESS',
  GET_LAST_FAILURE: 'GET_LAST_FAILURE',
  LOGOUT: 'LOGOUT',
  RECONNECT_START: 'RECONNECT_START',
  SET_CLIENT: 'SET_CLIENT',
  SET_JID: 'SET_JID',
  SET_CREDENTIALS: 'SET_CREDENTIALS',
  SET_TO: 'SET_TO'
}

export const registerStart = ({ user, password }) => ({
  type: types.REGISTER_START,
  payload: { user, password }
})

export const registerFailure = ({ error }) => ({
  type: types.REGISTER_FAILURE,
  payload: { error }
})

export const loginStart = ({ user, password }) => ({
  type: types.LOGIN_START,
  payload: { user, password }
})

export const loginFailure = ({ error }) => ({
  type: types.LOGIN_FAILURE,
  payload: { error }
})

export const getLastStart = user => ({
  type: types.GET_LAST_START,
  payload: user
})

export const getLastSuccess = ({ timestamp, status }) => ({
  type: types.GET_LAST_SUCCESS,
  payload: { timestamp, status }
})

export const getLastFailure = ({ error }) => ({
  type: types.GET_LAST_FAILURE,
  payload: { error }
})

export const logout = () => ({
  type: types.LOGOUT
})

export const reconnectStart = ({ jid, password }) => ({
  type: types.RECONNECT_START,
  payload: { jid, password }
})

export const setClient = client => ({
  type: types.SET_CLIENT,
  payload: client
})

export const setJid = jid => ({
  type: types.SET_JID,
  payload: jid
})

export const setCredentials = credentials => ({
  type: types.SET_CREDENTIALS,
  payload: credentials
})

export const setTo = user => ({
  type: types.SET_TO,
  payload: user
})

export function* register({ payload: { user, password } }) {
  try {
    const { data, error } = yield call(users.register, { user, password })
    if (!error && data && data.includes('successfully registered')) {
      yield createXmppClient({ user, password })
      yield put(setTo(''))
    } else {
      yield put(registerFailure({ error }))
    }
  } catch (error) {
    yield put(registerFailure({ error }))
  }
}

export function* onRegisterStart() {
  yield takeLatest(types.REGISTER_START, register)
}


export function* login({ payload: { user, password } }) {
  try {
    const { data, error } = yield call(users.checkPassword, { user, password })
    if (!error && data === 0) {
      yield createXmppClient({ user, password })
      yield put(setTo(''))
    } else {
      yield put(loginFailure({ error: 'Login and/or password wrong.' }))
    }
  } catch (error) {
    yield put(loginFailure({ error }))
  }
}

export function* onLoginStart() {
  yield takeLatest(types.LOGIN_START, login)
}


export function* reconnect({ payload: { jid, password } }) {
  try {
    yield createXmppClient({ jid, password })
    yield put(setTo(''))
  } catch (error) {
    yield put(loginFailure({ error }))
  }
}

export function* onReconnectStart() {
  yield takeLatest(types.RECONNECT_START, reconnect)
}


export function* getLast({ payload: user }) {
  try {
    const { data, error } = yield call(users.getLast, user)
    if (!error && data) {
      yield put(getLastSuccess({ ...data }))
    }
  } catch (error) {
    yield put(getLastFailure({ error }))
  }
}

export function* onGetLastStart() {
  yield takeLatest(types.GET_LAST_START, getLast)
}


export function* XmppSaga() {
  yield all([
    call(onRegisterStart),
    call(onLoginStart),
    call(onReconnectStart),
    call(onGetLastStart)
  ])
}

const INITIAL_STATE = {
  host: 'chat.yi.or.kr',
  client: null,
  jid: '',
  password: '',
  lastActivity: null,
  to: '',
  error: null
}

const XmppMod = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case types.REGISTER_FAILURE:
      return { ...state, jid: '', password: '', ...payload }
    case types.LOGIN_FAILURE:
      return { ...state, jid: '', password: '', ...payload }
    case types.GET_LAST_SUCCESS:
      return { ...state, error: null, lastActivity: { ...payload } }
    case types.LOGOUT:
      return { ...INITIAL_STATE }
    case types.SET_CLIENT:
      return { ...state, client: payload }
    case types.SET_JID:
      return { ...state, jid: payload }
    case types.SET_CREDENTIALS:
      return { ...state, password: payload }
    case types.SET_TO:
      return { ...state, to: payload }
    default:
      return state
  }
}

export default XmppMod;