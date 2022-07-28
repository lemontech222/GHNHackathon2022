import React from 'react';
import Chat from '../../Common/Chat/Chat';
import EntityProfile from '../../Common/EntityProfile/Profile';
import EventApp from '../../Common/EventApplications/EventApplications';
import SideBar from '../../Common/SideBar';
import { HomePage } from '../Home/Home.style';

const Hub = () => {
  return (
    <HomePage>
      <SideBar>
        <EntityProfile />
        <Chat />
      </SideBar>
      <div></div>
      <SideBar>
        <EventApp />
      </SideBar>
    </HomePage>
  );
};

export default Hub;
