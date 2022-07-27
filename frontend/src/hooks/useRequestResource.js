import { useCallback, useState, useContext } from "react";
import axios from 'axios';


const useRequestResource = ({endpoint, tokens}) => {
    const [resourceList, setResourceList] = useState({
        results:[]
    });
    const [resource,setResource] = useState(null);
    const [resourceCount,setResourceCount] = useState(null);
    const [error,setError] = useState(null);

    
    const getResourceCount = useCallback(()=>{
        axios.get(`/api/${endpoint}/`)
            .then((res)=>{
                const {data} = res
                setResourceCount(data)
            }).catch((error)=>{
                console.log(error)
            })
    },[endpoint])


    const getResourceList = useCallback(()=>{
        axios.get(`/api/${endpoint}/`)
            .then((res)=>{
                setResourceList({
                    results:res.data
                })
            }).catch((error)=>{
                console.log(error)
            })
    },[endpoint])

    return {
        resourceList,
        getResourceList,
        resource,
        getResourceCount,
        resourceCount,
        error,
    }

}

export default useRequestResource
