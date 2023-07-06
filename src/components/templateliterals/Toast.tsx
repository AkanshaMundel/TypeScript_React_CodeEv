//toast as library used for notification

// import { HeapCodeStatistics } from "v8"

type HorizontalPosition ='left' | 'right' | 'centre'
type verticalPosition ='top'|'center' |'bottom'


type ToastProps ={
    position :`${HorizontalPosition}-${verticalPosition}`
//     |Exclude<`${HorizontalPosition}-${verticalPosition}`,'center-center'>
//    | 'center'
}

export const Toast =({position}:ToastProps)=>{
    return <div>Toast Notification Position -{position}</div>
}

//for centre centre position--> use exclude 
//9 template literals -> left centre lt lb cnter ct cb rc rt rb 
