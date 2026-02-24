import { useState } from 'react'
import './App.css'

function App() {
  
  const [Search,setSearch]=useState('')
  const [Todoitems,setTodoitems]=useState([]);

  const handleChange=(e)=>{
    setSearch(e.target.value)
    // console.log(Search)
  }
  const handleAdd=()=>{
    if(Search =='' || Search == ' ') return ;
    setTodoitems([...Todoitems,
      {name:Search,
      completed:false}
    ])
    setSearch('')
  }
  const handleToggle = (idx) => {
  const updated = Todoitems.map((item, i) =>
    i === idx ? { ...item, completed: !item.completed } : item
  )

  setTodoitems(updated)
  console.log(Todoitems)
}

  // console.log(Todoitems)
  return (
    <>
     <h1>ToDo App</h1>
     <div className="container" style={{background:'beige', minWidth:"80vw", minHeight:'80vh'}}>
      <div>
      <input className="search-input"type="text" value={Search} onChange={handleChange}/>
      <button onClick={handleAdd}>Add +</button>
      </div>
      <ul className="todo-list">
    {Todoitems.map((t, idx) => (
    <li className="todo-item" key={idx}>
      <label>
        <input
          type="checkbox"
          checked={t.completed}
          onChange={() => handleToggle(idx)}
        />
        <span className={t.completed ? "completed" : ""}>{t.name}</span>
      </label>
    </li>
  ))}
</ul>
     </div>
    </>
  )
}

export default App
