import styled from 'styled-components';
import { BoldLink } from '../../containers/LoginPage/loginForm';
import { BrandLogo } from '../BrandLogo';
import { Marginer } from '../Marginer';

export const SubContainer = styled.div`
  width: 100%;
  background: #ffffff;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px #cac1c1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: ${({ height }) => (height ? height + 'px' : '120px')};
  background: ${({ bg }) => (bg ? bg : '#34abde')};
  color: ${({ color }) => (color ? color : '#484848')};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? '1px solid rgba(72, 72, 72, 0.2)' : 'none'};
  padding: 10px 20px;
  //   font-weight: 900;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HubLogo = styled.div`
  position: absolute;
  width: 125px;
  min-height: 120px;
  left: 340px;
  top: 210px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  width: 100%;
  max-height: 180px;
  padding: 20px;
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
`;

export function Profile() {
  return (
    <SubContainer>
      <HeaderContainer>
        <HubLogo>
          <BrandLogo hideLogoTitle logoSize={6} />
        </HubLogo>
      </HeaderContainer>
      <Marginer direction="vertical" margin={90} />

      <Section>
        Communities <br /> 15
      </Section>
      <Section>
        Innovators/Enterpreneurs <br /> 1,500
      </Section>
      <Section>
        <BoldLink href="">View Profile</BoldLink>
      </Section>
    </SubContainer>
  );
}
