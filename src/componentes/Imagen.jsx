import React from 'react'

function Imagen(props) {
  return (
    <div className='text-center'>
     <img className="img-fluid m-5 "  src={props.imgs} alt="" />
    </div>
  )
}

export default Imagen
