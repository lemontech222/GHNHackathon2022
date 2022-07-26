import styled from 'styled-components';
import { LogoImage } from '../BrandLogo';
import { HeaderContainer, SubContainer } from '../SideBar/profile';
import Axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { SubSubTitle, SubText } from '../Comon';

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

const EventContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px 10px;
  display: fllex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`;

const Hub = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Event = styled.div`
  width: 68%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Events() {
  const [events, setEvents] = useState([]);

  const GetEvents = async () => {
    const token = Cookies.get('jwt_access');

    Axios({
      method: 'get',
      url: 'api/events/list/',

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      (response) => {
        setEvents(response.data);
        console.log(response.data);
      },
      (err) => {
        console.log('Error: ', err);
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
      {events &&
        events.map((event) => {
          return (
            <EventContainer>
              <Hub>
                <LogoImage size={3}>
                  <img
                    src={event.hub.hub_profile_pic}
                    alt={event.hub.hub_name}
                  />
                </LogoImage>
              </Hub>
              <Event>
                <SubSubTitle fontWeight={500} fontSize={12} color="#34abde">
                  {event.title}
                </SubSubTitle>
                <SubText fontWeight={400} fontSize={12}>
                  {event.description}
                </SubText>
              </Event>
            </EventContainer>
          );
        })}
    </SubContainer>
  );
}
