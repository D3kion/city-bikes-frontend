import React from 'react';
import styled from 'styled-components';

type HeaderComponentProps = {
  activeNetwork?: string;
  networkStations: number;
};

const HeaderComponent = ({
  activeNetwork,
  networkStations,
}: HeaderComponentProps) => (
  <Container>
    {!activeNetwork ? (
      <h1>Loading...</h1>
    ) : (
      <h1>
        {activeNetwork}{' '}
        <StationsCount>({networkStations} stations)</StationsCount>
      </h1>
    )}
  </Container>
);

export default HeaderComponent;

const Container = styled.div`
  padding: 0 1em;
`;

const StationsCount = styled.span`
  font-size: 0.8em;
  font-weight: 400;
`;
