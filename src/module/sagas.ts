import { all } from 'redux-saga/effects'
import aboutSaga from '../pages/about/module/sagas';
import todoSaga from '../pages/todo/module/sagas';

const rootSagas = function* () {
  yield all([
    aboutSaga(),
    todoSaga(),
  ])
}
export default rootSagas;
