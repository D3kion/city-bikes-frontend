import React from 'react';
import tw from 'twin.macro';

import { INetwork } from '../store/network/network.types';

import { Card, Spinner } from './ui';
import NetworkItemComponent from './NetworkItemComponent';

type NetworkListComponentProps = {
  items: INetwork[];
  activeItem: string | null;
  isPending: boolean;
  error?: string | null;
  onTitleClick: (id: string) => void;
};

const NetworkListComponent = ({
  items,
  activeItem,
  isPending,
  error,
  onTitleClick,
}: NetworkListComponentProps) => (
  <Container>
    <Title>Networks</Title>
    {isPending && <Spinner tw="place-self-center mt-2 text-blue-900" />}
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
          />
        ))}
      </ListContainer>
    )}
  </Container>
);

export default NetworkListComponent;

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
