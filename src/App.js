import React from 'react';
import './App.css';
import AppRouter from './AppRouter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
        <h1>React Router Example</h1>
      </header>
    </div>
  );
}

export default App;
