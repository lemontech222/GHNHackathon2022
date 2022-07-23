import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { Navbar } from '../../components/Navbar';
import {
  InnerPageContainer,
  PageContainer,
} from '../../components/PageContainer';
import { RightSideBar } from '../../components/RightSideBar';
import { SideBar } from '../../components/SideBar';
import { MiddleSection } from './MiddleSection';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { ProfileForm } from './profile_form';

export function Dashboard() {
  const [hubProfile, setHubProfile] = useState({});
  const [profileExist, setProfileExist] = useState(false);
  const token = Cookies.get('jwt_access');
  const decoded = jwt_decode(token);
  // console.log(decoded);

  const fetchHub = async () => {
    !token && (window.location.href = '/signin');
    const response = await Axios({
      method: 'get',
      url: 'api/users/get_hub/',
      headers: { Authorization: `Bearer ${token}` },
    }).catch((err) => {
      console.log('Error:', err);
    });

    if (response) {
      const profile = response.data;
      !profile.newly_created && setProfileExist(true);
      setHubProfile(response.data);
      // console.log(hubProfile);
      // console.log(profileExist);
    }
  };

  useEffect(() => {
    fetchHub();
  }, []);

  return (
    <PageContainer>
      <Navbar username={decoded.username} />
      {profileExist && (
        <InnerPageContainer>
          <SideBar />
          <MiddleSection />
          <RightSideBar />
        </InnerPageContainer>
      )}
      {!profileExist && (
        <InnerPageContainer>
          <ProfileForm hubProfile={hubProfile} />
        </InnerPageContainer>
      )}
    </PageContainer>
  );
}
