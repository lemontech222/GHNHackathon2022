import Logo from '../../../images/fabhublogo.png';
import { EventAppWrapper } from './EventApplications.style';

const EventApp = () => {
  return (
    <EventAppWrapper>
      <div className="eventApp-header">
        <h2>Event Applications</h2>
      </div>
      <div className="eventApps">
        <div className="eventApp-wrapper">
          <div className="profile-pic">
            <img src={Logo} alt="logo" />
          </div>
          <div className="application-section">
            <h1>HOPin Academy</h1>
            <p>Please attached report for...</p>
            <h4>Applied 1hr Ago</h4>
          </div>
        </div>
        <div className="eventApp-wrapper">
          <div className="profile-pic">
            <img src={Logo} alt="logo" />
          </div>
          <div className="application-section">
            <h1>HOPin Academy</h1>
            <p>Please attached report for...</p>
            <h4>Applied 1hr Ago</h4>
          </div>
        </div>
        <div className="eventApp-wrapper">
          <div className="profile-pic">
            <img src={Logo} alt="logo" />
          </div>
          <div className="application-section">
            <h1>HOPin Academy</h1>
            <p>Please attached report for...</p>
            <h4>Applied 1hr Ago</h4>
          </div>
        </div>
        <div className="eventApp-wrapper">
          <div className="profile-pic">
            <img src={Logo} alt="logo" />
          </div>
          <div className="application-section">
            <h1>HOPin Academy</h1>
            <p>Please attached report for...</p>
            <h4>Applied 1hr Ago</h4>
          </div>
        </div>
      </div>
    </EventAppWrapper>
  );
};

export default EventApp;
