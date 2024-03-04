import React, {useState} from "react";
import ToDoItems from "./ToDoItems";


function App(){

  const [input, getInput] = useState("");
  const [valueOfInput, setInputValue] = useState([]);

  function handleInputChange(e){
    const newValue = e.target.value;
    getInput(newValue);
  }

  function addTodo(){
    setInputValue(prevItems =>{
      return [...prevItems, input];
    });
    getInput("");
  }

  function deleteItem(id){
       
    setInputValue((prevItems => {
             
       return prevItems.filter(
        (valueOfInput, index) => {
            return index !== id
        }
       )
    }))
  }

    return(
         <div className="container">
             <div className="child-container">
                    <h1>ToDo-List</h1>
                   <input onChange={handleInputChange} type="text" value={input} placeholder="Enter your list..."/>
                   <button onClick={addTodo}>Add</button>
                   <ul>

                   {valueOfInput.map((item, index) => 

                   <ToDoItems 
                   key = {index}
                   id = {index}
                   text = {item}
                   onChecked = {deleteItem}

                   />)}
                   </ul>
             </div>
         </div>
    )
}

export default App;

export {}