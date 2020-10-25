import { put, takeEvery } from 'redux-saga/effects'
import { SET_SENTENCES, REMOVE_SENTENCES, CHANGE_TODOLIST_BY_ID, CHANGE_TODOLIST_ALL_IDS } from './actionType';

export function* setSentences({ payload }) {
  const { changeType, todo } = payload;
  yield put({
    type: CHANGE_TODOLIST_BY_ID,
    payload: { todo },
  })
  if (changeType === 'add') {
    yield put({
      type: CHANGE_TODOLIST_ALL_IDS,
      payload: { changeType: 'add', id: todo.id },
    })
  }
}

export function* removeSentences({ payload }) {
  const { id } = payload;
  yield put({
    type: CHANGE_TODOLIST_ALL_IDS,
    payload: {changeType: 'remove', id},
  })
}

export default function* todoSaga() {
  yield takeEvery(SET_SENTENCES, setSentences)
  yield takeEvery(REMOVE_SENTENCES, removeSentences)
}