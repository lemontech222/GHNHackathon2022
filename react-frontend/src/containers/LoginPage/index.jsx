import styled from 'styled-components';
import { BrandLogo } from '../../components/BrandLogo';
import { LoginForm, SubText } from './loginForm';

const Logincontainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 170px;
  height: 134.92px;
  left: 62px;
  top: 45px;
`;

export function LoginPage() {
  return (
    <Logincontainer>
      <LogoContainer>
        <BrandLogo hideLogoTitle logoSize={160} />
      </LogoContainer>
      <LoginForm />
      <SubText left={828} top={866} fontWeight="300" width={371}>
        New to GHN Connect? Join now
      </SubText>
    </Logincontainer>
  );
}
