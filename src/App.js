import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name:'Max', age: 26 },
      { name:'Manu', age: 29 },
      { name:'Raju', age: 23 }
    ],
    showPersons : false
  }

  switchNameHandler = (newname) => {
    //console.log('I was clicked!');
    this.setState({
      persons: [
      { name:newname, age: 26 },
      { name:'Manu', age: 29 },
      { name:'Raju', age: 22 }
      ]
    }
    )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name:'Max', age: 26 },
      { name: event.target.value, age: 29 },
      { name:'Raju', age: 22 }
      ]
    }
    )
  }

  toggleHandler = () => {
     const doesshow = this.state.showPersons;
     this.setState({showPersons : !doesshow})
  }
  render() {
    const style = {
    backgroundColor : 'white',
    font : 'inherit',
    border : ' 2px solid #eee',
    padding : '16px'
    }
    let persons = null
    if(this.state.showPersons){
      persons= (
    <div>    
    <Person 
    name={this.state.persons[0].name} 
    age= {this.state.persons[0].age} />
    <Person 
    name={this.state.persons[1].name} 
    age= {this.state.persons[1].age} 
    click={this.switchNameHandler.bind(this,'Maxi')}
    changed ={this.nameChangedHandler}> My Hobbies : Travelling</Person>
    <Person 
    name={this.state.persons[2].name} 
    age= {this.state.persons[2].age} />
    </div>
      )
    }
    return(
    <div className='App'>
    <h1> Hi, I'm a React App</h1>
    <p> This is working!!!</p>
    <button 
    style = {style}
    onClick={this.toggleHandler}> Toggle persons</button>
    
    {persons}
    </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now ?'));
  }
}

export default App;
