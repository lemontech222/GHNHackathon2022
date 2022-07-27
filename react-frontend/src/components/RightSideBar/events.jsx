import styled from 'styled-components';
import { LogoImage } from '../BrandLogo';
import { HeaderContainer, SubContainer } from '../SideBar/profile';
import { SubSubTitle, SubText } from '../Comon';

export const EventContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 5px 5px;
  display: fllex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);

  &:hover {
    cursor: pointer;
    filter: contrast(0.8);
    box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
    -webkit-box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
    -moz-box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
  }
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

export function Events(props) {
  const { events } = props;

  return (
    <SubContainer>
      <HeaderContainer bg="#ffffff" height={60} borderBottom>
        <div>Recent Events</div>
        <div>See All</div>
      </HeaderContainer>
      {events &&
        events.map((event, idx) => {
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
