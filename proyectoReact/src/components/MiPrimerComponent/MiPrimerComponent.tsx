import React, { FC } from 'react';

interface IPropsMiPrimerComponent{
    text: string;
    color?: string;  //la propiedad no es necesaria
}
export const MiPrimerComponent: FC<IPropsMiPrimerComponent> = ({text, color}) => {
    return (
        <div style={{color: color}}> <p> {text} </p></div>
    )
}

