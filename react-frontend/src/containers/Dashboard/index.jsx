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
  const [loading, setLoading] = useState(false);
  const [hubProfile, setHubProfile] = useState({});
  const [profileExist, setProfileExist] = useState(false);
  const token = Cookies.get('jwt_access');
  const decoded = jwt_decode(token);
  const url = `api/users/hubs/${decoded.user_id}/`;
  console.log(decoded);

  const fetchHub = async () => {
    setLoading(true);
    const response = await Axios({
      method: 'get',
      url: url,
      headers: {},
    }).catch((err) => {
      console.log('Error:', err);
    });

    if (response) {
      setProfileExist(true);
      setHubProfile(response.data);
      console.log(hubProfile);
    }

    setLoading(false);
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
          <ProfileForm />
        </InnerPageContainer>
      )}
    </PageContainer>
  );
}
