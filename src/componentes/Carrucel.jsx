import React from 'react'

function Carrucel() {
    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-4 ">
                    <h1 className="titulos m-5">Gravitar</h1>
                    <p className="text-light ">Contaminación en Medellín</p>
                </div>
                <div className="col-sm-8 ">
                    <div id="carouselExample" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="Imagen1.JPG" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="Imagen2.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="Imagen3.jpg" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            </div>
            )
}

            export default Carrucel
