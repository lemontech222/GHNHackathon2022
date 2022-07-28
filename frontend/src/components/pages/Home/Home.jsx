import React, { useEffect, useState } from 'react';
import { useTokens } from '../../../context/TokensContext';
import useRequestResource from '../../../hooks/useRequestResource';
import Forums from '../../Common/Forum/Forums';
import SideBar from '../../Common/SideBar';
import { HomePage } from './Home.style';
import PostsContainer from '../../Common/PostsContainer/PostsContainer';
import SideAds from '../../Common/Adverts/SideAds/SideAds';
import Advert1 from '../../../images/ads/advert1.jpeg';
import Advert2 from '../../../images/ads/advert2.jpeg';
import Profile from './Profile/Profile';

const Home = () => {
  const { tokens } = useTokens();
  const { getResourceCount, resourceCount } = useRequestResource({
    endpoint: 'users/innovators/count',
    tokens: { tokens },
  });
  // console.log(resourceCount);

  useEffect(() => {
    getResourceCount();
  }, [getResourceCount]);

  return (
    <HomePage>
      <SideBar>
        <Profile />
        <SideAds>
          <img src={Advert1} alt="ad1" />

          <img src={Advert2} alt="ad2" />
        </SideAds>
      </SideBar>
      <div className="mid-section">
        <PostsContainer isEvent={true} />
        {/* <HubsCarousel /> */}
        <PostsContainer isEvent={false} />
      </div>
      <SideBar>
        <Forums />
      </SideBar>
    </HomePage>
  );
};

export default Home;
