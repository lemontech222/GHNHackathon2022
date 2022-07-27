import React from 'react'
import { EventContainer } from './EventsContainer.style'
import {ContainerWrap} from './ContainerWrap'
import {Link} from 'react-router-dom'

import appLogo from '../../../images/logo/ghnlogo.png';
import flyer from '../../../images/nuru.jpg';

const PostsContainer = ({isEvent}) => {
    console.log(isEvent)
  return (
    <ContainerWrap>
        <EventContainer>
            <Link to="/" className="hub-link">
                <div className="hub-name-logo">
                    <div className="hub-logo">
                        <img src={appLogo} alt="event owner" />
                    </div>
                    <div className="hub-name">
                        <h6>Ghana Hubs Network</h6>
                        <small>5 mins ago</small>
                    </div>
                </div>
            </Link>
            <h5 className="event-title">Women in Technology</h5>
            <p>Lorem ipsumLorem ipsumLorem ipsumLorem 
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsumLorem ipsumLorem ipsumLorem ipsum
            Lorem ipsumLorem ipsumipsumLorem ipsum</p>
            {isEvent && <button className="apply-btn">Apply</button>}
            <div className="event-flyer">
                <img src={flyer} alt="women in tech" />
            </div>
        </EventContainer>
    </ContainerWrap>
  )
}

export default PostsContainer

