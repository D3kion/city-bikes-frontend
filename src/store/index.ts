import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';
import { loadState, saveState } from './persist';

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();
const store = createStore(
  rootReducer,
  {
    station: {
      favorite: persistedState || [],
      stations: [],
      pending: false,
      error: null,
    },
  },
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  saveState(store.getState().station.favorite);
});

sagaMiddleware.run(rootSaga);

export default store;
