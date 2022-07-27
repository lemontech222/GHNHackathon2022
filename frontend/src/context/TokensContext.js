import React, { useContext, useState } from "react";

const TokensContext = React.createContext()

export function useTokens(){
    return useContext(TokensContext)
}


export const TokensProvider = ({children})=>{
    const [tokens, setTokens] = useState(null)

    return <TokensContext.Provider value={{
                                            tokens,
                                            setTokens
                                        }}>
                {children}
            </TokensContext.Provider>

}

