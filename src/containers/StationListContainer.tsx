import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../store/rootReducer';
import { StationListComponent } from '../components';
import {
  addStationToFavorite,
  removeStationFromFavorite,
} from '../store/station/station.actions';

const StationListContainer = () => {
  const dispatch = useDispatch();
  const { network, station } = useSelector((state: AppState) => ({
    network: state.network,
    station: state.station,
  }));
  const activeNetwork = network.networks.find(
    (x) => x.id === network.activeItem
  )?.title;

  const handleLikeClick = (id: string, remove: boolean) => {
    if (!network.activeItem) return;

    const payload = { network: network.activeItem, id };

    if (remove) {
      dispatch(removeStationFromFavorite(payload));
      return;
    }

    dispatch(addStationToFavorite(payload));
  };

  return (
    <StationListComponent
      items={station.stations}
      favorite={
        network.activeItem ? station.favorite[network.activeItem] : null
      }
      activeNetwork={activeNetwork}
      isPending={station.pending}
      error={station.error}
      onLikeClick={handleLikeClick}
    />
  );
};

export default StationListContainer;
