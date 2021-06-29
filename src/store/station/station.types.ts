import {
  FETCH_STATION_REQUEST,
  FETCH_STATION_SUCCESS,
  FETCH_STATION_FAILURE,
} from './station.actions';

export interface IStation {
  id: string;
  name: string;
  freeBikes: number;
  emptySlots: number;
}

export interface IStationData {
  network: {
    stations: {
      id: string;
      name: string;
      free_bikes: number;
      empty_slots: number;
    }[];
  };
}

export interface StationState {
  stations: IStation[];
  pending: boolean;
  error: string | null;
}

export interface FetchStationSuccessPayload {
  stations: IStation[];
}

export interface FetchStationFailurePayload {
  error: string;
}

export interface FetchStationRequest {
  type: typeof FETCH_STATION_REQUEST;
}

export type FetchStationSuccess = {
  type: typeof FETCH_STATION_SUCCESS;
  payload: FetchStationSuccessPayload;
};

export type FetchStationFailure = {
  type: typeof FETCH_STATION_FAILURE;
  payload: FetchStationFailurePayload;
};

export type StationActions =
  | FetchStationRequest
  | FetchStationSuccess
  | FetchStationFailure;
