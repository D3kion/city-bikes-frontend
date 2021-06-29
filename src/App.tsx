import React from 'react';
import styled from 'styled-components';

import {
  HeaderContainer,
  NetworkListContainer,
  StationListContainer,
} from './containers';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Content>
        <NetworkListContainer />
        <StationListContainer />
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  display: flex;
`;
