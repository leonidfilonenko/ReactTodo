import React from 'react';
import './FilterTodo.css';

function FilterTodo() {

    return (
        <div className="filter">
            <button className="filter__btn"><div className="filter__text">All</div></button>
            <button className="filter__btn"><div className="filter__text">Done</div></button>
            <button className="filter__btn"><div className="filter__text">Undone</div></button>
        </div>
    )
}

export default FilterTodo;