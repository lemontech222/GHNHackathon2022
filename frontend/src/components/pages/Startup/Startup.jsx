import React, {useEffect} from 'react';
import ItemsCarousel from '../../Common/Carousel/Carousel';
import CreatePost from '../../Common/CreatePost/CreatePost';
import EntityProfile from '../../Common/EntityProfile/Profile';
import Forums from '../../Common/Forum/Forums';
import SideBar from '../../Common/SideBar';
import EventsListContainer from '../Home/EventsListContainer';
import { HomePage } from '../Home/Home.style';
import { useNavigate } from 'react-router-dom'
import { useTokens } from '../../../context/TokensContext'

const Startup = () => {
  const navigate = useNavigate()
  const {user,tokens} = useTokens()
    
  useEffect(()=>{
    if(!tokens){
        navigate('/login')
    }else if(user?.is_hub_admin){
        navigate('hub')
    }else if(!user?.is_startup_admin && !user?.is_hub_admin){
      navigate('/')
    }
  },[tokens,user,navigate])

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
