import React from 'react';
import CardContainer from './components/CardContainer';
import { IdeaDataProvider } from './context/IdeaDataContext';

import GlobalStyle from './GlobalStyle';
import useIdeaData from './hooks/useIdeaData';

const App = ({ dispatch }: { dispatch?: any }) => {
  const { data } = useIdeaData();

  return (
    <IdeaDataProvider data={{ data }}>
      <GlobalStyle />
      <CardContainer />
    </IdeaDataProvider>
  );
};

export default App;
