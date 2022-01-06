import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import React, { Component } from 'react';
class App extends Component {
render() {
  return (
    <div className="App">
      <Greet name="Bruce" heroname="batman" />
      <Greet name="clark" heroname="superman" />
      <Greet name="daina" heroname="wonder Woman" />
      
    </div>
  );
}
}
export default App;
