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
      <Cabecera proyecto="Trabajo" juego="Juego-web"/>
      </div>
      <div className=''>
      <Carrucel/>
      </div>
      <div>
        <Informacion general="Objetivo principal" específico="Objetivo secundario"/>
      </div>
      <Nosotros imagen="../public/Mateo 1.jpg"/>
      <div>
        <Imagen imgs="../public/logogravitar.png"/>
      </div>
      <div>
        <Formulario name='Apellido'/>
      </div>
      <div>
        <PieDePagina fon="rgba(192, 192, 192, 0.481)"/>
      </div>
    </div>
    
  )
}

export default App
