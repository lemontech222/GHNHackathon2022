import styled from 'styled-components';
import { LogoImage } from '../BrandLogo';

const CardContainer = styled.div`
  //   width: 10%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h5`
  font-size: 12;
  font-wieght: 400;
  color: #34abde;
`;

export function HubCard(props) {
  const { hubLogo, hubName } = props;
  return (
    <CardContainer>
      <LogoImage size={4}>
        <img src={hubLogo} alt={hubName} />
      </LogoImage>
      <Name>{hubName}</Name>
    </CardContainer>
  );
}
