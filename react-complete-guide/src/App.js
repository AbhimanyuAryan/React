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

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Abhimanyu Aryan'
    this.setState({
      persons:[
        { name: newName, age: 20 },
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
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        {/*This above can be in-efficient and performance hit. Instead use Bind*/}
        {/* => array automatically adds a return type if written in one line */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}>My Hobby: Watching Netflix</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;