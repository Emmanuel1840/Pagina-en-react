import React, { useState } from 'react'
import Cabecera from "./componentes/Cabecera"
import Carrucel from './componentes/Carrucel'
import './App.css'
import Informacion from './componentes/Informacion'
import Imagen from './componentes/Imagen'
import Nosotros from './componentes/Nosotros'
import Formulario from './componentes/Formulario'
import PieDePagina from './componentes/PieDePagina'

function App() {
  return (
    <div className='bg-black'>
      <div className='col-4'>
      <Cabecera/>
      </div>
      <div className=''>
      <Carrucel/>
      </div>
      <div>
        <Informacion/>
      </div>
      <Nosotros/>
      <div>
        <Imagen/>
      </div>
      <div>
        <Formulario/>
      </div>
      <div>
        <PieDePagina/>
      </div>
    </div>
    
  )
}

export default App
