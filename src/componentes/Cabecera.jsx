import React from 'react'

function Cabecera(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand text-info ">
                            <img style={{ width: '70px', height: 'auto' }} src="logogravitar.png" alt="" />
                            <span className="titulos">Gravitar</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav collapse navbar-collapse float-md-end" id="navbarNav">
                        <li className="nav-item">
                            <a className="nav-link active text-light " href="#Contexto">Contexto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#proyecto">{props.proyecto}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#imagenjuego">{props.juego}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#Nosotros">Nosotros</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Cabecera
