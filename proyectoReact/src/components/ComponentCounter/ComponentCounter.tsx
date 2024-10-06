import React, { useState } from 'react'

export const ComponentCounter = () => {

    //LA VARIBLE Y SU MODIFICADOR
    const [counter, setCounter] = useState<number>(0)
    
    //LA FUNCION QUE SE LLAMA CUANDO SE HACE CLICK EN EL BOTON INCREMENTAR
    const incremementCounter = () =>{
        setCounter((prev)=> prev+1)
    }
    const decremementCounter = () =>{
        if(counter >0){
            setCounter((prev)=> prev-1)
        }
    }
    return (
        <div>
            <h2>Valor de counter:  {counter}</h2>
            
            <button onClick={incremementCounter}>Incrementar</button>
            <button onClick={decremementCounter}>Decrementar</button>
        </div>
    )
}
