import React, { useRef } from 'react';
import { formatDistance } from 'date-fns';

import { IdeaDetail } from '../../context/types';
import IdeaService from '../../services';
import {
  CardItemContainer,
  CardItemContent,
  CardItemInside,
  DeleteButton,
  CreatedAt,
  StyledInlineInput,
  MaskingText,
  CharCounter,
} from './styled';
import Alert from '../Alert';

const CardItem = ({ data }: { data: IdeaDetail }) => {
  const service = IdeaService();
  const isUpdated = useRef(false);

  const onDelete = async () => {
    await service.deleteIdea(data.id);
    Alert.show({
      title: 'Success',
      subtitle: 'Idea successfully deleted',
      type: 'success',
    });
  };

  const onUpdateText = async (text: string, type: string) => {
    await service.updateIdea({ ...data, [type]: text });
  };

  const showNotification = () => {
    if (isUpdated.current) {
      Alert.show({
        title: 'Success',
        subtitle: 'Idea successfully updated',
        type: 'success',
      });
      isUpdated.current = false;
    }
  };

  return (
    <CardItemContainer>
      <CardItemContent>
        <CardItemInside>
          <DeleteButton
            onClick={() => {
              onDelete();
            }}
          >
            <svg height="18" viewBox="0 0 24 24" width="18">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="#888"
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
              />
            </svg>
          </DeleteButton>
          <MaskingText id={data.id} title>
            <StyledInlineInput
              onInput={(text) => {
                isUpdated.current = true;
                onUpdateText(text, 'title');
              }}
              onBlur={() => {
                showNotification();
              }}
              value={data.title}
              title
            />
          </MaskingText>
          <MaskingText>
            <StyledInlineInput
              onInput={(text) => {
                isUpdated.current = true;
                onUpdateText(text, 'body');
              }}
              onBlur={() => {
                showNotification();
              }}
              value={data.body}
              rows={3}
              type="textarea"
            />
            {data.body.length < 16 ? (
              <CharCounter>{data.body.length}/15</CharCounter>
            ) : null}
          </MaskingText>
          <CreatedAt>
            Created at: {formatDistance(new Date(data.createdAt), new Date())}{' '}
            ago
          </CreatedAt>
        </CardItemInside>
      </CardItemContent>
    </CardItemContainer>
  );
};

export default CardItem;
