import styled from 'styled-components';
import { LogoImage } from '../BrandLogo';
import { HeaderContainer, SubContainer } from '../SideBar/profile';
import Logo from '../../images/logo/ghnlogo.png';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const MessageSection = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MiddleSection = styled.div`
  width: 60%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Name = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin: 0;
  color: #484848;
`;

export const Message = styled.p`
  font-size: 13;
  margin: 0;
  color: #484848;
`;

export function Events() {
  const [events, setEvents] = useState([]);

  const GetEvents = async () => {
    const token = Cookies.get('jwt_access');

    Axios({
      method: 'get',
      url: 'api/events/',

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      (response) => {
        setEvents(response.data);
        // console.log(events);
      },
      (err) => {
        console.log('Error: ', err);
        // setError(err.response.data);
      }
    );
    console.log(events);
  };

  useEffect(() => {
    GetEvents();
  }, []);

  return (
    <SubContainer>
      <HeaderContainer bg="#ffffff" height={60} borderBottom>
        <div>Recent Events</div>
        <div>See All</div>
      </HeaderContainer>
      <MessageSection>
        <LogoImage size={3}>
          <img src={Logo} alt="hub logo" />
        </LogoImage>
        <MiddleSection>
          <Name>GHN</Name>
          <Message>Hi</Message>
        </MiddleSection>
      </MessageSection>
      <MessageSection>
        <LogoImage size={3}>
          <img src={Logo} alt="hub logo" />
        </LogoImage>
        <MiddleSection>
          <Name>GHN</Name>
          <Message>Hi</Message>
        </MiddleSection>
      </MessageSection>
      <MessageSection>
        <LogoImage size={3}>
          <img src={Logo} alt="hub logo" />
        </LogoImage>
        <MiddleSection>
          <Name>GHN</Name>
          <Message>Hi</Message>
        </MiddleSection>
      </MessageSection>
    </SubContainer>
  );
}
