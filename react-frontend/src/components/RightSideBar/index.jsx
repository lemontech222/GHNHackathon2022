import styled from 'styled-components';
import { Events } from './events';
import { Forum } from './forum';

const SideBarContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export function RightSideBar(props) {
  const { events } = props;
  return (
    <SideBarContainer>
      <Events events={events} />
      <Forum />
    </SideBarContainer>
  );
}
