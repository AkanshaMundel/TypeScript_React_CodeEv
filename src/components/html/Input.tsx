type InputProps =React.ComponentProps<'input'>

export const CustomInput =(props:InputProps)=>{
    return <input {...props} />
}

//custom input where we wrap html and add our type in react 