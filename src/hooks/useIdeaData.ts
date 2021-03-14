import { useEffect } from 'react';
import { useIdeaDataContext } from '../context/IdeaDataContext';
import { IdeaDetail } from '../context/types';
import { getIdea } from '../services';

const useIdeaData = (): { data: IdeaDetail[] } => {
  const { data, dispatch } = useIdeaDataContext();

  const getInitialData = async () => {
    const { ideas } = await getIdea();
    dispatch({ type: 'SET_IDEA_DETAILS', data: ideas });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return {
    data,
  };
};

export default useIdeaData;
