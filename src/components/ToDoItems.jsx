import React, { useState } from "react";


function ToDoItems(props){

    const [isDone,setIsDone] = useState(false);
   
    function handleClick(){
      
        setIsDone((prevValue) => {
            return !prevValue
        })
    }

    return <li onDoubleClick={() => {
        props.onChecked(props.id)
    }} onClick={handleClick} 
    style={{  textDecoration: isDone ? "line-through" : "none"}}>
    {props.text}</li>
}


export default ToDoItems;