import React, { useState } from 'react';
import update from 'immutability-helper';
import { set } from 'local-storage';
import useIdeaData from '../../hooks/useIdeaData';
import IdeaService, { LIST_KEY } from '../../services';
import Button from '../Button';
import CardItem from '../CardItem';
import Dropdown from '../Dropdown';
import {
  CardContainerElement,
  Title,
  GridContainer,
  TopRow,
  SortContainer,
  SortDisplay,
} from './styled';
import Alert from '../Alert';

const CardContainer = () => {
  const { data, dispatch } = useIdeaData();
  const service = IdeaService();

  const sortData = [
    { code: 'createdAt', value: 'Created At' },
    { code: 'title', value: 'Title' },
  ];

  const sortDisplay = { title: 'Title', createdAt: 'Created At' };

  const [onSortSHow, setOnSortShow] = useState(false);
  const [sortBy, setOnSortBy] = useState<'title' | 'createdAt'>('createdAt');

  const dynamicSort = (property: string) => {
    const sortOrder = 1;

    return (a: any, b: any) => {
      const result =
        // eslint-disable-next-line no-nested-ternary
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  const onAddNew = async () => {
    try {
      const { id, createdAt } = await service.addIdea();
      const newIdea = {
        id,
        createdAt,
        title: 'a New Title',
        body: 'New Idea',
      };

      setOnSortBy('createdAt');
      const updatedIdeas = update(data, {
        $push: [newIdea],
      });

      set(LIST_KEY, updatedIdeas);
      dispatch({ type: 'SET_IDEA_DETAILS', data: updatedIdeas });

      setTimeout(() => {
        /** give time to render */
        const parentElement = document.getElementById(id);
        if (parentElement) {
          const triggerToggleEl: any = parentElement.childNodes[0];
          if (triggerToggleEl) triggerToggleEl.click();
        }
      }, 100);
    } catch (e) {
      Alert.show({
        title: 'Ops',
        subtitle: e.message,
      });
    }
  };

  return (
    <CardContainerElement>
      <Title>Idea Board</Title>
      <TopRow>
        <Button
          text="Add New"
          onClick={() => {
            onAddNew();
          }}
        />
        <SortContainer>
          <SortDisplay>
            <span>Sort by:</span>
            <button
              type="button"
              onClick={() => {
                setOnSortShow(true);
              }}
            >
              {sortDisplay[sortBy]}
            </button>
          </SortDisplay>
          <Dropdown
            show={onSortSHow}
            data={sortData}
            onSelect={({ code }: { code: any }) => {
              setOnSortBy(code);
            }}
            onHide={() => {
              setOnSortShow(false);
            }}
          />
        </SortContainer>
      </TopRow>
      <GridContainer>
        {data &&
          (sortBy === 'createdAt'
            ? data.sort(dynamicSort(sortBy)).reverse()
            : data.sort(dynamicSort(sortBy))
          ).map((datum) => <CardItem data={datum} key={datum.id} />)}
      </GridContainer>
    </CardContainerElement>
  );
};

export default CardContainer;
