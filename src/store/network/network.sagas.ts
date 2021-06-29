import { all, call, put, takeLatest } from 'redux-saga/effects';

import API from '../../api';

import { INetwork, INetworkData } from './network.types';
import {
  FETCH_NETWORK_REQUEST,
  fetchNetworkFailure,
  fetchNetworkSuccess,
  setActiveNetwork,
  SET_ACTIVE_NETWORK,
} from './network.actions';
import { convertNetworkData } from './network.convert';
import { fetchStationRequest } from '../station/station.actions';

function* fetchNetworkSaga() {
  try {
    const response: Response = yield call(API.getNetworks);
    const rawData: INetworkData = yield response.json();
    const data: INetwork[] = yield call(convertNetworkData, rawData);

    yield put(
      fetchNetworkSuccess({
        networks: data,
      })
    );
    yield put(setActiveNetwork({ activeItem: data[0].id }));
  } catch (e) {
    yield put(
      fetchNetworkFailure({
        error: e.message,
      })
    );
  }
}

function* setActiveSaga() {
  yield put(fetchStationRequest());
}

function* networkSaga() {
  yield all([
    takeLatest(FETCH_NETWORK_REQUEST, fetchNetworkSaga),
    takeLatest(SET_ACTIVE_NETWORK, setActiveSaga),
  ]);
}

export default networkSaga;
