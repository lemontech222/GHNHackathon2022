import React, {useEffect} from 'react';
import { ForumsWrapper } from './Forums.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMessage } from '@fortawesome/free-regular-svg-icons';
import { AnchorLink } from '..';
import useRequestResource from '../../../hooks/useRequestResource';
import moment from 'moment'

const Forums = () => {
  const {getResourceList, resourceList} = useRequestResource({endpoint:'forums/threads'})
 
  useEffect(()=>{
    getResourceList()
  },[getResourceList])

  return (
    <ForumsWrapper>
      <div className="forums-header">
        <h1>Forums</h1>
        <AnchorLink to="">
          <h3>See All</h3>
        </AnchorLink>
      </div>
      <div className="forums">
        {resourceList.results?.map((thread)=><AnchorLink to="" key={thread?.id}>
          <div className="forum-wrapper">
            <h3 className="forum-title">
              {thread?.title}
            </h3>
            <p className="forum-author">posted by: {thread?.author.username}</p>
            <p className="forum-body">
            {thread?.content}
            </p>
            <div className="forum-extras">
              <p className="forum-comments">
                <FontAwesomeIcon
                  icon={faMessage}
                  color="#34abde"
                  fontSize={15}
                />{' '}
                {thread?.comment_count}
              </p>
              <p className="forum-duration">
                {' '}
                <FontAwesomeIcon
                  icon={faClock}
                  color="#34abde"
                  fontSize={15}
                />{' '}
                {moment(thread?.date_posted).startOf('ss').fromNow()}
              </p>
            </div>
          </div>
        </AnchorLink>)}
      </div>
    </ForumsWrapper>
  );
};

export default Forums;
