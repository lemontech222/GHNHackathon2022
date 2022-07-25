import styled from 'styled-components';

export const Title = styled.h1`
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '40px')};
  line-height: 61px;
`;

export const SubText = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '20px')};
  line-height: 24px;
  text-align: ${({ align }) => (align ? align : 'left')};

  color: ${({ color }) => (color ? color : '#000000')};
`;
