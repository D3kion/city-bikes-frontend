import React from 'react';
import styled from 'styled-components';

import {
  HeaderComponent,
  NetworksListComponent,
  StationsListComponent,
} from './components';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Content>
        <NetworksListComponent />
        <StationsListComponent />
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  display: flex;
`;
