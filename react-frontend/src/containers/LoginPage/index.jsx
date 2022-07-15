import { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { BrandLogo } from '../../components/BrandLogo';
import { AccountContext } from './context';
import { LoginForm } from './loginForm';
import { SignupForm } from './signupForm';

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

export function LoginPage(props) {
  const initialActive = useParams();
  const [active, setActive] = useState(
    initialActive ? initialActive : 'signin'
  );

  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    switchActive('signup');
  };

  const switchToSignin = () => {
    switchActive('signin');
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <Logincontainer>
        <LogoContainer>
          <BrandLogo hideLogoTitle logoSize={10} />
        </LogoContainer>
        {active.action === 'signin' && <LoginForm />}
        {active.action === 'signup' && <SignupForm />}
      </Logincontainer>
    </AccountContext.Provider>
  );
}
