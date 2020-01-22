import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form'

export default function App() {

const [ team, setTeam ] = useState([])

  return (
    <div className="App">
      <Form  setTeam={setTeam}/>
      <h1>Team Members</h1>
      {etam.map(member => {
        return (
          <div className='member'>
            <h1>{member.name}</h1>
          </div>
        )
      })}
    </div>
      
  );
}


