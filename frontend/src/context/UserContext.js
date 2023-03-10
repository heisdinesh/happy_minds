import {createContext,useState} from "react";


export const UserContext = createContext();

export const UserProvider =({children})=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [token,setToken] = useState()

    const values={
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}