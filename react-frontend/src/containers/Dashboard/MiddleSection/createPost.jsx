import styled from 'styled-components';
import { LogoImage } from '../../../components/BrandLogo';
import { Button } from '../../../components/Button';
import { SubContainer } from '../../../components/SideBar/profile';
import Logo from '../../../images/logo/ghnlogo.png';

const TopDesign = styled.div`
  width: 100%;
  background: #34abde;
  min-height: 8px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const CreatePostContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function CreatePost() {
  return (
    <SubContainer>
      <TopDesign />
      <CreatePostContainer>
        {' '}
        <LogoImage size={5}>
          <img src={Logo} alt="hub logo" />
        </LogoImage>
        <Button
          width={150}
          height={50}
          size={17}
          font-weight={400}
          bradius={10}
        >
          Post an Event
        </Button>
      </CreatePostContainer>
    </SubContainer>
  );
}
