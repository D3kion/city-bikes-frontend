import {
  FETCH_NETWORK_REQUEST,
  FETCH_NETWORK_SUCCESS,
  FETCH_NETWORK_FAILURE,
  SET_ACTIVE_NETWORK,
} from './network.actions';

export interface INetwork {
  id: string;
  title: string;
  location: string;
}

export interface INetworkData {
  networks: {
    id: string;
    company: string[];
    location: {
      city: string;
      country: string;
    };
  }[];
}

export interface NetworkState {
  networks: INetwork[];
  activeItem: string | null;
  pending: boolean;
  error: string | null;
}

export interface FetchNetworkSuccessPayload {
  networks: INetwork[];
}

export interface FetchNetworkFailurePayload {
  error: string;
}

export interface SetActiveNetworkPayload {
  activeItem: string;
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

export type SetActiveNetwork = {
  type: typeof SET_ACTIVE_NETWORK;
  payload: SetActiveNetworkPayload;
};

export type NetworkActions =
  | FetchNetworkRequest
  | FetchNetworkSuccess
  | FetchNetworkFailure
  | SetActiveNetwork;
