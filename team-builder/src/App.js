import React, { useState } from 'react';
import './App.css';
import Form from './form'

export default function App() {

const [ team, setTeam ] = useState([])

  return (
    <div className="App">
      <Form  setTeam={setTeam}/>
      <h1>Team Members</h1>
      {team.map(member => {
        return (
          <div className='member'>
            <h1>{member.name}</h1>
            <h2>{member.age}</h2>
            <h3>{member.favColor}</h3>
          </div>
        )
      })}
    </div>
      
  );
}


