type GreetProps ={
    name:string
    msgCnt?:number //optional 
    isLoggedIn:boolean
}



export const Greet =(props:GreetProps)=>{
    const {msgCnt=0} =props
    return (
        <div>
            <h2>
                {props.isLoggedIn?
                `welcome ${props.name} you have ${props.msgCnt}` 
                :'welcome strange'
             }
            </h2>
       </div>
          
    )
}
//have to define the props type here 
//cant pass number as props , have to use {no.}