import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting } from './components/Greeting';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: `Nimesha`,
    last: `Gunawardana`
  }

  const nameList = [
    {
      first: 'Nalinda',
      last: 'Konara'
    },
    {
      first: 'Tharaka',
      last: 'Basmayaka'
    },
    {
      first: 'Kasun',
      last: 'Karunarathana'
    }
  ]

  return (
    <div className="App">
      <Greeting name="Nimesha" messageCount={11} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
