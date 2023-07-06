import { useState, createContext } from "react"
export type AuthUser ={
    name:string,
    email:string
}

type UserContextType={
  user:AuthUser|null
  setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps={  //step2
    children:React.ReactNode
} 
//to avoid checking ? at end willwrite as createContexttt({} asUserContext)
export const UserContext = createContext<UserContextType|null>(null)//step 1
 //step 3 
export const UserContextProvider =({children}:UserContextProviderProps)=>{
    const[user, setUser]= useState<AuthUser| null>(null)
    return (
  <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
    )


}
//step 4 in app
//step 5 in user 