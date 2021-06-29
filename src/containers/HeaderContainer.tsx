import React from 'react';
import { useSelector } from 'react-redux';

import { AppState } from '../store/rootReducer';
import { HeaderComponent } from '../components';

const HeaderContainer = () => {
  const state = useSelector((state: AppState) => state.network);
  const activeNetwork = state.networks.find(
    (x) => x.id === state.activeItem
  )?.title;

  return (
    <HeaderComponent activeNetwork={activeNetwork} networkStations={123} />
  );
};

export default HeaderContainer;
