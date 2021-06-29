import { combineReducers } from 'redux';

import networkReducer from './network/network.reducer';
import stationReducer from './station/station.reducer';

const rootReducer = combineReducers({
  network: networkReducer,
  station: stationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
