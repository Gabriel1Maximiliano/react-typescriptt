import React, { useState } from 'react'

export const Counter = () => {

  const [counter, setCounter] = useState(0);
  const incrementar = (numero:number):void => {
    setCounter(counter+numero)
  }
  return (
    <div className='mt-5' >
    <h1>Counter: useState</h1>
    <br />
    <h3>Valor:{ counter } </h3>
    <button onClick={() =>  incrementar(1) } className='btn btn-outline-primary mt-2' > +1</button>
    <button onClick={() =>  incrementar(2) } className='btn btn-outline-primary mt-2' > +2</button>
    <button onClick={() =>  setCounter(0) } className='btn btn-danger mt-2' >Reset</button>
    </div>
  )
}
