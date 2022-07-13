import styled from 'styled-components';
import { Chat } from './chat';
import { Profile } from './profile';

const SideBarContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export function SideBar() {
  return (
    <SideBarContainer>
      <Profile />
      <Chat />
    </SideBarContainer>
  );
}
