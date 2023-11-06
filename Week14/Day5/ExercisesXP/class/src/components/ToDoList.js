import React from 'react'
import '../App.css';

function ToDoList({tasks,deleteTask}) {
  return (
    <>
        {
            tasks.map(item=>(
                <div key={item.id} className='task_container' onClick={()=>deleteTask(item.id)}>
                    <p>{item.title}</p>
                </div>
            ))
        }
    </>
  )
}

export default ToDoList