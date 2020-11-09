import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    likes: 0
  };

  addHandler = () => {
    this.setState({ likes: this.state.likes +1});
  }

  removeHandler = () => {
    this.setState({ likes: this.state.likes -1});
  }

  resetHandler = () => {
    this.setState({ likes: 0});
  }

  render() {
    let circleClass = `${
      this.state.likes === 0 ? "" : this.state.likes % 2 === 0 ? "even" : "odd"
    } likes`;
    return (
      <div className="app">
        <div className="circle">
            <h1 className={circleClass}>Total likes: {this.state.likes}</h1>
        </div>
        <button onClick = {this.addHandler}>Add One</button>
        <button onClick = {this.removeHandler}>Remove One</button>
        <button onClick = {this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default App;
