import React, { useState } from 'react'
import { MiPrimerComponent } from './components/MiPrimerComponent/MiPrimerComponent'
import { ComponentCounter } from './components/ComponentCounter/ComponentCounter'
import { ComponentUseEffect } from './components/ComponentUseEffect/ComponentUseEffect';
import { FormComponent } from './components/FormComponent/FormComponent';
import { FormProduct } from './components/AppProduct/FormProduct/FormProduct';
import { AppProduct } from './components/AppProduct/AppProduct';

export const App = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "2vh"}}>
            {/* <MiPrimerComponent text={"Texto desde propiedades"} color ="red" />
            <MiPrimerComponent text={"Texto desde propiedades 2"} color ="#125658" />

            <ComponentCounter />
            <br />
            <ComponentUseEffect />
            <br />
            <FormComponent /> */}
            <AppProduct />
        </div>
    )
}
