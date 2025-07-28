import React from 'react'
import {useState} from 'react'

function Todo() {


    const [task, setTask] = useState('');
    const [list, setList]  = useState([]);


    const addTask = () =>{
        if(task.trim() !==''){
            setList([...list,task]);
            setTask('');
        }
    }
  return (
    <div>
      <h1>Task Manager</h1>
      <input type=' text' value={task} onChange={e => setTask(e.target.value)}
      placeholder='Enter a task'/>
      <button onClick={addTask}>Add</button>
      <ul>
        {list.map((t, i) => (
            <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
