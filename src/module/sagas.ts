import { all } from 'redux-saga/effects'
import aboutSaga from '../pages/About/module/sagas';
// import todoSaga from '../pages/Home/module/sagas';

const rootSagas = function* () {
  yield all([
    aboutSaga(),
    // todoSaga(),
  ])
}
export default rootSagas;