import {
  FETCH_STATION_REQUEST,
  FETCH_STATION_SUCCESS,
  FETCH_STATION_FAILURE,
  ADD_STATION_TO_FAVORITE,
  REMOVE_STATION_FROM_FAVORITE,
} from './station.actions';
import { StationActions, StationState } from './station.types';

const initialState: StationState = {
  stations: [],
  favorite: {},
  pending: false,
  error: null,
};

const stationReducer = (state = initialState, action: StationActions) => {
  switch (action.type) {
    case FETCH_STATION_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_STATION_SUCCESS:
      return {
        ...state,
        pending: false,
        stations: action.payload.stations,
        error: null,
      };
    case FETCH_STATION_FAILURE:
      return {
        ...state,
        pending: false,
        stations: [],
        error: action.payload.error,
      };
    case ADD_STATION_TO_FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          [action.payload.network]: [
            ...(state.favorite[action.payload.network] || []),
            action.payload.id,
          ],
        },
      };
    case REMOVE_STATION_FROM_FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          [action.payload.network]: state.favorite[
            action.payload.network
          ].filter((x) => x !== action.payload.id),
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default stationReducer;
