import React from 'react'
import { EventContainer } from './EventsContainer.style'
import {ContainerWrap} from './ContainerWrap'
import {Link} from 'react-router-dom'
import moment from 'moment'


const PostsContainer = ({event, isEvent}) => {
  return (
    <ContainerWrap>
        <EventContainer>
            <Link to="/" className="hub-link">
                <div className="hub-name-logo">
                    <div className="hub-logo">
                        <img src={event?.hub.hub_profile_pic} alt="event owner" />
                    </div>
                    <div className="hub-name">
                        <h6>{event?.hub.hub_name}</h6>
                        <small>Posted {moment(event?.date_posted).startOf('ss').fromNow()}</small>
                    </div>
                </div>
            </Link>
            <h5 className="event-title">{event?.title}</h5>
            <p>{event?.description}</p>
            {isEvent && <>
                <h6>Venue: {event?.location}</h6>
                <h6>Start date: {new Date(Date(event?.start_date.isoformat)).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h6>
                <h6>End date: {new Date(Date(event?.end_date.isoformat)).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</h6>
                <h6>Contact number: {event?.contact_person}</h6>
                <button className="apply-btn" style={{display:'inline-block',margin:'5px 0px'}}>Apply</button>
            </>}
            <div className="event-flyer">
                <img src={event?.event_pic} alt="women in tech" />
            </div>
        </EventContainer>
    </ContainerWrap>
  )
}

export default PostsContainer

