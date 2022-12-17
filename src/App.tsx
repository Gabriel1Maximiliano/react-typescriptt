import React from 'react';
import { Counter } from './components/Counter';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';


function App() {
  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <Usuario />
      <h2>UseEffect - useRef</h2>
      <hr />
      <TimerPadre />
    </div>
  );
}

export default App;
