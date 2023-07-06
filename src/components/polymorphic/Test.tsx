

import React from 'react'
type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' |'secondary' 
    children?: React.ReactNode
    as?: E
}
type TextProps<E extends React.ElementType> =TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>

export const Test = <E extends React.ElementType='div'>({
    size, color ,children,as}:TextProps<E>) => {
    const Component =as|| 'div'
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}


//in appx we cant renfer html for so eill

//as props -> destructure
//comp type 
//render 

//comp libray and design 
// Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations.