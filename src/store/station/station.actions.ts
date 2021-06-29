import {
  FetchStationFailure,
  FetchStationFailurePayload,
  FetchStationRequest,
  FetchStationSuccess,
  FetchStationSuccessPayload,
} from './station.types';

export const FETCH_STATION_REQUEST = 'FETCH_STATION_REQUEST';
export const FETCH_STATION_SUCCESS = 'FETCH_STATION_SUCCESS';
export const FETCH_STATION_FAILURE = 'FETCH_STATION_FAILURE';

export const fetchStationRequest = (): FetchStationRequest => ({
  type: FETCH_STATION_REQUEST,
});

export const fetchStationSuccess = (
  payload: FetchStationSuccessPayload
): FetchStationSuccess => ({
  type: FETCH_STATION_SUCCESS,
  payload,
});

export const fetchStationFailure = (
  payload: FetchStationFailurePayload
): FetchStationFailure => ({
  type: FETCH_STATION_FAILURE,
  payload,
});
