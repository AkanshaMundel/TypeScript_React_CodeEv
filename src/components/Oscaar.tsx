type OscarProps ={
    children: React.ReactNode 
    //type provided by react package
}


export const Oscar=(props:OscarProps)=>{
    return <div>{props.children}</div>
}
