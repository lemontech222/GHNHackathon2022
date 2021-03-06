import styled from 'styled-components';
import { Marginer } from '../Marginer';
import { Advert } from './adverts';
import { Chat } from './chat';
import { Profile } from './profile';

const SideBarContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export function SideBar(props) {
  const { hubProfile, noToken } = props;
  return (
    <SideBarContainer>
      <Profile hubProfile={hubProfile} />
      {!noToken && <Chat />}
      <Marginer direction="vertical" margin={60} />
      {noToken && <Advert />}
    </SideBarContainer>
  );
}
