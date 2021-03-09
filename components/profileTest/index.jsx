import React from 'react';

function App() {
    return (
      <div>
        <Greeting name="Nathan" age={27} occupation="Software Developer" />
        <Greeting name="Jane" age={24} occupation="Frontend Developer" />
        <Avatar avatarURL="https://placekitten.com/g/64/64"/>
      </div>
    );
  }
  
  function Greeting(props) {
    return (
      <p>
        Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
        Pleased to meet you!
      </p>
    );
  }

  function Avatar(props){
      return (
        <img src={props.avatarURL} style={{width: '80%', marginTop: '15px'}} alt="Avatar" />
      );
  }
  
 

export default App

  
  
