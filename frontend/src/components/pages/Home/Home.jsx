import React, { useEffect, useState } from 'react';
import { useTokens } from '../../../context/TokensContext';
import useRequestResource from '../../../hooks/useRequestResource';
import Forums from '../../Common/Forum/Forums';
import SideBar from '../../Common/SideBar';
import { HomePage } from './Home.style';
import PostsContainer from '../../Common/PostsContainer/PostsContainer';
import ItemsCarousel from '../../Common/Carousel/Carousel'

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
      <div className="mid-section" style={{display:'grid'}}>
        <PostsContainer isEvent={true} />
        <ItemsCarousel />
        <PostsContainer isEvent={false} />
      </div>
      <SideBar>
        <Forums />
      </SideBar>
    </HomePage>
  );
};

export default Home;
