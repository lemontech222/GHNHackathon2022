import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import GoogleIcon from '../../images/icons/google.png';
import Axios from 'axios';
import Cookies from 'js-cookie';

const LoginFormContainer = styled.form`
    position: absolute;
    width: 484px;
    height: 718px;
    left 758px;
    top: 161px;

    background: #ffffff;
    box-shadow: 0px 4px 5px 5px #CAC1C1;
    border-radius: 10px;
`;

export const Title = styled.h1`
  position: absolute;
  height: ${({ height }) => (height ? height + 'px' : '66px')};
  // width: ${({ width }) => (width ? width + 'px' : '150px')};
  left: ${({ left }) => (left ? left + 'px' : '26px')};
  top: ${({ top }) => (top ? top + 'px' : '49px')};

  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '40px')};
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
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '20px')};
  line-height: 24px;
  text-align: ${({ align }) => (align ? align : 'left')};

  color: ${({ color }) => (color ? color : '#000000')};
`;

export const Line = styled.div`
  position: absolute;
  width: ${({ width }) => (width ? width + 'px' : '180px')};
  height: 0px;
  left: ${({ left }) => (left ? left + 'px' : '26px')};
  top: ${({ top }) => (top ? top + 'px' : '535px')};

  border: 1px solid rgba(0, 0, 0, 0.7);
`;

export const Icon = styled.div`
  position: absolute;
  width: 38px;
  height: 38px;
  left: ${({ left }) => (left ? left + 'px' : '70px')};
  top: 16px;
  background: url(${GoogleIcon});
`;

export const BoldLink = styled.a`
  color: #34abde;
  font-weight: 400;
  font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '18px')};
  text-decoration: none;
  margin: 0 3px;
`;

export function LoginForm() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState();

  const [error, setError] = useState({});

  const signIn = async (e) => {
    e.preventDefault();

    Axios({
      method: 'post',
      url: 'api/token/',
      data: {
        email: email,
        password: password,
      },
    }).then(
      (response) => {
        console.log(response);
        Cookies.set('jwt_access', response.data.access);
        Cookies.set('jwt_refresh', response.data.refresh);
        window.location.href = '/';
      },
      (err) => {
        console.log('Error: ', err);
        setError(err.response.data);
      }
    );
  };

  return (
    <LoginFormContainer onSubmit={signIn}>
      <Title>Sign in</Title>
      <SubText>Stay up to date on the GHN platform</SubText>
      {error.detail && (
        <SubText top={135} left={26} fontSize={14} width={398} color="red">
          {error.detail}
        </SubText>
      )}
      <InputField
        type="email"
        placeholder="Email or Username"
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />
      <InputField
        type="password"
        placeholder="Password"
        top={274}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />
      <SubText top={368} color="#34ABDE" width={210}>
        Forgot password?
      </SubText>
      <Button absolute top={422} left={26} type="submit">
        <SubText
          top={26}
          left={140}
          width={135}
          fontWeight="600"
          align="center"
          color="#FFFFFF"
        >
          Sign in
        </SubText>
      </Button>
      <Line />
      <SubText top={518} left={220} width={44} align="center">
        Or
      </SubText>
      <Line left={278} />
      <Button
        absolute
        bgcolor="#FFFFFF"
        border="1px solid #000000"
        color="#000000"
        top={564}
        left={26}
      >
        <Icon />{' '}
        <SubText
          top={19}
          left={114}
          width={248}
          fontWeight="600"
          align="center"
        >
          Sign in with Google
        </SubText>
      </Button>
      <SubText left={6} top={670} fontWeight="300" width={371} align="center">
        New to GHN Connect?{' '}
      </SubText>
      <BoldLink href="/signup">
        <SubText
          left={160}
          top={670}
          fontWeight="300"
          width={371}
          color="#34ABDE"
          align="center"
        >
          Join now
        </SubText>
      </BoldLink>
    </LoginFormContainer>
  );
}
