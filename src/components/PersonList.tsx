import React from 'react'
 import { Name } from './Person.types'
// type PersonListProps={
//     names:{
//         first:string,
//         last:string
//     }[]
// }

//reusing 
type PersonListProps={
    names:Name[]
}
function PersonList(props:PersonListProps) {
  return (
    <div>
        {/* <h2>Abhi</h2>
        <h2>Akshay</h2>
        <h2>Aryan</h2> */}
        {props.names.map(name=>{
           return( <h4 key={name.first}>{name.first}</h4>)
        })}
    </div>
  )
}

export default PersonList