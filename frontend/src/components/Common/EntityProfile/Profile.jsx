import { AnchorLink } from '..';
import { ProfileWrapper } from './Profile.styles';
import { ContainerWrap } from '../PostsContainer/ContainerWrap';
import CommunitiesCount from './CommunitiesCount';
import InnovatorsCount from './InnovatorsCount';
import { useTokens } from '../../../context/TokensContext';

const EntityProfile = () => {
  const { user } = useTokens();
  return (
    <ContainerWrap noPadding>
      <ProfileWrapper>
        <div className="hero-section">
          <div className="profile-photo">
            <img src={user?.hub.hub_profile_pic} alt="hub logo" />
          </div>
        </div>
        <div className="profile-name">
          <h2>{user?.hub.hub_name}</h2>
        </div>
        <div className="info-section">
          <div className="info">
            <h3>Communities</h3>
            <CommunitiesCount />
          </div>
          <div className="info">
            <h3>Innovators/Enterpreneurs</h3>
            <InnovatorsCount />
          </div>
          <div className="action">
            <AnchorLink to="">
              <p>View Profile</p>
            </AnchorLink>
          </div>
        </div>
      </ProfileWrapper>
    </ContainerWrap>
  );
};

export default EntityProfile;
