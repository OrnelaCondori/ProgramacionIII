import React, { useEffect, useState } from 'react'

export const ComponentUseEffect = () => {
    const [state, setState] = useState(false);
    useEffect(()=>{
        console.log("Componente montado");
        return ()=>{
            console.log("Componente desmontado")
        }
    }, []);
    
    useEffect(()=>{
        console.log(state);
    }, [state]);
    return (
        <div>
            ComponentUseEffect: 
            {/* si state es verdadero muestra true sino false */}
            <p>{state ? "Es true" : "Es false" }</p>
            <button onClick={()=> {setState(!state);}}>Cambiar state</button>
        </div>
    )
}
