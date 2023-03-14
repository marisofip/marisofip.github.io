import React, { Component } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export const Redes = () => (
  <div className="content-section bg-none text-white text-center" id="services">
    <div className="container"  style={{ alignItems:'center'}}>
      <div className="content-section-heading">
        <h3 className="mb-5 mt-5">Contactame!</h3>
      </div>
      <div className="row gx-3 gx-lg-5">
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0" id="iconRedes" >
          <h4>
            <strong >LinkedIn</strong>
          </h4>
          <span className="w-50" >
            <AiOutlineLinkedin style={{ fontSize: '80px'}} />
          </span>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0"  id="iconRedes">
          <h4>
            <strong>GitHub</strong>
          </h4>
          <span className="w-50" >
            <AiFillGithub  style={{ fontSize: '80px'}} />
          </span>
        </div>
        <div className="col-lg-4 col-md-6 mb-5 mb-md-0"  id="iconRedes">
         
          <h4>
            <strong>Gmail</strong>
          </h4>
          <span className="w-50">
            <SiGmail  style={{ fontSize: '80px'}} />
          </span>
        </div>
      </div>
    </div>
  </div>
);
