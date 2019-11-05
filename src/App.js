import React from 'react';
import logo from './logo.svg';
import LoginForm from './component/LoginForm/LoginForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to My Portfolio!
          <LoginForm />
        </p>
      </header>
    </div>
  );
}

export default App;
