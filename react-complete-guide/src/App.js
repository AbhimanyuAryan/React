import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Abhimanyu Aryan'
    this.setState({
      persons:[
        { name: 'Maximlian', age: 20 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobby: Coding</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobby: Watching Netflix</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobby: Taking Siri out</Person>
      </div>
    );
  }
}

export default App;
