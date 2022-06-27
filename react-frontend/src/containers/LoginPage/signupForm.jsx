import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { BoldLink, Icon, Line, SubText, Title } from './loginForm';
import Axios from 'axios';

const SignupContainer = styled.form`
    position: absolute;
    width: 740px;
    height: 848px;
    left 665px;
    top: 132px;

    background: #ffffff;
    box-shadow: 0px 4px 5px 5px #CAC1C1;
    border-radius: 10px;
`;

const Entities = styled.div`
    position: absolute;
    width: 330px;
    height: 56px;
    left 356px;
    top: 44px;

    background: #D9D9D9;
    border-radius: 60px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Entity = styled.div`
  width: 33%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  color: ${({ color }) => (color ? color : '#322f2f')};
  background: ${({ background }) => (background ? background : '#D9D9D9')};

  &:hover {
    background: #34abde;
    color: #ffffff;
    cursor: pointer;
  }
`;

const EntityName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

export function SignupForm() {
  const [entity, setEntity] = useState('startup');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [userName, setUserName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState();

  const [confirm, setConfirmed] = useState();

  const EntityAction = (e) => {
    setEntity(e.target.id);
  };

  const confirmPassword = (e) => {
    e.target.value === password && setConfirmed(true);

    e.target.value !== password && setConfirmed(false);
  };

  const register = async (e) => {
    e.preventDefault();

    confirm === true &&
      Axios({
        method: 'post',
        url: 'http://localhost:8000/api/users/register/',
        data: {
          first_name: firstName,
          last_name: lastName,
          email: email,
          username: userName,
          password: password,
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      }).then(
        (response) => {
          console.log(response);
        },
        (err) => {
          console.log('Error: ', err);
        }
      );
  };

  return (
    <SignupContainer onSubmit={register}>
      <Title left={58}>Sign up</Title>
      <Entities>
        {entity === 'hub' && (
          <Entity background="#34abde" color="#ffffff">
            <EntityName id="hub" onClick={EntityAction}>
              Hub
            </EntityName>
          </Entity>
        )}
        {entity !== 'hub' && (
          <Entity>
            <EntityName id="hub" onClick={EntityAction}>
              Hub
            </EntityName>
          </Entity>
        )}

        {entity === 'startup' && (
          <Entity background="#34abde" color="#ffffff">
            <EntityName id="startup" onClick={EntityAction}>
              Person/ StartUp
            </EntityName>
          </Entity>
        )}
        {entity !== 'startup' && (
          <Entity>
            <EntityName id="startup" onClick={EntityAction}>
              Person/ StartUp
            </EntityName>
          </Entity>
        )}

        {entity === 'partner' && (
          <Entity background="#34abde" color="#ffffff">
            <EntityName id="partner" onClick={EntityAction}>
              Partner Org
            </EntityName>
          </Entity>
        )}
        {entity !== 'partner' && (
          <Entity>
            <EntityName id="partner" onClick={EntityAction}>
              Partner Org
            </EntityName>
          </Entity>
        )}
      </Entities>
      <InputField
        placeholder="First name"
        type="text"
        name="first_name"
        width={298}
        top={134}
        left={58}
        onChange={(e) => setFirstName(e.target.value)}
        required={true}
      />
      <InputField
        placeholder="Last name"
        typ="text"
        name="last_name"
        width={298}
        top={134}
        left={388}
        onChange={(e) => setLastName(e.target.value)}
        required={true}
      />
      <InputField
        placeholder="Username"
        type="text"
        name="username"
        width={628}
        top={223}
        left={58}
        onChange={(e) => setUserName(e.target.value)}
        required={true}
      />
      <InputField
        placeholder="Email"
        type="email"
        name="email"
        width={628}
        top={312}
        left={58}
        onChange={(e) => setEmail(e.target.value)}
        required={true}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        width={298}
        top={401}
        left={58}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
      />

      <InputField
        type="password"
        placeholder="Confirm Password"
        name="passwordConfirm"
        width={298}
        top={401}
        left={388}
        onChange={confirmPassword}
        required={true}
      />
      {confirm === false && (
        <SubText top={473} left={388} fontSize={12} width={298} color="red">
          Passwords don't match
        </SubText>
      )}
      {confirm === true && (
        <SubText top={473} left={388} fontSize={12} width={298} color="green">
          Passwords match
        </SubText>
      )}

      <SubText left={83} top={500} fontWeight="300" width={570} fontSize={15}>
        By clicking Agree & Join, you agree to the GHN{' '}
        <BoldLink fontSize={15} href="#">
          User Agreement,
        </BoldLink>{' '}
        <BoldLink fontSize={15} href="#">
          Privacy Policy,
        </BoldLink>{' '}
        and{' '}
        <BoldLink fontSize={15} href="#">
          Cookie Policy
        </BoldLink>
        .
      </SubText>
      <Button top={560} width={628} left={58} type="submit">
        <SubText
          top={26}
          left={247}
          width={135}
          fontWeight="600"
          color="#FFFFFF"
        >
          Agree & Join
        </SubText>
      </Button>
      <Line left={58} top={664} width={260} />
      <SubText top={647} left={353} width={44}>
        Or
      </SubText>
      <Line left={426} top={664} width={260} />
      <Button
        bgcolor="#FFFFFF"
        border="1px solid #000000"
        color="#000000"
        top={693}
        left={58}
        width={628}
      >
        <Icon left={163} />{' '}
        <SubText top={19} left={237} width={248} fontWeight="600">
          Continue with Google
        </SubText>
      </Button>
      <SubText left={198} top={788} fontWeight="300" width={271}>
        Already on GHN Connect?{' '}
      </SubText>
      <BoldLink href="/access/signin">
        <SubText
          left={451}
          top={788}
          fontWeight="300"
          width={125}
          color="#34ABDE"
        >
          Sign in
        </SubText>
      </BoldLink>
    </SignupContainer>
  );
}