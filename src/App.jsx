import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import bcrypt from 'bcryptjs';
import styled from 'styled-components';



function App() {
  const [password, setPassword] = useState('');
  const [hash, setHash] = useState('');

  const handleChange = e => {
    setPassword(e.target.value);
  }

  const handleClick = e => {
    e.preventDefault();

    const salt = bcrypt.genSaltSync(10);
    const hashed = bcrypt.hashSync(password, salt);
    console.log(`Hashed value is: ${hashed}`);
    setHash(hashed);
    setPassword('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <PrimaryInput type="password" value={password} name="password" onInput={handleChange} />
          <PrimaryButton onClick={handleClick}>Get Hash</PrimaryButton>
        </form>
        <span>{hash && hash}</span>
      </header>
    </div>
  )
}

const PrimaryButton = styled.button`

  background: ghostwhite;
  color: palevioletred;
  padding: 0.45em 1em;
  font-size: 16px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const PrimaryInput = styled.input`

  padding: 0.55em;
  margin-right: 0.55em;
`;

export default App
