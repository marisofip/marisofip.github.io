import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Portfolio } from "./portfolio";


export const About = () => (
	< div className="container">
	                <div className="text-center">
                    <h2 className="section-heading text-uppercase p-5">Experiencias</h2>
                   	</div>
			             
				 <ul className="timeline">
                 <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..."/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2018-2022  <strong> Grupo Alto</strong></h4>
                                <h4 className="subheading">Auditoria de Procesos</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">
                            Auditorías adaptadas a las necesidades, analisis del negocio en riesgos, vulnerabilidades 
                            y requerimientos del cliente. Generar informes y observar patrones recurrentes para proponer
                            un plan de acción.Comunicación con los clientes que solicitaron estos servicios.
                                </p></div>
                        </div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..."/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..."/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
						</div>
                    </li>

                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..."/></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2020</h4>
                            </div>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                    
                    </li>

</div>
                    </div>
                    </ul>

	</div>
	)