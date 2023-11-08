import './App.css';
import { useState, useReducer } from 'react';
import todoReducer from './todoReducer';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [{id:1235535,text:"TEST 1",status:"completed"},{id:123556535,text:"TEST 2",status:"completed"}]);
  const [todoText, setTodoText] = useState("");

  const [toModify,setToModify] = useState({status:false,id:null});
  const [todoNewText,setTodoNewText] = useState("");

  const [display,setDisplay] = useState("all");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  function handleEdit(text,id) {
    setToModify({status:true,id})
    setTodoNewText(text)
  };

  function handleModify(text,id) {
    dispatch({type:"EDIT_TASK",text,id})
    setToModify(false);
  };

  function handleSelect(e){
    setDisplay(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      /><br/>
      <button onClick={handleAddTodo}>Add Todo</button><br/>
      <select onChange={(e)=>handleSelect(e)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <ul>
        {todos.map((todo) =>{
          if ((display === "all") || (display === "active" && todo.status === "active") || (display === "completed" && todo.status === "completed")) {
            return(
              <li key={todo.id}>
            {
              toModify.status && todo.id == toModify.id ? 
                <><input value={todoNewText} onChange={(e)=>setTodoNewText(e.target.value)}/>
                <button onClick={()=>handleModify(todoNewText,todo.id)}>Modify</button>
                </>
              : <><p>{todo.text} - {todo.status}</p>
                  <button onClick={()=>handleEdit(todo.text,todo.id)}>Edit</button>
                  <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                </>
            }
          </li>
            )
        }})}
      </ul>
      </header>
    </div>
  );
}

export default App;
