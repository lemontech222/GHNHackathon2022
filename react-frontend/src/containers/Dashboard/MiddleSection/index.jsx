import styled from 'styled-components';
import { CreatePost } from './createPost';
import { LatestPost } from './latestPost';

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
      <LatestPost />
    </MiddleSectionContainer>
  );
}
