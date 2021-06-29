import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../store/rootReducer';
import { StationListComponent } from '../components';

const StationListContainer = () => {
  const dispatch = useDispatch();
  const { network, station } = useSelector((state: AppState) => ({
    network: state.network,
    station: state.station,
  }));
  const activeNetwork = network.networks.find(
    (x) => x.id === network.activeItem
  )?.title;

  const handleLikeClick = (id: string) => {
    //
  };

  return (
    <StationListComponent
      items={station.stations}
      activeNetwork={activeNetwork}
      isPending={station.pending}
      error={station.error}
      onLikeClick={handleLikeClick}
    />
  );
};

export default StationListContainer;
