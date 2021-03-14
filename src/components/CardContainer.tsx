import React from 'react';
import styled from 'styled-components';

const CardContainerElement = styled.div`
  position: relative;
  width: 920px;
  max-width: 100%;
  padding: 24px;
  transform: translateX(-50%);
  left: 50%;
`;

const CardContainer = () => {
  return <CardContainerElement />;
};

export default CardContainer;
