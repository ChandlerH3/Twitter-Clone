import { createContext, useEffect, useState } from "react";
import React from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");
    useEffect(()=>{
        fetch("/api/me/profile",
            )
        .then((res)=>res.json())
        .then((data)=>{
            setCurrentUser(data);
            setStatus("idle");
        })
        .catch((error)=>{
            console.log("something is wrong", error)
        });
    },[])
    console.log(currentUser)
    // console.log(status)
    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
    </CurrentUserContext.Provider>
    );
}