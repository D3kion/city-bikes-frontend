import {
  FETCH_NETWORK_REQUEST,
  FETCH_NETWORK_SUCCESS,
  FETCH_NETWORK_FAILURE,
} from './network.actions';

import { NetworkActions, NetworkState } from './network.types';

const initialState: NetworkState = {
  pending: false,
  networks: [],
  error: null,
};

const networkReducer = (state = initialState, action: NetworkActions) => {
  switch (action.type) {
    case FETCH_NETWORK_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_NETWORK_SUCCESS:
      return {
        ...state,
        pending: false,
        networks: action.payload.networks,
        error: null,
      };
    case FETCH_NETWORK_FAILURE:
      return {
        ...state,
        pending: false,
        networks: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default networkReducer;
