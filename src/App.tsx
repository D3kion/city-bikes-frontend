import React from 'react';
import styled from 'styled-components';

import { StationListComponent } from './components';
import { HeaderContainer, NetworkListContainer } from './containers';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Content>
        <NetworkListContainer />
        <StationListComponent />
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  display: flex;
`;
