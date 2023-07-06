import React from "react"

type InputProps ={
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}


export const Input =(props:InputProps)=>{
    // another way to write handler fun
    const handleInputChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event)
    }
    return <input type='text' value={props.value} onChange ={handleInputChange} />
}

//by destructing the props 
// export const Input =({value,handleChange}:InputProps)=>{
//     // another way to write handler fun
//     const handleInputChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
//         console.log(event)
//     }
//     return <input type='text' value={value} onChange ={handleChange} />
// }



