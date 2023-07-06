import React from "react"

type ButtonProps ={
    variant:'primary'|'secondary'
    children:string
} & Omit<React.ComponentProps<'button'>,'children'>

export const CustomButton =({variant,children , ...rest}:ButtonProps)=>{
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}

// comes under wrapping html element -> usinf rest-> allow to pass any no of argument  of specified type to fun 
// this comes under building custom btm comp


//omit keyboad
//here children specify reactbode which comes frm ele props allow to add any type to our custom btn 
// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals)..--> in app will have t