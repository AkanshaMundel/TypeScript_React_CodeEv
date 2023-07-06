import { useState } from "react"

type AuthUser ={
    name:string
    email:string
}
export const User =()=>{
// const [user, setUser]= useState<AuthUser |null>(null)
const [user,setUser]=useState<AuthUser>({} as AuthUser)//allow without check the email  
const handleLogin =() =>{
    setUser({
        name:'Abhir',
        email:'abcdef@gmail.com'
    })
}
// const handleLogout=()=>{
//     setUser(null)
// }
    return (
        <div>
            <button  onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>user name is{user?.name}</div> 
            <div>user email is{user.email} </div>
        </div>
    )
}
//inital value knw in future point of time tht why in brac will using future and null both
//why usih authuser as we asre int as null so cant set the value on set user
//defining initial as null or tpye of auth user
//depends on the value initially  null but later might change

//line 9 -10
//second way of using the inital value define as the value which on res might depend which leads use to avoid usin' optioal operator 












//sometime we cant rely on type inference as we have to definr emplict if intial value is null coz later will chance to chance the value as on set states
