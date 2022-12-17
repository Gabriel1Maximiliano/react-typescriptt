import React, { useState } from 'react'
import { Timer } from './Timer'

export const TimerPadre = () => {

    const [milliSegundos, setMilliSegundos] = useState(1000);

  return (
    <>
    <span>Milisegundos { milliSegundos }</span>
    <button onClick={()=>setMilliSegundos(1000)} className='btn btn-outline-success' >1000</button>
    <button onClick={()=>setMilliSegundos(2000)} className='btn btn-outline-success' >2000</button>
    <Timer milisegundos={milliSegundos}/>
    </>
  )
}
