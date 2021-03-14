import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';

const Container = styled.button`
  border: none;
  background: #fc9e5b;
  padding: 0 12px;
  height: 42px;
  line-height: 42px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  outline: none;
  display: inline-block;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  position: relative;
  text-align: center;
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
  font-weight: bold;
  display: inline-block;
  padding-right: ${(props) => (props['data-loading'] ? '24px' : '0')};
`;

const A = styled.a``;

const LoadingContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 6px;
`;

export const BasicBtn = styled.button`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  user-select: none;
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
`;

export interface IBtnProps extends React.HTMLProps<HTMLButtonElement> {}

export const BasicButton = ({
  onClick,
  children,
  style = {},
  id,
}: IBtnProps) => {
  return (
    <BasicBtn id={id} onClick={onClick} style={style}>
      {children}
    </BasicBtn>
  );
};

type ButtonProps = {
  href?: string;
  disabled?: boolean;
  id?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  text: string;
  textStyle?: React.CSSProperties;
  loading?: boolean;
  isLink?: boolean;
};

const Button = ({
  isLink,
  disabled,
  id,
  onClick,
  style = {},
  text,
  textStyle = {},
  loading,
  href,
}: ButtonProps) => (
  <Container
    as={isLink ? A : undefined}
    id={id}
    style={style}
    disabled={disabled}
    href={href}
    onClick={() => {
      if (!isLink && onClick) onClick();
    }}
  >
    <Title data-loading={loading} style={textStyle}>
      {text}
    </Title>
    {loading && (
      <LoadingContainer>
        <Loading color="#fff" />
      </LoadingContainer>
    )}
  </Container>
);

export default Button;
