import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AnchorLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button`
  background: var(--primary-color);
  color: #ffffff;
  outline: none;
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: 10px;
  font-size: ${({ size }) => (size ? size + 'px' : '20px')};
  padding: 10px 15px;
`;
