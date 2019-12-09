import React from 'react';
import './todos.css';

function Todo (props) {
    const todos = props.todos;
    const deleter = props.deleter;
    const todoList = todos.length ? (todos.map(list => {
            return (
                <div className="todos" key={list.id}>
                  <ul>  
                    <li>{list.todo}</li>
                    <button onClick={() => {deleter(list.id) }} className="delete">Delete</button>
                  </ul> 
                </div>
                )
            })
        ) : (<p>No todos to do</p>);

    return (
        <div className="todos">
            {todoList}
        </div>
    )
}

export default Todo;