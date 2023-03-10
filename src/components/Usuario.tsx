import React, { useState } from 'react';

interface User{
    uid:string,
    name: string
}

export const Usuario = () => {
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid:'abe123',
            name:'Gabriel Loza'
        })
    }
  return (
    <div className='mt-2'> 
        <h3>Usuario: useState</h3>
     
        <hr />
        <button 
        onClick={ login }
        className='btn btn-primary' >Login</button>
        {
            (!user)
            ? <pre>No hay usuario</pre>
            : <pre>{ JSON.stringify( user ) }</pre>
        }
       
    </div>
  )
}
