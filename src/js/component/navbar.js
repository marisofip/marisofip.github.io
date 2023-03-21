import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
    <>
	      
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mainNav">
            <div className="container-fluid d-flex">
                <a className="navbar-brand text-uppercase fw-bold d-lg-none"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item px-lg-4"><Link to="/" className="nav-link text-uppercase" >Inicio</Link></li>
                        <div className="nav-item dropdown px-lg-4">
                            <a className="nav-link bg-dark px-lg-4 dropdown-toggle text-uppercase " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Sobre mi
                            </a>
                         <ul className="dropdown-menu dropdown-menu-dark bg-black text-uppercase " aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><Link className="dropdown-item px-lg-4 " to="/sobremi">Experiencia Profesional</Link></li>
                            <li><a className="dropdown-item px-lg-4 " href="#">Proyectos Personales</a></li>
                            <li><Link className="dropdown-item px-lg-4 "to="/estudios">Estudios</Link></li>
                        </ul>
                        </div>
                    
                        
                        <li className="nav-item px-lg-4"><Link to="/portafolio" className="nav-link text-uppercase">Portafolio</Link></li>
                        <li className="nav-item px-lg-4"><Link to="/contactame" className="nav-link text-uppercase"> Contacto </Link></li>
                    </ul>
                    </div>
          </div>
        </nav>

    </>
	);
};
