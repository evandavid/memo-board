import React, { useEffect } from 'react';
import { IdeaDetailsAction } from '../context/IdeaDataActions';
import { useIdeaDataContext } from '../context/IdeaDataContext';
import { IdeaDetail } from '../context/types';
import IdeaService from '../services';

const useIdeaData = (
  d?: any
): { data: IdeaDetail[]; dispatch: React.Dispatch<IdeaDetailsAction> } => {
  const { data, dispatch } = useIdeaDataContext();
  const localDispatch = d || dispatch;

  const service = IdeaService();

  const getInitialData = async () => {
    try {
      const { ideas } = await service.getIdea();
      localDispatch({ type: 'SET_IDEA_DETAILS', data: ideas });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return {
    data,
    dispatch,
  };
};

export default useIdeaData;
