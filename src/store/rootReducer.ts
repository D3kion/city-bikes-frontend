import { combineReducers } from 'redux';

import networkReducer from './network/network.reducer';

const rootReducer = combineReducers({
  network: networkReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
