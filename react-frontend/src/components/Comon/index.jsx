import styled from 'styled-components';

export const Title = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '40px')};
  color: ${({ color }) => (color ? color : '#000000')};
  // line-height: 61px;
`;

export const SubTitle = styled.h2`
  width: 100%;
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '30px')};
  color: ${({ color }) => (color ? color : '#000000')};
  // line-height: 61px;
`;

export const SubSubTitle = styled.h3`
  width: 100%;
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '20px')};
  color: ${({ color }) => (color ? color : '#000000')};
  // line-height: 61px;
`;

export const SubText = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '20px')};
  // line-height: 24px;
  text-align: ${({ align }) => (align ? align : 'left')};
  margin: 0;

  color: ${({ color }) => (color ? color : '#000000')};
`;
