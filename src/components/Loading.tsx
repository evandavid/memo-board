import React from 'react';

import styled, { keyframes } from 'styled-components';

const LoadingDualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingElement = styled.div`
  display: inline-block;
  width: ${(props) => props['data-size']}px;
  height: ${(props) => props['data-size']}px;
  &:after {
    content: ' ';
    display: block;
    width: ${(props) => 0.66 * props['data-size']}px;
    height: ${(props) => 0.66 * props['data-size']}px;
    border-radius: 50%;
    border: 4px solid ${(props) => props['data-color']};
    border-color: ${(props) => props['data-color']} transparent
      ${(props) => props['data-color']} transparent;
    animation: ${LoadingDualRing} 1.2s linear infinite;
  }
`;

type LoadingProps = {
  size?: number;
  color?: string;
};

const Loading = ({ size = 24, color = '#FC9E5B' }: LoadingProps) => {
  return <LoadingElement data-size={size} data-color={color} />;
};

export default Loading;
