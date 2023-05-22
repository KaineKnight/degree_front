import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import brandsSaga from './brandsSaga';
import categoriesSaga from './categoriesSaga';
import modelsSaga from './modelsSaga';
import problemsSaga from './problemsSaga';
import tasksSaga from './tasksSaga';
import placemarksSaga from './placemarksSaga';
import questionsSaga from './questionsSaga';

function* rootSaga() {
  yield all([
    authSaga(),
    brandsSaga(),
    categoriesSaga(),
    modelsSaga(),
    problemsSaga(),
    tasksSaga(),
    placemarksSaga(),
    questionsSaga(),
  // userSaga(),
  ]);
}

export default rootSaga;
