import { AnchorLink } from '..';
import { ProfileWrapper } from './Profile.styles';
import HubLogo from '../../../images/fabhublogo.png';
import { ContainerWrap } from '../PostsContainer/ContainerWrap';
import CommunitiesCount from './CommunitiesCount';
import InnovatorsCount from './InnovatorsCount';

const EntityProfile = () => {
  return (
    <ContainerWrap noPadding>
      <ProfileWrapper>
        <div className="hero-section">
          <div className="profile-photo">
            <img src={HubLogo} alt="hub logo" />
          </div>
        </div>
        <div className="profile-name">
          <h2>Fab Hub Ashanti</h2>
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
