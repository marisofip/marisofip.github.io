import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
    <>
	 <nav className="navbar navbar-expand-lg navbar-dark py-lg-4 bg-black" id="mainNav">
            <div className="container">
                <a className="navbar-brand text-uppercase fw-bold d-lg-none" href="index.html">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item px-lg-4"><Link to="/" className="nav-link text-uppercase" >Inicio</Link></li>
                        <li className="nav-item px-lg-4"><Link to="/sobremi" className="nav-link text-uppercase">Sobre mi</Link></li>
                        <li className="nav-item px-lg-4"><Link to="/portafolio" className="nav-link text-uppercase">Portafolio</Link></li>
                        <li className="nav-item px-lg-4"><Link to="/contactame" className="nav-link text-uppercase"> Contacto </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
	);
};
