import React from 'react';
import styled from 'styled-components';

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
      <h1>Loading...</h1>
    ) : (
      <>
        <h1>
          {activeNetwork}{' '}
          <StationsCount>({networkStations} stations)</StationsCount>
        </h1>
        <h2>Favorite stations in this network: {favoriteStations} stations</h2>
      </>
    )}
  </Container>
);

export default HeaderComponent;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1em;
`;

const StationsCount = styled.span`
  font-size: 0.8em;
  font-weight: 400;
`;
