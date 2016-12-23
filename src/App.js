import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
    this.setState = {
      value: "",
      todo: []
    
  }
  this.handleAdd = this.handleAdd.bind(this);
  this.handleRemove =
}

handleAdd(e) {
  if (e.keyCode == 13) return;
  this.setState({
    value: "",
    todos: [
      this.state.todos,
      {
        id: Date.now(),
        text: this.state.value
        
      }
    ]
  })

}

handleRemove(index) {
  const todos = [ this.state.todos];
  
}

  render() {
    return (
      <div>
        <input value={this.state.value}
        onChange={(e) => this.setState({value: e.target.value})}
        onKeyUp={this.handleAdd}
        />

        {
          this.state.todos.map((todo, index) => {
            return <div key={todo.id}>
              {todo.text}</div>
          })
        }
          
      </div>
    );
  }
}

export default App;
