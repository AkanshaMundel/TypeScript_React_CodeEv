import React from 'react'
import { useEffect, useRef } from 'react'
export const DomRef = () => {
const inputRef = useRef<HTMLInputElement>(null!)

useEffect(()=>{
    inputRef.current.focus()
},[])
  return (
    <div>
        <input type='text' ref={inputRef} />
    </div>
  )
}

// , useRef returns a reference that is either read-only or mutable, depends on whether your type argument fully covers the initial value or not. 