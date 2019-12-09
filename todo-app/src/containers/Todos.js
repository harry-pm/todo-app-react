import React from 'react';

function Todo (props) {
    const todos = props.todos;
    const deleter = props.deleter;
    const todoList = todos.length ? (todos.map(list => {
            return (
                <div className="todos" key={list.id}>
                   <p>{list.todo}</p>
                   <button onClick={() => {deleter(list.id)}} >Delete</button>
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