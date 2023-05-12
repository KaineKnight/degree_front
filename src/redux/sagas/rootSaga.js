import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import brandsSaga from './brandsSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    brandsSaga(),
  // newsSaga(),
  // userSaga(),
  ]);
}

export default rootSaga;
