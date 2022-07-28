import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TokensContext = React.createContext()

export function useTokens(){
    return useContext(TokensContext)
}


export const TokensProvider = ({children})=>{
    const [tokens, setTokens] = useLocalStorage('ghn_tokens',null)

    return <TokensContext.Provider value={{
                                            tokens,
                                            setTokens
                                        }}>
                {children}
            </TokensContext.Provider>
}

