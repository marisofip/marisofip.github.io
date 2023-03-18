import React, { Component } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import logo from "../../../src/img/logolinkedin.png";
import logo1 from "../../../src/img/logogithub.png";
import logo2 from "../../../src/img/logogmail.png";

export const Redes = () => (
  <div
    className="content-section bg-none text-white text-center "
    id="services"
  >
    <div className="container" >
      <div className="content-section-heading">
        <h3 className="mb-5 mt-5">Contactame!</h3>
      </div>
      <div className="row g-3" id="containerRedes">
        <div className="containerCard m-5 p-5">
          <div id="wrapper">
            <div
              className="col-4 bg-dark"
              id="iconRedes"
            >
              <h4>
                <strong>LinkedIn</strong>
              </h4>
              <span className="w-25">
                <AiOutlineLinkedin style={{ fontSize: "80px" }} />
              </span>
            </div>
            <div
              className="col-4 bg-none"
              id="iconRedesback"
            >
              <span> <a href="https://www.linkedin.com/in/marisofi/ "   target="_blank"> 
                <img src={logo} style={{ marginRight: "5", alignItems: "center", width: "200px" }} />{" "}
                </a> </span>
            </div>
          </div>
        </div>
        <div className="containerCard m-5 p-5">
          <div id="wrapper">
            <div
              className="col-4 bg-dark"
              id="iconRedes"
            >
              <h4>
                <strong>GitHub</strong>
              </h4>
              <span className="w-25">
                <AiFillGithub style={{ fontSize: "80px" }} />
              </span>
            </div>
            <div
              className="col-4 bg-none"
              id="iconRedesback"
            >
              <span>  <a href="https://github.com/marisofip"  target="_blank">
                <img src={logo1} style={{ alignItems: "center", width: "280px" }} />{" "}
                </a> </span>
            </div>
          </div>
        </div>

        <div className="containerCard m-5 p-5">
          <div id="wrapper">
            <div
              className="col-4 bg-dark"
              id="iconRedes"
            >
              <h4>
                <strong>Gmail</strong>
              </h4>
              <span className="w-25">
                <SiGmail style={{ fontSize: "80px" }} />
              </span>
            </div>
            <div
              className="col-4  bg-none"
              id="iconRedesback"
            >
              <span> <a href="mailto:marisofipalencia@gmail.com"  target="_blank">
                <img src={logo2} style={{ alignItems: "center",  width: "300px" }} />{" "}
                </a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
