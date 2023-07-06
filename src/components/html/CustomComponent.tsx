import React from 'react'
import { Greet } from '../Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.name}</div>
  )
}

//extracting a comp props types here from greeks comp



//by using the reactcomponet props  typeof easily use othe fun props












//to use it whenever req