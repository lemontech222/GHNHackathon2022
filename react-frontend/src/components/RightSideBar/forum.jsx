import styled from 'styled-components';
import { SubSubTitle, SubText } from '../Comon';
import { HeaderContainer, SubContainer } from '../SideBar/profile';
import { EventContainer } from './events';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faClock, faMessage } from '@fortawesome/free-regular-svg-icons';

const ForumWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Comments = styled.div`
  width: 100%;
  //   padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForumScroll = styled.div`
  width: 100%;
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export function Forum() {
  return (
    <SubContainer>
      <HeaderContainer bg="#ffffff" height={60} borderBottom>
        <div>Forum</div>
        <div>See All</div>
      </HeaderContainer>
      <ForumScroll>
        <EventContainer>
          <ForumWrapper>
            <SubSubTitle>
              How are the MEST Portfolio startups generating funds through VCs.
            </SubSubTitle>
            <SubText fontSize={12}>posted by: Kwame John</SubText>
            <SubText fontSize={15}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent....
            </SubText>
            <Comments>
              <SubText fontSize={14}>
                <FontAwesomeIcon
                  icon={faMessage}
                  color="#34abde"
                  fontSize={15}
                />{' '}
                234
              </SubText>
              <SubText fontSize={14} align="right">
                <FontAwesomeIcon icon={faClock} color="#34abde" fontSize={15} />{' '}
                2hr ago
              </SubText>
            </Comments>
          </ForumWrapper>
        </EventContainer>
        <EventContainer>
          <ForumWrapper>
            <SubSubTitle>
              How are the MEST Portfolio startups generating funds through VCs.
            </SubSubTitle>
            <SubText fontSize={12}>posted by: Kwame John</SubText>
            <SubText fontSize={15}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent....
            </SubText>
            <Comments>
              <SubText fontSize={14}>
                <FontAwesomeIcon
                  icon={faMessage}
                  color="#34abde"
                  fontSize={15}
                />{' '}
                234
              </SubText>
              <SubText fontSize={14} align="right">
                <FontAwesomeIcon icon={faClock} color="#34abde" fontSize={15} />{' '}
                2hr ago
              </SubText>
            </Comments>
          </ForumWrapper>
        </EventContainer>
        <EventContainer>
          <ForumWrapper>
            <SubSubTitle>
              How are the MEST Portfolio startups generating funds through VCs.
            </SubSubTitle>
            <SubText fontSize={12}>posted by: Kwame John</SubText>
            <SubText fontSize={15}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent....
            </SubText>
            <Comments>
              <SubText fontSize={14}>
                <FontAwesomeIcon
                  icon={faMessage}
                  color="#34abde"
                  fontSize={15}
                />{' '}
                234
              </SubText>
              <SubText fontSize={14} align="right">
                <FontAwesomeIcon icon={faClock} color="#34abde" fontSize={15} />{' '}
                2hr ago
              </SubText>
            </Comments>
          </ForumWrapper>
        </EventContainer>
      </ForumScroll>
    </SubContainer>
  );
}
