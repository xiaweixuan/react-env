import { put, takeEvery, call } from 'redux-saga/effects'
import { SAVE_ABOUT, CHANGE_BY_ID_ICON } from './actionType';
import { querySentences } from '../serve';

export function* fetchSentences() {
  const result = yield call(querySentences);
  yield put({ 
    type: SAVE_ABOUT,
    payload: result,
  })
}

export default function* aboutSaga() {
  yield takeEvery(CHANGE_BY_ID_ICON, fetchSentences)
}