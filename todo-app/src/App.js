import React from 'react';
import './App.css';
import AddTodo from './containers/addTodo'
import Todo from './containers/Todos'

class App extends React.Component {
  state = {
    todos: []
  }

  add = (todo) => {
    let x = [...this.state.todos, todo];
    this.setState({todos: x});
  }

  deleter = (id) => {
    let todo = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos: todo})
  };

  render () {
    return (
      <div className="App">
        <p>Sup</p>
        <AddTodo add={this.add}/>
        <Todo todos={this.state.todos} deleter={this.deleter}/>
      </div>
    );
  }
}

export default App;
