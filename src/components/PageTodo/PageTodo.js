import './PageTodo.css';

function PageTodo() {
    return (
        <div className="page">
            <button className="btn__page">left</button>
            <button className="btn__page btn__page-active">1</button>
            <button className="btn__page">2</button>
            <button className="btn__page">3</button>
            <button className="btn__page">right</button>
        </div>
    )
}

export default PageTodo;