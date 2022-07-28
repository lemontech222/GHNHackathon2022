import React, {useEffect} from 'react'
import useRequestResource from '../../../hooks/useRequestResource';
import PostsContainer from '../../Common/PostsContainer/PostsContainer';

const EventsListContainer = () => {
    const {getResourceList, resourceList} = useRequestResource({endpoint:'events/posts/list'})

  useEffect(()=>{
    getResourceList()
  },[getResourceList])

  return (
    <>
        {resourceList.results?.map((event)=><PostsContainer key={event.id} event={event} isEvent={false} />)}
    </>
  )
}

export default EventsListContainer