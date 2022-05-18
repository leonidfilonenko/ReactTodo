import React from 'react';
import './SortTodo.css';

function SortTodo() {
    return (
        <div className="sort">
            <div className="sort__text">Sort by Date</div>
            <button className="sort__arrow-up"></button>
            <button className="sort__arrow-down"></button>
        </div>
    )
}

export default SortTodo;