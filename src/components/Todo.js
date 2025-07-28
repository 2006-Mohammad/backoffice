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
  const clearList = () =>{
    setList([]);
  }


  return (
    <div className=' border border-3 p-3 border-success' >
        <div >
      <h1>Task Manager</h1>
      <input className='form-control' type=' text' value={task} onChange={e => setTask(e.target.value)}
      placeholder='Enter a task'/><br/>  <br/>
      <button className='btn btn-success ms-5' onClick={addTask}>Add</button>
      <br/>  <br/>  <br/>
           <button className='btn btn-success ms-5' onClick={clearList}>Add</button>
      <ul>
        {list.map((t, i) => (
            <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Todo
