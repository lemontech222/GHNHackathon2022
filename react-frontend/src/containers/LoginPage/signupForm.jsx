import styled from 'styled-components';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { BoldLink, Icon, Line, SubText, Title } from './loginForm';

const SignupContainer = styled.div`
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
    justify-content: center;
    align-items: center;
`;

const Entity = styled.div`
  width: 30%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EntityName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #322f2f;
`;

export function SignupForm() {
  return (
    <SignupContainer>
      <Title left={58}>Sign up</Title>
      <Entities>
        <Entity>
          <EntityName>Hub</EntityName>
        </Entity>
        <Entity>
          <EntityName>Person/ StartUp</EntityName>
        </Entity>
        <Entity>
          <EntityName>Partner Org</EntityName>
        </Entity>
      </Entities>
      <InputField placeholder="First name" width={298} top={134} left={58} />
      <InputField placeholder="Last name" width={298} top={134} left={388} />
      <InputField
        placeholder="Email or Username"
        width={628}
        top={223}
        left={58}
      />
      <InputField
        type="password"
        placeholder="Password"
        width={628}
        top={312}
        left={58}
      />
      <InputField
        type="password"
        placeholder="Confirm Password"
        width={628}
        top={401}
        left={58}
      />
      <SubText left={83} top={492} fontWeight="300" width={570}>
        By clicking Agree & Join, you agree to the GHN{' '}
        <BoldLink href="#">User Agreement,</BoldLink>{' '}
        <BoldLink href="#">Privacy Policy,</BoldLink> and{' '}
        <BoldLink href="#">Cookie Policy</BoldLink> .
      </SubText>
      <Button top={560} width={628} left={58}>
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
