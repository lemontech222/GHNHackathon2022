import React, { useEffect, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import jwt_decode from "jwt-decode"

const TokensContext = React.createContext()

export function useTokens(){
    return useContext(TokensContext)
}


export const TokensProvider = ({children})=>{
    const [tokens, setTokens] = useLocalStorage('ghn_tokens',null)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        setUser(tokens ? 
            jwt_decode(tokens.access) :
            null)
    },[tokens])

    return <TokensContext.Provider value={{
                                            tokens,
                                            setTokens,
                                            user
                                        }}>
                {children}
            </TokensContext.Provider>
}

