import React from 'react';
import Calculator from './components/Calculator';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <section>
        <Calculator />
      </section>
    </div>
  );
}

export default App;
