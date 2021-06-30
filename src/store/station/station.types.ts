import {
  FETCH_STATION_REQUEST,
  FETCH_STATION_SUCCESS,
  FETCH_STATION_FAILURE,
  ADD_STATION_TO_FAVORITE,
  REMOVE_STATION_FROM_FAVORITE,
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

export interface IFavorite {
  [network: string]: string[]; // network -> stations ids
}

export interface StationState {
  stations: IStation[];
  favorite: IFavorite;
  pending: boolean;
  error: string | null;
}

export interface FetchStationSuccessPayload {
  stations: IStation[];
}

export interface FetchStationFailurePayload {
  error: string;
}

export interface AddStationToFavoritePayload {
  network: string;
  id: string;
}

export interface RemoveStationFromFavoritePayload {
  network: string;
  id: string;
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

export type AddStationToFavorite = {
  type: typeof ADD_STATION_TO_FAVORITE;
  payload: AddStationToFavoritePayload;
};

export type RemoveStationFromFavorite = {
  type: typeof REMOVE_STATION_FROM_FAVORITE;
  payload: RemoveStationFromFavoritePayload;
};

export type StationActions =
  | FetchStationRequest
  | FetchStationSuccess
  | FetchStationFailure
  | AddStationToFavorite
  | RemoveStationFromFavorite;
