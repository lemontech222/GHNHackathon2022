import styled from 'styled-components';
import { BoldLink } from '../../containers/LoginPage/loginForm';
import { LogoImage } from '../BrandLogo';
import { SubText } from '../Comon';
import { Marginer } from '../Marginer';
import Logo from '../../images/logo/ghnlogo.png';

export const SubContainer = styled.div`
  width: 100%;
  min-height: ${({ height }) => (height ? height + 'vh' : '0')};
  background: #ffffff;
  margin-top: 30px;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px #cac1c1;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'flex-start')};
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
  justify-content: ${({ justify }) => (justify ? justify : 'space-between')};
  align-items: center;
`;

const HubLogo = styled.div`
  position: relative;
  width: 120px;
  min-height: 120px;
  top: 50%;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export function Profile(props) {
  const { hubProfile } = props;
  return (
    <SubContainer>
      <HeaderContainer justify="center">
        <HubLogo>
          <LogoImage size={6}>
            {hubProfile && (
              <img src={hubProfile.hub_profile_pic} alt="hub logo" />
            )}
            {!hubProfile && <img src={Logo} alt="ghn logo" />}
          </LogoImage>
        </HubLogo>
      </HeaderContainer>
      <Marginer direction="vertical" margin={60} />
      <SubText align="center" color="#34abde" fontWeight={500}>
        {hubProfile && hubProfile.hub_name}
      </SubText>

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
