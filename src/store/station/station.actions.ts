import {
  AddStationToFavorite,
  AddStationToFavoritePayload,
  FetchStationFailure,
  FetchStationFailurePayload,
  FetchStationRequest,
  FetchStationSuccess,
  FetchStationSuccessPayload,
  RemoveStationFromFavorite,
  RemoveStationFromFavoritePayload,
} from './station.types';

export const FETCH_STATION_REQUEST = 'FETCH_STATION_REQUEST';
export const FETCH_STATION_SUCCESS = 'FETCH_STATION_SUCCESS';
export const FETCH_STATION_FAILURE = 'FETCH_STATION_FAILURE';
export const ADD_STATION_TO_FAVORITE = 'ADD_STATION_TO_FAVORITE';
export const REMOVE_STATION_FROM_FAVORITE = 'REMOVE_STATION_FROM_FAVORITE';

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

export const addStationToFavorite = (
  payload: AddStationToFavoritePayload
): AddStationToFavorite => ({
  type: ADD_STATION_TO_FAVORITE,
  payload,
});

export const removeStationFromFavorite = (
  payload: RemoveStationFromFavoritePayload
): RemoveStationFromFavorite => ({
  type: REMOVE_STATION_FROM_FAVORITE,
  payload,
});
