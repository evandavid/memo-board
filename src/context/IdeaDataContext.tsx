import React, { createContext, useContext, useReducer } from 'react';
import ideaDataReducer from './ideaDataReducer';
import { IdeaDataContextState, IdeaDataDispatch } from './types';

const IdeaDataStateContext = createContext<IdeaDataContextState>({
  data: [],
});

const IdeaDataDispatchContext = createContext<IdeaDataDispatch>({
  dispatch: (x) => x,
});

type Props = {
  children?: React.ReactNode;
  data?: IdeaDataContextState;
};

export const IdeaDataProvider = ({ children, data }: Props) => {
  const [state, dispatch] = useReducer(ideaDataReducer, data);
  return (
    <IdeaDataStateContext.Provider
      value={{
        ...state,
      }}
    >
      <IdeaDataDispatchContext.Provider
        value={{
          dispatch,
        }}
      >
        {children}
      </IdeaDataDispatchContext.Provider>
    </IdeaDataStateContext.Provider>
  );
};

export const useIdeaDataState = () => {
  const context = useContext(IdeaDataStateContext);
  if (!context) {
    throw Error(
      'useIdeaDataState needs to be used within the IdeaDataProvider'
    );
  }
  return context;
};

export const useIdeaDataDispatch = () => {
  const context = useContext(IdeaDataDispatchContext);
  if (!context) {
    throw Error(
      'useIdeaDataDispatch needs to be used within the IdeaDataProvider'
    );
  }
  return context;
};

export const useIdeaDataContext = () => {
  return {
    ...useIdeaDataState(),
    ...useIdeaDataDispatch(),
  };
};
