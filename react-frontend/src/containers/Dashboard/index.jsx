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
  const [events, setEvents] = useState([]);

  const token = Cookies.get('jwt_access');
  const decoded = jwt_decode(token);

  const GetEvents = async () => {
    Axios({
      method: 'get',
      url: 'api/events/list/',
    }).then(
      (response) => {
        setEvents(response.data);
        console.log(response.data);
      },
      (err) => {
        console.log('Error: ', err);
      }
    );
    console.log(events);
  };

  useEffect(() => {
    GetEvents();
  }, []);

  if (token) {
  }

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
      setHubProfile(response.data);
      console.log(hubProfile);
    }
  };

  useEffect(() => {
    fetchHub();
  }, []);

  return (
    <PageContainer>
      <Navbar username={decoded.username} />
      {!hubProfile.newly_created && (
        <InnerPageContainer>
          <SideBar hubProfile={hubProfile} />
          <MiddleSection hubProfile={hubProfile} events={events} />
          <RightSideBar events={events} />
        </InnerPageContainer>
      )}
      {hubProfile.newly_created && (
        <InnerPageContainer>
          <ProfileForm hubProfile={hubProfile} />
        </InnerPageContainer>
      )}
    </PageContainer>
  );
}
