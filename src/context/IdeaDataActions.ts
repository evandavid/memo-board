import { IdeaDetail } from './types';

export type IdeaDetailsAction = {
  type: 'SET_IDEA_DETAILS';
  data: IdeaDetail[];
};

export const setIdeaDetailsAction = (
  data: IdeaDetail[]
): IdeaDetailsAction => ({
  type: 'SET_IDEA_DETAILS',
  data,
});
