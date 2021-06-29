import {
  FETCH_NETWORK_REQUEST,
  FETCH_NETWORK_SUCCESS,
  FETCH_NETWORK_FAILURE,
} from './network.actions';

export interface INetwork {
  id: string;
  title: string;
}

export interface INetworkData {
  networks: {
    id: string;
    company: string[];
  }[];
}

export interface NetworkState {
  pending: boolean;
  networks: INetwork[];
  error: string | null;
}

export interface FetchNetworkSuccessPayload {
  networks: INetwork[];
}

export interface FetchNetworkFailurePayload {
  error: string;
}

export interface FetchNetworkRequest {
  type: typeof FETCH_NETWORK_REQUEST;
}

export type FetchNetworkSuccess = {
  type: typeof FETCH_NETWORK_SUCCESS;
  payload: FetchNetworkSuccessPayload;
};

export type FetchNetworkFailure = {
  type: typeof FETCH_NETWORK_FAILURE;
  payload: FetchNetworkFailurePayload;
};

export type NetworkActions =
  | FetchNetworkRequest
  | FetchNetworkSuccess
  | FetchNetworkFailure;
