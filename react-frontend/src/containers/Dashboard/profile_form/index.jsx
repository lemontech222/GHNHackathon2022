import styled from 'styled-components';
import {
  InnerPageContainer,
  PageContainer,
} from '../../../components/PageContainer';

const ProfileFormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function ProfileForm() {
  return (
    <PageContainer>
      <InnerPageContainer>Boom</InnerPageContainer>
    </PageContainer>
  );
}
