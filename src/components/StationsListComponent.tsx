import React from 'react';
import styled from 'styled-components';

const StationsListComponent = () => (
  <Container>
    <h2>Stations of network X</h2>
    <ListContainer>
      <li>Station 1</li>
      <li>Station 2</li>
    </ListContainer>
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
