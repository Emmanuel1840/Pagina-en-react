import React from 'react'

function PieDePagina() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#605f5f' }}>
    <div className="container pt-4">
      <section className="mb-4">
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
          <i className="bi bi-facebook"></i>
        </a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
          <i className="bi bi-twitter"></i>
        </a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
          <i className="bi bi-google"></i>
        </a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="" role="button" data-mdb-ripple-color="dark">
          <i className="bi bi-instagram"></i>
        </a>
      </section>
    </div>
    <div className="text-center text-dark p-3" style={{ backgroundColor: 'rgba(192, 192, 192, 0.481)' }}>
      <a className="text-light" href="/">
        <img src="logogravitar.png" height="67" width="70" alt="" />
      </a>
      <p className="text-light">Gravitar</p>
    </div>
  </footer>
  )
}

export default PieDePagina
