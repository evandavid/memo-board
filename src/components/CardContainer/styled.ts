import styled from 'styled-components';

export const CardContainerElement = styled.div`
  position: relative;
  width: 920px;
  max-width: 100%;
  padding: 24px;
  transform: translateX(-50%);
  left: 50%;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #fff;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 150px));
  grid-gap: 10px;
  gap: 10px;
  padding: 12px;
  margin-top: 12px;
`;

export const TopRow = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  padding: 12px;
`;

export const SortContainer = styled.div`
  margin-left: 24px;
  width: 180px;
  position: relative;
`;

export const SortDisplay = styled.div`
  background: #fff;
  border: 1px solid #f0f0f0;
  & > span {
    background-color: #f0f0f0;
    padding: 12px;
    display: inline-block;
  }

  & > button {
    display: inline-block;
    padding: 12px;
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
    width: 98px;
    font-size: 14px;
  }
`;
