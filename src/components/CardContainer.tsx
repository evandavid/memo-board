import React from 'react';
import styled from 'styled-components';
import useIdeaData from '../hooks/useIdeaData';

const CardContainerElement = styled.div`
  position: relative;
  width: 920px;
  max-width: 100%;
  padding: 24px;
  transform: translateX(-50%);
  left: 50%;
`;

const CardContainer = () => {
  const { data } = useIdeaData();

  console.log(data);

  return <CardContainerElement />;
};

export default CardContainer;
