type StatusProps ={
    // status:string,
    status: 'loading'| 'success' |'error'
}
export const Status =(props:StatusProps)=>{
    let message

    if(props.status ==='loading'){
    message ='Loading...'
    }
    else if(props.status=== 'success'){
      message ='Data Fetched Successfully'
    }
    else if(props.status ==='error'){
        message ='Error fetching data'
    }
    return (
      
        <div>
            {/* <h2>Loading...</h2>
            <h2>Data Fetched successfully</h2> */}
            <h3>Status-{message}</h3>
        </div>
    )
}

//type :-> status[loading and success]