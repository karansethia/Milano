import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({ prim }) => (prim ? '#8800ff' : '#010606')};
  white-space: nowrap;
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  padding: ${({ big }) => (big ? '14px 48px' : '14px 30px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  &:hover{
    transition: all 0.5s ease-in-out;
    background: ${({ prim }) => (prim ? '#f6931a' : '#8800ff')};
  }
`;