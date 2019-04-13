import React, { Component } from 'react';
import Game from './components/Game';
class App extends Component {
  render() {
    return (
      <div>
        <section className="section">
    <div className="container">
      <h1 className="title">
        T3
      </h1>
      <Game/>
    </div>
  </section>
      </div>
    );
  }
}

export default App;
