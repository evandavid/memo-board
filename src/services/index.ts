import update from 'immutability-helper';
import { get, set } from 'local-storage';
import { v4 as uuidv4 } from 'uuid';
import { useIdeaDataContext } from '../context/IdeaDataContext';
import { IdeaDetail } from '../context/types';

export const LIST_KEY = 'idea-lists';

const IdeaService = (): {
  getIdea: () => Promise<{ ideas: IdeaDetail[] }>;
  deleteIdea(id: string): Promise<boolean>;
  updateIdea(item: IdeaDetail): Promise<boolean>;
  addIdea(): Promise<{ id: string; createdAt: Date }>;
} => {
  /** we will use localstorage instead of REST API */
  const findWithAttr = (array: any[], attr: string, value: any): number => {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  };

  const { dispatch } = useIdeaDataContext();

  /** [GET] /ideas */
  const getIdea = (): Promise<{ ideas: IdeaDetail[] }> => {
    return new Promise((resolve) => {
      const ideas = get<IdeaDetail[]>(LIST_KEY);
      const newIdeas = [
        {
          body: 'New Idea to be written',
          title: 'New Idea',
          id: uuidv4(),
          createdAt: new Date(),
        },
        {
          body: 'Second Idea to be written',
          title: 'Second Idea',
          id: uuidv4(),
          createdAt: new Date(),
        },
      ];

      if (!ideas || !ideas.length) {
        set(LIST_KEY, newIdeas);
        resolve({
          ideas: newIdeas,
        });
      } else resolve({ ideas });
    });
  };

  /** [DELETE] /idea/delete */
  const deleteIdea = async (id: string): Promise<boolean> => {
    const { ideas } = await getIdea();

    return new Promise((resolve) => {
      const selectedIndex = findWithAttr(ideas, 'id', id);
      const newIdeas = update(ideas, { $splice: [[selectedIndex, 1]] });

      set(LIST_KEY, newIdeas);
      dispatch({ type: 'SET_IDEA_DETAILS', data: newIdeas });
      resolve(true);
    });
  };

  /** [PUT] /idea/update */
  const updateIdea = async (item: IdeaDetail): Promise<boolean> => {
    const { ideas } = await getIdea();

    return new Promise((resolve) => {
      const selectedIndex = findWithAttr(ideas, 'id', item.id);
      const updatedIdeas = update(ideas, { [selectedIndex]: { $set: item } });

      set(LIST_KEY, updatedIdeas);
      dispatch({ type: 'SET_IDEA_DETAILS', data: updatedIdeas });
      resolve(true);
    });
  };

  /** [GET] /ideas/new */
  const addIdea = async (): Promise<{ id: string; createdAt: Date }> => {
    return new Promise((resolve) => {
      const id: any = uuidv4();
      const createdAt: Date = new Date();

      resolve({ id, createdAt });
    });
  };

  return { getIdea, deleteIdea, updateIdea, addIdea };
};

export default IdeaService;
