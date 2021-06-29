import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import API from '../../api';
import { AppState } from '../rootReducer';

import { IStation, IStationData } from './station.types';
import {
  FETCH_STATION_REQUEST,
  fetchStationFailure,
  fetchStationSuccess,
} from './station.actions';
import { convertStationData } from './station.convert';

function* fetchStationSaga() {
  try {
    const activeNetwork: string = yield select(
      (state: AppState) => state.network.activeItem
    );
    const response: Response = yield call(API.getStations, activeNetwork);
    const rawData: IStationData = yield response.json();
    const data: IStation[] = yield call(convertStationData, rawData);

    yield put(
      fetchStationSuccess({
        stations: data,
      })
    );
  } catch (e) {
    yield put(
      fetchStationFailure({
        error: e.message,
      })
    );
  }
}

function* stationSaga() {
  yield all([takeLatest(FETCH_STATION_REQUEST, fetchStationSaga)]);
}

export default stationSaga;
