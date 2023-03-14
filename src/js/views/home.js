import React from "react";
import "../../styles/home.css";
import perfil from "../../../src/img/perfil.jpg";

export const Home = () => (
  <div className="container">
    <div className="team-member m-5 p-5 text-align-center">
      <img
        className="mx-auto rounded-circle"
        src={perfil}
        alt="..."
        id="imgperfil"
      />
      <h4 className="text-align-center">
        Mariandris Sofia <br />
        Brito Palencia
      </h4>
      <p className="text-muted">Perfil</p>
      
        <h5 className="aboutme">
          "Soy una desarrolladora Full-stack versátil, he trabajado con diversas
          tecnologías JS, ReactJS, Python, SQL y Bootstrap , lo que me permite
          conocer diferentes áreas y adaptarme a sus necesidades. Cuento con
          certificación de Scrum Product Owner, QA y Business Analyst las cuales
          me han permitido expandir mis conocimientos y habilidades en el mundo
          de la tecnología. Tengo altas capacidades de análisis, adaptación,
          aprendizaje, habilidades comunicativas y una clara orientación al
          negocio. Además, mi experiencia como Contador Auditor me ha permitido
          realizar análisis de negocios como Retail, Supermercado y Centros de
          Distribución entre otros, he logrado detectar vulnerabilidades y
          seguir los requerimientos del cliente, observar patrones recurrentes
          para proponer un plan de acción. Soy capaz de liderar y trabajar en
          equipo, ser flexible y adaptable, estoy orientada a cumplir con las
          metas. Cuento con experiencia en metodologías ágiles, gestión de
          proyectos y desarrollo de software para proyectos personales y en los
          cuales trabajé durante mis estudios como Full Stack.Estoy lista y
          entusiasmada por asumir el rol y los desafíos que se me presenten."
        </h5>
     
    </div>
  </div>
);
