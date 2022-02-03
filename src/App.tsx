import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greeting } from './components/Greeting';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Button } from './components/Button';
import { ButtonEvent } from './components/ButtonEvent';
import { InputChange } from './components/InputChange';

function App() {
  const personName = {
    first: `Nimesha`,
    last: `Gunawardana`,
  };

  const nameList = [
    {
      first: 'Nalinda',
      last: 'Konara',
    },
    {
      first: 'Tharaka',
      last: 'Basmayaka',
    },
    {
      first: 'Kasun',
      last: 'Karunarathana',
    },
  ];

  const btnClick = () => {
    console.log('void event');
  };
  const btnClickEvent = (event:React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
  };
  const textChangeEvent = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div className="App">
      <Greeting name="Nimesha" messageCount={11} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Button handleClick={btnClick} />
      <ButtonEvent handleClick={btnClickEvent} />
      <InputChange handleChange={textChangeEvent} value=''/>
    </div>
  );
}

export default App;
