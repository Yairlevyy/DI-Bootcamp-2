import React, { useState } from 'react'

function AddTasks({addTask}) {
  const [task,setTask] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    addTask(task);
    setTask('')
  };
  
  return (
    <>
        <form onSubmit={handleSubmit}>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <input type='submit' value='Add Task'/>
        </form>
    </>
  )
}

export default AddTasks