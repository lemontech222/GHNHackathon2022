import { AnchorLink } from '../../../Common';
import { ProfileWrapper } from './Profile.styles';

const Profile = () => {
  return (
    <ProfileWrapper>
      <div className="hero-section">
        <div className="hero-filter">
          <h1>Creating a Synergized Ecosystem</h1>
          <h4>
            Connecting Ghana’s Entrepreneur to Innovation Hubs, Investors &
            Major Industry players.
          </h4>
        </div>
      </div>
      <div className="info-section">
        <div className="info">
          <h3>Hubs</h3>
          <h3>51</h3>
        </div>
        <div className="info">
          <h3>Innovators/Enterpreneurs</h3>
          <h3>1674</h3>
        </div>
        <div className="action">
          <AnchorLink to="">
            <p>Learn more...</p>
          </AnchorLink>
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
