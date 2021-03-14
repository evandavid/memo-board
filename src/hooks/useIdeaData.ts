import { useEffect } from 'react';
import { useIdeaDataContext } from '../context/IdeaDataContext';
import { IdeaDetail } from '../context/types';

const useIdeaData = (): { data: IdeaDetail[] } => {
  const { data } = useIdeaDataContext();

  useEffect(() => {}, []);

  return {
    data,
  };
};

export default useIdeaData;
