import { put, call } from 'redux-saga/effects';
import * as Eff from 'redux-saga/effects';
import { SAVE_ABOUT, CHANGE_BY_ID_ICON, ISaveAboutAction } from './actionType';
import { ISentences } from './data';
import { Effect } from '../../../actionType';
import { querySentences } from '../serve';

const takeEvery: any = Eff.takeEvery;

export const fetchSentences: Effect<void, void, ISentences | void> = function* () {
  const result = yield call(querySentences);
  if (!result) {
    return;
  }
  const action: ISaveAboutAction = { 
    type: SAVE_ABOUT,
    payload: result,
  };
  yield put(action);
}

export default function* aboutSaga () {
  yield takeEvery(CHANGE_BY_ID_ICON, fetchSentences);
}