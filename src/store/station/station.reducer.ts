import {
  FETCH_STATION_REQUEST,
  FETCH_STATION_SUCCESS,
  FETCH_STATION_FAILURE,
} from './station.actions';
import { StationActions, StationState } from './station.types';

const initialState: StationState = {
  stations: [],
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
    default:
      return {
        ...state,
      };
  }
};

export default stationReducer;
