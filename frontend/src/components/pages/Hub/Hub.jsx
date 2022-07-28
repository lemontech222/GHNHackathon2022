import React from 'react';
import EntityProfile from '../../Common/EntityProfile/Profile';
import SideBar from '../../Common/SideBar';
import { HomePage } from '../Home/Home.style';

const Hub = () => {
  return (
    <HomePage>
      <SideBar>
        <EntityProfile />
      </SideBar>
      <div></div>
      <SideBar>Right</SideBar>
    </HomePage>
  );
};

export default Hub;
