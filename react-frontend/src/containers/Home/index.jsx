import { Navbar } from '../../components/Navbar';
import {
  InnerPageContainer,
  PageContainer,
} from '../../components/PageContainer';
import { RightSideBar } from '../../components/RightSideBar';
import { SideBar } from '../../components/SideBar';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { MiddleSection } from '../Dashboard/MiddleSection';

export function Home() {
  const [events, setEvents] = useState([]);

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

  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <SideBar noToken />
        <MiddleSection events={events} />
        <RightSideBar events={events} />
      </InnerPageContainer>
    </PageContainer>
  );
}
