import React from 'react';
import tw from 'twin.macro';

import {
  HeaderContainer,
  NetworkListContainer,
  StationListContainer,
} from './containers';

function App() {
  return (
    <Container>
      <HeaderContainer />
      <Content>
        <NetworkListContainer />
        <StationListContainer />
      </Content>
    </Container>
  );
}

export default App;

const Container = tw.div`
  flex flex-col
  h-screen
  font-roboto
`;

const Content = tw.div`
  flex gap-6
  h-full my-6 px-8
  overflow-hidden
`;
