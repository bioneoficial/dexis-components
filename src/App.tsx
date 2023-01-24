import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreenButton from './GreenButton';

function App() {
  const login = () => {
    console.log('login')
  }
  return (
    <div className="App">
      <header className="App-header">
      <GreenButton
        id="button-login-continue"
        onClick={() => login()}
        title={'Entrar'}
      /> </header>
    </div>
  );
}

export default App;
