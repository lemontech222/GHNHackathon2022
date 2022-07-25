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

export function MiddleSection(props) {
  const { hubProfile } = props;
  return (
    <MiddleSectionContainer>
      <CreatePost hubProfile={hubProfile} />
      <Tabs />
      <HubCarousel />
      <LatestPost />
    </MiddleSectionContainer>
  );
}
