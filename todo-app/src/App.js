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

  render () {
    return (
      <div className="App">
        <p>Sup</p>
        <AddTodo add={this.add}/>
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
