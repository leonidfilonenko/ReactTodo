import './TodoList.css'

function TodoList( {todo, setTodo, date} ) {

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    return (
        <div className="tasks">
            <ul className="tasks__list">
                {todo.length !== 0 
                    ? todo.map(item => (
                                <li className="tasks__list_item" key={item.id}>
                                <div className="tasks__list_start">
                                    {
                                        item.status ? <button className="btn__checkbox-empty" onClick={ () => statusTodo(item.id)}></button> 
                                        : <button className="btn__checkbox" onClick={ () => statusTodo(item.id)}></button> 
                                    }
                                    
                                    {
                                        item.status ? <div className="task">{item.title}</div>
                                        : <div className="task-close">{item.title}</div>
                                    }
                                </div>
                                <div className="tasks__list_end">
                                    <div className="date">{date}</div>
                                    <button className="btn__del" onClick={ () => deleteTodo(item.id)}></button>
                                </div>
                            </li>
                        ))
                    : <div className="no__task">No tasks...</div>
                }
            </ul>
        </div>
    )
}

export default TodoList;