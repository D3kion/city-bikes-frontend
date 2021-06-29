import {
  FetchNetworkFailure,
  FetchNetworkFailurePayload,
  FetchNetworkRequest,
  FetchNetworkSuccess,
  FetchNetworkSuccessPayload,
  SetActiveNetwork,
  SetActiveNetworkPayload,
} from './network.types';

export const FETCH_NETWORK_REQUEST = 'FETCH_NETWORK_REQUEST';
export const FETCH_NETWORK_SUCCESS = 'FETCH_NETWORK_SUCCESS';
export const FETCH_NETWORK_FAILURE = 'FETCH_NETWORK_FAILURE';
export const SET_ACTIVE_NETWORK = 'SET_ACTIVE_NETWORK';

export const fetchNetworkRequest = (): FetchNetworkRequest => ({
  type: FETCH_NETWORK_REQUEST,
});

export const fetchNetworkSuccess = (
  payload: FetchNetworkSuccessPayload
): FetchNetworkSuccess => ({
  type: FETCH_NETWORK_SUCCESS,
  payload,
});

export const fetchNetworkFailure = (
  payload: FetchNetworkFailurePayload
): FetchNetworkFailure => ({
  type: FETCH_NETWORK_FAILURE,
  payload,
});

export const setActiveNetwork = (
  payload: SetActiveNetworkPayload
): SetActiveNetwork => ({
  type: SET_ACTIVE_NETWORK,
  payload,
});
