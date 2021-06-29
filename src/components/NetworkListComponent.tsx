import React from 'react';
import styled from 'styled-components';

import { INetwork } from '../store/network/network.types';

import NetworkItemComponent from './NetworkItemComponent';

type NetworkListComponentProps = {
  items: INetwork[];
  activeItem: string | null;
  isPending: boolean;
  error?: string | null;
  onTitleClick: (id: string) => void;
  onLikeClick: (id: string) => void;
};

const NetworkListComponent = ({
  items,
  activeItem,
  isPending,
  error,
  onTitleClick,
  onLikeClick,
}: NetworkListComponentProps) => (
  <Container>
    <h2>Networks</h2>
    {isPending && <span>Loading...</span>}
    {error && <span>Error: {error}</span>}
    {!(isPending || error) && (
      <ListContainer>
        {items.map((x) => (
          <NetworkItemComponent
            key={x.id}
            id={x.id}
            title={x.title}
            location={x.location}
            active={activeItem === x.id}
            onTitleClick={onTitleClick}
            onLikeClick={onLikeClick}
          />
        ))}
      </ListContainer>
    )}
  </Container>
);

export default NetworkListComponent;

const Container = styled.div`
  width: 100%;
  padding: 0 1em;
`;

const ListContainer = styled.ul`
  display: grid;
  gap: 0.5em;
`;
