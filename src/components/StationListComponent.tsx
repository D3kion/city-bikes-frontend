import React from 'react';
import tw from 'twin.macro';

import { IStation } from '../store/station/station.types';

import { Card, Spinner } from './ui';
import StationItemComponent from './StationItemComponent';

type StationListComponentProps = {
  items: IStation[];
  favorite: string[] | null;
  activeNetwork?: string;
  isPending: boolean;
  error?: string | null;
  onLikeClick: (id: string, remove: boolean) => void;
};

const StationsListComponent = ({
  items,
  favorite,
  activeNetwork,
  isPending,
  error,
  onLikeClick,
}: StationListComponentProps) => (
  <Container>
    {activeNetwork && <Title>Stations of network "{activeNetwork}"</Title>}
    {(isPending || !activeNetwork) && (
      <Spinner tw="place-self-center mt-2 text-blue-900" />
    )}
    {error && <span>Error: {error}</span>}
    {activeNetwork && !(isPending || error) && (
      <ListContainer>
        {items.map((x) => (
          <StationItemComponent
            key={x.id}
            id={x.id}
            name={x.name}
            isFavorite={favorite?.includes(x.id)}
            onLikeClick={onLikeClick}
          />
        ))}
      </ListContainer>
    )}
  </Container>
);

export default StationsListComponent;

const Container = tw(Card)`
  flex flex-col gap-3
  px-0
`;

const Title = tw.span`
  text-2xl font-medium
  place-self-center
`;

const ListContainer = tw.div`
  grid overflow-auto
`;
