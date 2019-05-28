import React, { Component } from 'react';
import Input from './components/input.js'
import Main from './components/main.js'


class App extends Component {
 

  render() { 
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo s</h1>
        <Main />
        <br/>
        <hr/>
        <br/>
        <Input />
        
      </div>
     );
  }
}
 
export default App;
