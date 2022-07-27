import styled from 'styled-components';
import { CreatePost } from './createPost';
import { Event } from './event';
import { HubCarousel } from './hubsCarousel';
import { LatestPost } from './latestPost';
import { Tabs } from './tabs';
import Cookies from 'js-cookie';
import { useState } from 'react';

const MiddleSectionContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export function MiddleSection(props) {
  const { hubProfile, events } = props;
  let isAuth = false;
  if (Cookies.get('jwt_access')) isAuth = true;

  return (
    <MiddleSectionContainer>
      {isAuth && <CreatePost hubProfile={hubProfile} />}
      {isAuth && <Tabs />}
      {/* {isAuth && <HubCarousel />} */}

      <LatestPost />
      <Event events={events} />
    </MiddleSectionContainer>
  );
}
