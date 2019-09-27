import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
const app=(props) => {
    // useState() Hook example
    const [ personState,setPerson ] = useState(
      {
    persons: [
      { name:'Max', age: 26 },
      { name:'Manu', age: 29 },
      { name:'Raju', age: 23 }
    ]
  }
  );
  
  const switchNameHandler = () => {
    //console.log('I was clicked!');
    setPerson({
      persons: [
      { name:'Maxiliam', age: 26 },
      { name:'Manu', age: 29 },
      { name:'Raju', age: 22 }
      ]
    }
    )
  }
    return(
    <div className='App'>
    <h1> Hi, I'm a React App</h1>
    <p> This is working!!!</p>
    <button onClick={switchNameHandler}> Switch name</button>
    <Person name={personState.persons[0].name} age= {personState.persons[0].age} />
    <Person name={personState.persons[1].name} age= {personState.persons[1].age} > My Hobbies : Travelling</Person>
    <Person name={personState.persons[2].name} age= {personState.persons[2].age} />
    </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now ?'));
  }


export default app;


  
