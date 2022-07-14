import styled from 'styled-components';
import { LogoImage } from '../../../components/BrandLogo';
import { Message, Name } from '../../../components/SideBar/chat';
import {
  HeaderContainer,
  SubContainer,
} from '../../../components/SideBar/profile';
import Logo from '../../../images/logo/ghnlogo.png';
import PostPhoto from '../../../images/nuru.jpg';

const HeaderCentreContainer = styled.div`
  width: 90%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Post = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
`;

const PostImage = styled.div`
  width: ${({ size }) => (size ? size + 'em' : '100%')};
  height: ${({ size }) => (size ? size + 'em' : '100%')};
  border-radius: ${({ rounded }) => (rounded ? '50%' : 'none')};

  img {
    width: 100%;
    height: 100%;
  }
`;

export function LatestPost() {
  return (
    <SubContainer>
      <HeaderContainer bg="#ffffff" height={90}>
        <LogoImage size={4}>
          <img src={Logo} alt="hub logo" />
        </LogoImage>
        <HeaderCentreContainer>
          <Name>GHN</Name>
          <Message>2 min ago</Message>
        </HeaderCentreContainer>
        <div>...</div>
      </HeaderContainer>
      <Post>
        Talent highlight for the just-ended Ghana Hubs Network Hackathon HOPin
        Academy, Tamale. GIZ Ghana Centre for Social Innovations Ghana Startup
        Ecosystem Dansyn Innovation Social Organisation - Dansyn ISO Ghana
        Enterprises Agency
      </Post>
      <PostImage>
        <img src={PostPhoto} alt="post " />
      </PostImage>
    </SubContainer>
  );
}
