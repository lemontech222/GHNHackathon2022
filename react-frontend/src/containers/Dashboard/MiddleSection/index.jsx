import styled from 'styled-components';
import { CreatePost } from './createPost';
import { HubCarousel } from './hubsCarousel';
import { LatestPost } from './latestPost';
import { Tabs } from './tabs';

const MiddleSectionContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export function MiddleSection() {
  return (
    <MiddleSectionContainer>
      <CreatePost />
      <Tabs />
      <HubCarousel />
      <LatestPost />
    </MiddleSectionContainer>
  );
}
