import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('syed');
  const [person, setPerson] = useState({ name: 'Hussain' });

  const onNameChange = () => {
    setName('Zakeer');
  };
  const onPersonNameChange = () => {
    // setPerson {name: "syed"});
    person.name = 'syed';
    setPerson(person);
  };

  console.log(':: APP Render ::');
  return (
    <div>
      <h1 onClick={onPersonNameChange}>Primitive Click: {name}</h1>
      <h1 onClick={onPersonNameChange}>Reference Click: {person.name}</h1>
    </div>
  );
}

// { name: 'Hussain' }  == { name: 'Hussain' }
