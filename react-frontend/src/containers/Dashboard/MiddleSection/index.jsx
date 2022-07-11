import styled from 'styled-components';
import { CreatePost } from './createPost';

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
    </MiddleSectionContainer>
  );
}
