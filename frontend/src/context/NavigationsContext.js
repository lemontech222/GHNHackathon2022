import React, { useContext, useState } from "react";

const NavigationsContext = React.createContext()

export function useNavbar(){
    return useContext(NavigationsContext)
}


export const NavigationsProvider = ({children})=>{
    const [show, setShow] = useState(true)

    return <NavigationsContext.Provider value={{
                                            show,
                                            setShow
                                        }}>
                {children}
            </NavigationsContext.Provider>
}

