import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 8;
  transition: opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  min-width: 100%;
  top: 42px;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  z-index: 12;
  position: relative;
  padding: 12px;
  cursor: pointer;
  outline: none;
  background: #fff;
  color: #444;
  &:hover {
    background: #f5f5f5;
  }
`;

export const AsShadow = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: ' ';
  display: block;
`;
