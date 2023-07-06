import { useState } from "react"


export const LoggedIn =() =>{
    const [isLoggedIn , setLoggedIn] =useState(false)
    const handleLogin =()=>{
        setLoggedIn(true);
    }
    const handleLogout =()=>{
        setLoggedIn(false);
    }

    
    return (
        <div>
     <button onClick={handleLogin}>Login</button>
     <button onClick={handleLogout}>Logout</button>
     <div>user is {isLoggedIn?'logged in' :'logged out'}</div>
        </div>
    )
}

//in ts we cant define 0 as initial state -
//it because of type reference as in ts it sense the type of what typr of initial state id define as false it detect
//also we cnt use the lenght in boolean function