import React from 'react';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';

const AppContainer = styled.div`
  position: relative;
  width: 920px;
  max-width: 100%;
  padding: 24px;
  transform: translateX(-50%);
  left: 50%;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
