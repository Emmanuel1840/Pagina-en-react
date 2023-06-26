import React from 'react'

function Formulario(props) {
  return (
    <div className='container'>
      <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label text-light">{props.name}</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nombre" />
      <label htmlFor="exampleFormControlInput2" className="form-label text-light">Apellido</label>
      <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Apellido" />
      
      <label htmlFor="exampleFormControlTextarea1" className="form-label text-light">Mensaje</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enviar mensaje"></textarea>
    </div>
    </div>
  )
}

export default Formulario
