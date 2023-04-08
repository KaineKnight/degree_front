import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
  // newsSaga(),
  // authSaga(),
  // userSaga(),
  ]);
}

export default rootSaga;
