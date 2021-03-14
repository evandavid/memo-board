import React from 'react';
import { IdeaDetailsAction } from '../IdeaDataActions';

export interface IdeaDetail {
  id?: any;
  title: string;
  body: string;
  createdAt: Date;
}

export interface IdeaDataContextState {
  data: IdeaDetail[];
}

export interface IdeaDataDispatch {
  dispatch: React.Dispatch<IdeaDetailsAction>;
}
