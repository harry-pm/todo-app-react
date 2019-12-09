import React from 'react';
import './addTodo.css'

class AddTodo extends React.Component{

    state = {
        todo: '',
    }

    handleChange = (e) => {
        this.setState({todo: e.target.value, id: Math.random()})
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.add(this.state);
        this.setState({todo: ''});
    }

    render() {
        return (
            <div className="addTodo">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.handleChange} placeholder="enter todo" value={this.state.todo}></input>
                    <button className="add">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;