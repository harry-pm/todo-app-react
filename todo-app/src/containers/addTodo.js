import React from 'react';

class AddTodo extends React.Component{
    render() {
        return (
            <div className="addTodo">
                <form /*onSubmit="#"*/ >
                    <input type="text" /*onChange="#"*/ placeholder="enter todo"></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;