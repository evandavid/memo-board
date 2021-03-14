import styled from 'styled-components';
import CustomInlineInput from '../CustomInlineInput';

export const CardItemContainer = styled.div`
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const CardItemContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const CardItemInside = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 12px;
  padding-top: 24px;
  background-color: #fff;
  border-radius: 6px;
  position: relative;
  & > button {
    display: none;
  }
  &:hover > button {
    display: block;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 0px;
`;

export const CreatedAt = styled.div`
  position: absolute;
  bottom: 6px;
  left: 12px;
  font-size: 10px;
  color: #888;
`;

export const StyledInlineInput = styled(CustomInlineInput)<any>`
  width: 122px;
  font-size: 16px;
  border: 1px solid #ddd;
  outline: none;
  color: ${(props) => (props.title ? '#fc9e5b' : '#414141')};
  margin-left: 12px;
`;

export const MaskingText = styled.div<any>`
  margin-bottom: 6px;
  & > span {
    padding: 0 12px;
    font-size: 16px;
    border: 2px solid #fff;
    margin-top: 3px;
    color: ${(props) => (props.title ? '#fc9e5b' : '#414141')};
    display: block;
  }
  & > textarea + div {
    display: block;
  }
`;

export const CharCounter = styled.div`
  text-align: right;
  padding-right: 12px;
  color: #888;
  font-size: 12px;
  display: none;
`;
