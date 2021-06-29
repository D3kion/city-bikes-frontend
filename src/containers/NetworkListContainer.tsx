import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchNetworkRequest,
  setActiveNetwork,
} from '../store/network/network.actions';
import { AppState } from '../store/rootReducer';
import { NetworkListComponent } from '../components';

const NetworkListContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.network);

  useEffect(() => {
    dispatch(fetchNetworkRequest());
  }, [dispatch]);

  const handleTitleClick = (id: string) => {
    dispatch(setActiveNetwork({ activeItem: id }));
  };
  const handleLikeClick = (id: string) => {
    // TODO
  };

  return (
    <NetworkListComponent
      items={state.networks}
      activeItem={state.activeItem}
      isPending={state.pending}
      error={state.error}
      onTitleClick={handleTitleClick}
      onLikeClick={handleLikeClick}
    />
  );
};

export default NetworkListContainer;
