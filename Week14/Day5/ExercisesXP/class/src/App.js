import './App.css';
import ToDoList from './components/ToDoList';
import AddTasks from './components/AddTasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([{id:1,title:"Buy some milk"},{id:2,title:"Do my homework"}]);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task=>task.id !== id);
    setTasks(updatedTasks)
  };

  function addTask(task) {
    const newTask = {id:tasks.length + 1,title:task}
    const updatedTasks = [...tasks,newTask]
    setTasks(updatedTasks)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo's</h1>
        <ToDoList tasks={tasks} deleteTask={deleteTask}/>
        <AddTasks addTask={addTask}/>
      </header>
    </div>
  );
}

export default App;
