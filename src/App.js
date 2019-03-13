import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      avengers: [
        {'name': `Ant-Man`, 'id': (Math.random() + Date.now() * 0.99)},
        {'name': `Spider-Man`, 'id': (Math.random() + Date.now() * 0.99)},        {'name': `Ant-Man`, 'id': (Math.random() + Date.now() * 0.99)},
        {'name': `Deadpool`, 'id': (Math.random() + Date.now() * 0.99)},        {'name': `Ant-Man`, 'id': (Math.random() + Date.now() * 0.99)},
        {'name': `Dr Strange`, 'id': (Math.random() + Date.now() * 0.99)},        {'name': `Ant-Man`, 'id': (Math.random() + Date.now() * 0.99)},
        {'name': `Hawkeye`, 'id': (Math.random() + Date.now() * 0.99)},        {'name': `Ant-Man`, 'id': (Math.random() + Date.now() * 0.99)},
        {'name': `Hulk`, 'id': (Math.random() + Date.now() * 0.99)},        {'name': `Ant-Man`, 'id': (Math.random() + Date.now() * 0.99)},
        {'name': `Iron Man`, 'id': (Math.random() + Date.now() * 0.99)},
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Avengers by Jason Cook</h1>
        </header>
        <ul>
          {this.state.avengers.map(currentAvenger => (
            <li key={currentAvenger.id}>
              <p>
                Name: {currentAvenger.name}
                <br />
                Unique Key: {currentAvenger.id}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
