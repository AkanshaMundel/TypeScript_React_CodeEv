import React from 'react'
// import { PersonProps } from './Person.types'

//typing an object props

type PersonProps ={
    name:{
        first:string
        second:string
    }
}

function Person(props:PersonProps) {
  return (
    <div>{`name is :${props.name.first} and surname is ${props.name.second}`}</div>
  )
}

export default Person
