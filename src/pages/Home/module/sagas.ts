import { put, takeEvery } from 'redux-saga/effects'
import { SET_SENTENCES, REMOVE_SENTENCES, CHANGE_TODOLIST_BY_ID, CHANGE_TODOLIST_ALL_IDS } from './actionType';

export const setSentences = function* ({ payload }: any) {
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

export const removeSentences = function* ({ payload }: any) {
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