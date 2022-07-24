import styled from 'styled-components';

const SubContainer = styled.div`
  width: 100%;
  background: #ffffff;
  margin-top: 30px;
  padding: 0 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px #cac1c1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Tab = styled.div`
  padding: 10px;
  border-radius: 10px;
  color: #34abde;
  border-bottom: 3px solid #34abde;
  border-top: 3px solid #34abde;
  margin-right: 5px;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    background: #34abde;
    color: #ffffff;
    cursor: pointer;
  }
`;

export function Tabs() {
  return (
    <SubContainer>
      <TabsContainer>
        <Tab>Events</Tab>
        <Tab>Start Ups</Tab>
        <Tab>Enterpreneurs</Tab>
      </TabsContainer>
    </SubContainer>
  );
}
