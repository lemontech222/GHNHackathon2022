import React from 'react';
import ItemsCarousel from '../../Common/Carousel/Carousel';
import CreatePost from '../../Common/CreatePost/CreatePost';
import EntityProfile from '../../Common/EntityProfile/Profile';
import Forums from '../../Common/Forum/Forums';
import SideBar from '../../Common/SideBar';
import EventsListContainer from '../Home/EventsListContainer';
import { HomePage } from '../Home/Home.style';

const Startup = () => {
  return (
    <HomePage>
      <SideBar>
        <EntityProfile />
      </SideBar>
      <div>
        <CreatePost />
        <ItemsCarousel />
        <EventsListContainer />
      </div>
      <SideBar>
        <Forums />
      </SideBar>
    </HomePage>
  );
};

export default Startup;
