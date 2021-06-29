import { all, fork } from 'redux-saga/effects';

import networkSaga from './network/network.sagas';

export function* rootSaga() {
  yield all([fork(networkSaga)]);
}
