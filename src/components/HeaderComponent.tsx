import React from 'react';
import tw from 'twin.macro';

type HeaderComponentProps = {
  activeNetwork?: string;
  networkStations?: number;
  favoriteStations?: number;
};

const HeaderComponent = ({
  activeNetwork,
  networkStations,
  favoriteStations,
}: HeaderComponentProps) => (
  <Container>
    {!activeNetwork ? (
      <Title>Loading...</Title>
    ) : (
      <>
        <Title>
          {activeNetwork}{' '}
          <StationsCount>({networkStations} stations)</StationsCount>
        </Title>
        <FavoriteCounter>
          Favorite stations in this network: {favoriteStations} stations
        </FavoriteCounter>
      </>
    )}
  </Container>
);

export default HeaderComponent;

const Container = tw.div`
  flex justify-between items-center
  px-8 py-4
  bg-blue-900 text-indigo-50
`;

const Title = tw.div`
  text-2xl font-bold
`;

const StationsCount = tw.span`
  text-sm font-medium
`;

const FavoriteCounter = tw.span`
  text-xl font-medium
`;
