import React, { useEffect, useContext, useState } from "react";
import { useTokens } from "./TokensContext";
import useRequestResource from "../hooks/useRequestResource";
import axios from 'axios';

const HubContext = React.createContext()

export function useHub(){
    return useContext(HubContext)
}

export const HubProvider = ({children})=>{
    const [hub, setHub] = useState(null)
    const {tokens} = useTokens()
   

    return <HubContext.Provider value={{hub}}>
        {children}
    </HubContext.Provider>

}
