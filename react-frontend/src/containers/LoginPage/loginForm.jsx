import styled from 'styled-components';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import GoogleIcon from '../../images/icons/google.png';

const LoginFormContainer = styled.div`
    position: absolute;
    width: 484px;
    height: 718px;
    left 758px;
    top: 111px;

    background: #ffffff;
    box-shadow: 0px 4px 5px 5px #CAC1C1;
    border-radius: 10px;
`;

const Title = styled.h1`
  position: absolute;
  height: 66px;
  width: 171px;
  left: 26px;
  top: 49px;

  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 61px;

  color: #000000;
`;

export const SubText = styled.p`
  position: absolute;
  width: ${({ width }) => (width ? width + 'px' : '349px')};
  height: 32px;
  left: ${({ left }) => (left ? left + 'px' : '26px')};
  top: ${({ top }) => (top ? top + 'px' : '112px')};

  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  font-size: 20px;
  line-height: 24px;

  color: ${({ color }) => (color ? color : '#000000')};
`;

const Line = styled.div`
  position: absolute;
  width: 180px;
  height: 0px;
  left: ${({ left }) => (left ? left + 'px' : '26px')};
  top: ${({ top }) => (top ? top + 'px' : '535px')};

  border: 1px solid rgba(0, 0, 0, 0.7);
`;

const Icon = styled.div`
  position: absolute;
  width: 38px;
  height: 38px;
  left: 70px;
  top: 16px;
  background: url(${GoogleIcon});
`;

export function LoginForm() {
  return (
    <LoginFormContainer>
      <Title>Sign in</Title>
      <SubText>Stay up to date on the GHN platform</SubText>
      <InputField placeholder="Email or Username" />
      <InputField type="password" placeholder="Password" top={274} />
      <SubText top={368} color="#34ABDE" width={210}>
        Forgot password?
      </SubText>
      <Button>
        <SubText
          top={26}
          left={140}
          width={135}
          fontWeight="600"
          color="#FFFFFF"
        >
          Sign in
        </SubText>
      </Button>
      <Line />
      <SubText top={518} left={220} width={44}>
        Or
      </SubText>
      <Line left={278} />
      <Button
        bgcolor="#FFFFFF"
        border="1px solid #000000"
        color="#000000"
        top={564}
      >
        <Icon />{' '}
        <SubText top={19} left={114} width={248} fontWeight="600">
          Sign in with Google
        </SubText>
      </Button>
    </LoginFormContainer>
  );
}
