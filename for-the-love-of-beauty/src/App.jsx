import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = { first: 'Chris', last: 'Atoki' };
    return (
      <div className="App">
        <h1>
          Hello {name.first} {name.last}!
        </h1>
      </div>
    );
  }
}

export default App;
