import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../store/rootReducer';
import { HeaderComponent } from '../components';

const HeaderContainer = () => {
  const { network, station } = useSelector((state: AppState) => ({
    network: state.network,
    station: state.station,
  }));
  const activeNetwork = network.networks.find(
    (x) => x.id === network.activeItem
  )?.title;
  const stationsCount = station.stations.length;

  return (
    <HeaderComponent
      activeNetwork={activeNetwork}
      networkStations={stationsCount}
      favoriteStations={station.favorite[network.activeItem || '']?.length || 0}
    />
  );
};

export default HeaderContainer;
