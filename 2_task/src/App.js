import React, { Component } from 'react';
import Animal from './Component/Animal/Animal';
import "./App.css";

class App extends Component {
  state = {
    animals: [
      {name:"Fox", img:"http://source.unsplash.com/400x400/?fox"},
      {name:"Rabbit", img:"http://source.unsplash.com/400x400/?rabbit"},
      {name:"Wolf", img:"http://source.unsplash.com/400x400/?wolf"}
    ]
  };

  render() {
    return (
      <div className="card">
        <Animal 
        name={this.state.animals[0].name} 
        img={this.state.animals[0].img}/>

        <Animal 
        name={this.state.animals[1].name} 
        img={this.state.animals[1].img}/>

        <Animal 
        name={this.state.animals[2].name} 
        img={this.state.animals[2].img}/>
    </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className="card">
//         <Animal name="Fox" img="https://source.unsplash.com/random/"/>
//         <Animal name="Dog" img="https://source.unsplash.com/random/"/>
//         <Animal name="Cat" img="https://source.unsplash.com/random/"/>
//     </div>
//   );
// };

export default App;