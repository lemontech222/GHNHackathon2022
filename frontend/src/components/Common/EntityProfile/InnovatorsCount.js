import React, { useEffect } from 'react'
import useRequestResource from '../../../hooks/useRequestResource';


const InnovatorsCount = () => {
    const {getResourceCounts, resourceCounts} = useRequestResource({endpoint:'hub_innovators/count'})
   
    useEffect(()=>{
        getResourceCounts()
    },[getResourceCounts])
    return (
        <h3>{resourceCounts?.innovators_count}</h3>
    )
}

export default InnovatorsCount
