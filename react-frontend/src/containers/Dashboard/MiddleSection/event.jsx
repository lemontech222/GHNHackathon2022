import styled from 'styled-components';
import { LogoImage } from '../../../components/BrandLogo';
import { Button } from '../../../components/Button';
import { SubText } from '../../../components/Comon';
import { Marginer } from '../../../components/Marginer';
import { Message, Name } from '../../../components/SideBar/chat';
import {
  HeaderContainer,
  SubContainer,
} from '../../../components/SideBar/profile';
import Axios from 'axios';
import Cookies from 'js-cookie';

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
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
`;

const PostImage = styled.div`
  width: ${({ size }) => (size ? size + 'em' : '80%')};
  height: ${({ size }) => (size ? size + 'em' : '80%')};
  border-radius: ${({ rounded }) => (rounded ? '50%' : 'none')};

  img {
    width: 100%;
    height: 100%;
  }
`;

const CommentSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function Event(props) {
  const { events } = props;

  const ApplyEvent = (id) => {
    Axios({
      method: 'post',
      url: 'api/events/apply/',
      data: {
        event_id: id,
      },
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_access')}`,
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log('Error: ', err);
        // setError(err.response.data);
      }
    );
  };

  return (
    events &&
    events.map((event, idx) => {
      return (
        <SubContainer align="center">
          <HeaderContainer bg="#ffffff" height={90}>
            <LogoImage size={4}>
              <img src={event.hub.hub_profile_pic} alt={event.hub.hub_name} />
            </LogoImage>
            <HeaderCentreContainer>
              <Name>{event.hub.hub_name}</Name>
              <Message>2 min ago</Message>
            </HeaderCentreContainer>
            <div>...</div>
          </HeaderContainer>
          <Post>
            <SubText fontSize={18}>Title: {event.title}</SubText>
            <SubText fontSize={18}>Description: {event.description}</SubText>
            <SubText fontSize={18}>Location: {event.location}</SubText>
            <SubText fontSize={18}>Start Date: {event.start_date}</SubText>
            <SubText fontSize={18}>End Date: {event.end_date}</SubText>
            <Marginer direction="vertical" margin={10} />
            <Button
              bradius={5}
              width="20%"
              height="100px"
              size={18}
              click={ApplyEvent(idx)}
            >
              Apply
            </Button>
          </Post>

          <PostImage>
            <img src={event.event_pic} alt="post " />
          </PostImage>
          <Marginer direction="vertical" margin={50} />
        </SubContainer>
      );
    })
  );
}
