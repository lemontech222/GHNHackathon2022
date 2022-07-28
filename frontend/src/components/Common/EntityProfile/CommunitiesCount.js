import React, { useEffect } from 'react'
import useRequestResource from '../../../hooks/useRequestResource';

const CommunitiesCount = () => {
    const {getResourceCounts, resourceCounts} = useRequestResource({endpoint:'hub_communities/count'})
    console.log(resourceCounts)
    useEffect(()=>{
        getResourceCounts()
    },[getResourceCounts])
  return (
    <h3>{resourceCounts?.communities_count}</h3>
  )
}

export default CommunitiesCount
