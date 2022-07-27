import React, { useEffect, useState } from 'react';
import { useTokens } from '../../../context/TokensContext';
import useRequestResource from '../../../hooks/useRequestResource';
import SideBar from '../../Common/SideBar';
import { HomePage } from './Home.style';
import PostsContainer from '../../Common/PostsContainer/PostsContainer';

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
      <SideBar>Left</SideBar>
      <div className="mid-section">
        <PostsContainer isEvent={true} />
        {/* <HubsCarousel /> */}
        <PostsContainer isEvent={false} />
      </div>      
      <SideBar>Right</SideBar>
    </HomePage>
  );
};

export default Home;
