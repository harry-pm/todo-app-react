import React from 'react';
import './App.css';
import AddTodo from './containers/addTodo'
import Todo from './containers/Todos'

class App extends React.Component {
  state = {
    todos: []
  }

  render () {
    return (
      <div className="App">
        <p>Sup</p>
        <AddTodo />
        <Todo todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
