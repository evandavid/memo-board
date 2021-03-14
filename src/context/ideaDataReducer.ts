import { IdeaDetailsAction } from './IdeaDataActions';
import { IdeaDataContextState } from './types';

export const ideaDataReducer = (
  state: IdeaDataContextState,
  action: IdeaDetailsAction
) => {
  switch (action.type) {
    case 'SET_IDEA_DETAILS':
      return {
        ...state,
        data: action.data,
      };
    default: {
      return state;
    }
  }
};

export default ideaDataReducer;
