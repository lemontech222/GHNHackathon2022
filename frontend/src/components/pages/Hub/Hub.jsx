import React from 'react';
import ItemsCarousel from '../../Common/Carousel/Carousel';
import Chat from '../../Common/Chat/Chat';
import CreatePost from '../../Common/CreatePost/CreatePost';
import EntityProfile from '../../Common/EntityProfile/Profile';
import EventApp from '../../Common/EventApplications/EventApplications';
import Forums from '../../Common/Forum/Forums';
import { Marginer } from '../../Common/Marginer';
import SideBar from '../../Common/SideBar';
import EventsListContainer from '../Home/EventsListContainer';
import { HomePage } from '../Home/Home.style';

const Hub = () => {
  return (
    <HomePage>
      <SideBar>
        <EntityProfile />
        <Chat />
      </SideBar>
      <div>
        <CreatePost />
        <Marginer direction="vertical" margin={20} />
        <ItemsCarousel />
        <EventsListContainer />
      </div>
      <SideBar>
        <EventApp />
        <Forums />
      </SideBar>
    </HomePage>
  );
};

export default Hub;
