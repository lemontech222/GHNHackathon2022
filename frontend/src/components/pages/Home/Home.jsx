import React, { useEffect, useState } from 'react';
import { useTokens } from '../../../context/TokensContext';
import Forums from '../../Common/Forum/Forums';
import SideBar from '../../Common/SideBar';
import { HomePage } from './Home.style';
import SideAds from '../../Common/Adverts/SideAds/SideAds';
import Advert1 from '../../../images/ads/advert1.jpeg';
import Advert2 from '../../../images/ads/advert2.jpeg';
import Profile from './Profile/Profile';
import ItemsCarousel from '../../Common/Carousel/Carousel';
import EventsListContainer from './EventsListContainer';
import PostsListContainer from './PostsListContainer';

const Home = () => {
  
  return (
    <HomePage>
      <SideBar>
        <Profile />
        <SideAds>
          <img src={Advert1} alt="ad1" />

          <img src={Advert2} alt="ad2" />
        </SideAds>
      </SideBar>
      <div className="mid-section" style={{ display: 'grid' }}>
        <EventsListContainer />
        <ItemsCarousel />
        <PostsListContainer />
      </div>
      <SideBar>
        <Forums />
      </SideBar>
    </HomePage>
  );
};

export default Home;
