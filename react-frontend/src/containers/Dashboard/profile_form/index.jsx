import styled from 'styled-components';
import {
  InnerPageContainer,
  PageContainer,
} from '../../../components/PageContainer';
import { HubProfile } from './hubProfile';

const ProfileFormContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function ProfileForm(props) {
  const { hubProfile } = props;
  return (
    <PageContainer>
      <InnerPageContainer>
        <ProfileFormContainer>
          <HubProfile hubProfile={hubProfile} />
        </ProfileFormContainer>
      </InnerPageContainer>
    </PageContainer>
  );
}
