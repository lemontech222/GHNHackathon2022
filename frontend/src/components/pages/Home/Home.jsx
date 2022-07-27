import React, { useEffect, useState } from 'react';
import { useTokens } from '../../../context/TokensContext';
import useRequestResource from '../../../hooks/useRequestResource';
import SideBar from '../../Common/SideBar';
import { HomePage } from './Home.style';

const Home = () => {
  const { tokens } = useTokens();
  const { getResourceCount, resourceCount } = useRequestResource({
    endpoint: 'users/innovators/count',
    tokens: { tokens },
  });
  console.log(resourceCount);

  useEffect(() => {
    getResourceCount();
  }, [getResourceCount]);

  return (
    <HomePage>
      <SideBar>Left</SideBar>
      <div style={{ border: '1px solid black' }}></div>
      <SideBar>Right</SideBar>
    </HomePage>
  );
};

export default Home;
