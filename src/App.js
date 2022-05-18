import React, {useState} from 'react';
import './App.css';
import Title from './components/Title/Title';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import FilterTodo from './components/FilterTodo/FilterTodo';
import SortTodo from './components/SortTodo/SortTodo';
import PageTodo from './components/PageTodo/PageTodo';

function App() {
    const currentDate = new Date();
    const date = String(currentDate.getDate()).padStart(2, '0') + '/' + String(currentDate.getMonth() + 1).padStart(2, '0') + '/' + currentDate.getFullYear();

    const [todo, setTodo] = useState([]);

    return (
        <div className="container">
            <Title title="ToDo"/>
            <AddTodo todo={todo} setTodo={setTodo} date={date}/>
            <div className="wrapper">
            <FilterTodo/>
            <SortTodo/>
            </div>
            <TodoList todo={todo} setTodo={setTodo} date={date}/>
            <PageTodo/>
        </div>
    )
}

export default App;
