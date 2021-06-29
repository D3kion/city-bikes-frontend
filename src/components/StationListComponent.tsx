import React from 'react';
import styled from 'styled-components';

import { IStation } from '../store/station/station.types';

import StationItemComponent from './StationItemComponent';

type StationListComponentProps = {
  items: IStation[];
  activeNetwork?: string;
  isPending: boolean;
  error?: string | null;
  onLikeClick: (id: string) => void;
};

const StationsListComponent = ({
  items,
  activeNetwork,
  isPending,
  error,
  onLikeClick,
}: StationListComponentProps) => (
  <Container>
    {activeNetwork ? (
      <h2>Stations of network "{activeNetwork}"</h2>
    ) : (
      <h2>Please, choose a network!</h2>
    )}
    {isPending && <span>Loading...</span>}
    {error && <span>Error: {error}</span>}
    {activeNetwork && !(isPending || error) && (
      <ListContainer>
        {items.map((x) => (
          <StationItemComponent
            key={x.id}
            id={x.id}
            name={x.name}
            onLikeClick={onLikeClick}
          />
        ))}
      </ListContainer>
    )}
  </Container>
);

export default StationsListComponent;

const Container = styled.div`
  width: 100%;
  padding: 0 1em;
`;

const ListContainer = styled.ul`
  display: grid;
  gap: 0.5em;
`;
