import { all, call, put, takeLatest } from 'redux-saga/effects';

import { INetwork } from './network.types';
import {
  FETCH_NETWORK_REQUEST,
  fetchNetworkFailure,
  fetchNetworkSuccess,
} from './network.actions';
import API from '../../api';
import { convertNetworkData } from './network.convert';

/*
  Worker Saga: Fired on FETCH_TODO_REQUEST action
*/
function* fetchTodoSaga() {
  try {
    const response: Response = yield call(API.fetchNetworks);
    debugger;
    // const data = yield call(convertNetworkData, response.json());
    // convertNetworkData(response.json());

    yield put(
      fetchNetworkSuccess({
        networks: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchNetworkFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_TODO_REQUEST` action.
  Allows concurrent increments.
*/
function* todoSaga() {
  yield all([takeLatest(FETCH_NETWORK_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;
