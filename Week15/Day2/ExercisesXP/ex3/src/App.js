import './App.css';
import { useState,useReducer } from 'react';
import todoReducer from './todoReducer';

function App() {
  const [todos,dispatch] = useReducer(todoReducer, []);
  const [todoText,setTodoText] = useState("");

  function handleAddTodo() {
    if (todoText.trim()==="") return;
    dispatch({type:"ADD_TODO",text:todoText});
    setTodoText("")
  };

  function handleRemoveTodo(id) {
    dispatch({type:"REMOVE_TODO",id})
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <input 
          type='text'
          placeholder='Add a new todo'
          value={todoText}
          onChange={(e)=>setTodoText(e.target.value)}
        /><br/>
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {
            todos.map((todo)=>(
              <li key={todo.id}>
                {todo.text}<br/>
                <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
              </li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
