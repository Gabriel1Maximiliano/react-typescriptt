import React from 'react';
import { ContadorReducer } from './components/ContadorReducer';
import { Counter } from './components/Counter';
import { Formulario } from './components/Formulario';
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
      <h2>UseReducer</h2>
      <hr />
      <ContadorReducer />
      <h2>CustomHooks</h2>
      <hr />
      <Formulario />
      <br /><br /><br /><br />
    </div>
  );
}

export default App;
