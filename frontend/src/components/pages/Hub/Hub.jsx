import React, {useEffect} from 'react';
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
import { useNavigate } from 'react-router-dom'
import { useTokens } from '../../../context/TokensContext'

import { useHub } from '../../../context/HubContext';

const Hub = () => {
  const {hub} = useHub()
  const navigate = useNavigate()
  const {user,tokens} = useTokens()
    
  useEffect(()=>{
    if(!tokens){
        navigate('/login')
    }else if(user?.is_startup_admin){
        navigate('startup')
    }else if(!user?.is_startup_admin && !user?.is_hub_admin){
      navigate('/')
    }
},[tokens,user,navigate])

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
