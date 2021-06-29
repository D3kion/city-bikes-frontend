import { all, fork } from 'redux-saga/effects';

import networkSaga from './network/network.sagas';
import stationSaga from './station/station.sagas';

export function* rootSaga() {
  yield all([fork(networkSaga), fork(stationSaga)]);
}
