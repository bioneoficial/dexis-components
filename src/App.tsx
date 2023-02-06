import * as React from 'react';
import GreenButton from './GreenButton';
import agro from '../public/images/agro.svg';

function App() {
  const login = () => {
    console.log('login');
  };
  return (
    <div className="App">
      <header className="App-header">
        <GreenButton
          id="button-login-continue"
          onClick={() => login()}
          title={'Entrar'}
        />
        <img src={agro} alt="imagem teste" />
      </header>
    </div>
  );
}

export default App;
