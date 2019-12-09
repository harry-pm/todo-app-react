import React from 'react';

function Todo ({todos}) {
    
    const todoList = todos.length ? (todos.map(list => {
            return (
                <div className="todo" key={list.id}>
                   <p>{list.todo}</p>
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