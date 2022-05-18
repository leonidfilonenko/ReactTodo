import React, {useState} from 'react';
import './AddTodo.css'

function AddTodo( {todo, setTodo, date} ) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: Number(Math.random().toFixed(4)), title: value, date: date, status: true
            }]
        )
        setValue('')
    }

    function handleKeyPress (e) {
        if (e.key === 'Enter') {
          saveTodo()
        }
      }


    return (
        <div>
            <input className="input" type="text" placeholder="I want to..." value={value} onChange={ (e) => setValue(e.target.value)} onKeyPress={handleKeyPress}/>
        </div>
    )
}

export default AddTodo;