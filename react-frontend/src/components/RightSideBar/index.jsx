import styled from 'styled-components';

const SideBarContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export function RightSideBar() {
  return <SideBarContainer></SideBarContainer>;
}
