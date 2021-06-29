import React from 'react';
import styled from 'styled-components';
import NetworkItemComponent from './NetworkItemComponent';

const ITEMS_MOCK = [
  { title: 'Network 1', active: true },
  { title: 'Network 2' },
];

const NetworkListComponent = () => (
  <Container>
    <h2>Networks</h2>
    <ListContainer>
      {ITEMS_MOCK.map((x) => (
        <NetworkItemComponent title={x.title} active={x.active} />
      ))}
    </ListContainer>
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
