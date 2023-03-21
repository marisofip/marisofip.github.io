import React,  { useRef, useState } from "react";
import eshop from "../../../src/img/eshop.png";
import audioplay from "../../../src/img/audioplay.png";
import starwars from "../../../src/img/starwars.png";
import tictac from "../../../src/img/tictac.png";
import bubblesort from "../../../src/img/bubblesort.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
export const Portfolio = () => {
  return (
    <>
    < div className="portfolio" >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          margin: "50px",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <SwiperSlide  className="img" style={{ backgroundImage: `url(${eshop})` }}>
          <div className="title text-white" data-swiper-parallax="-300">
            E-Commerce App
          </div>
          <div className="subtitle" data-swiper-parallax="-200"></div>
          <div className="text text-white" data-swiper-parallax="-100">
            <p>
              <br />
              Desarrollada en ReactJs y Phyton, RestAPI, PostgreSQL, recursos de
              metodologías ágiles, carrito de compras, boton de mercado pago.
            </p>
          </div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <a
            href="https://youtu.be/smwUuakyxQk"
            target="_blank"
              type="button"
              id="button"
              className="btn btn-outline-dark text-white"
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Ver Demo</h5>{" "}
            </a>
            <a
            
              type="button"
              id="button"
              className="btn btn-outline-dark text-white "
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Herramientas</h5>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="img" style={{ backgroundImage: `url(${audioplay})` }}>
          <div className="title" data-swiper-parallax="-300">
            Reproductor tipo Spotify
          </div>
          <div className="subtitle" data-swiper-parallax="-200"></div>
          <div className="text text-white" data-swiper-parallax="-100">
            <p>
              <br />
              Desarrollada en ReactJs, consumo de Fetch API, Hooks, botones play
              pause, next y prev habilitados, así como la selección desde la
              lista.
            </p>
          </div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <a
              href="https://youtu.be/XIL6qHaOuHk"
              target="_blank"
              type="button"
              id="button"
              className="btn btn-outline-dark text-white"
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Ver Demo</h5>{" "}
            </a>
            <a
              type="button"
              id="button"
              className="btn btn-outline-dark text-white "
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Herramientas</h5>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="img" style={{ backgroundImage: `url(${starwars})` }}>
          <div className="title text-white" data-swiper-parallax="-300">
           Web tipo Blog
          </div>
          <div className="subtitle" data-swiper-parallax="-200"></div>
          <div className="text text-white bg-dark bg-opacity-25" data-swiper-parallax="-100">
            <p>
              <br />
              Desarrollada en ReactJS + Flux, consumo de SWAPI, 
              función Fetch,Router, Context,botón agregar y
               eliminar de lista de favoritos.
            </p>
          </div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <a
            href="https://youtu.be/nXs1NE20hiE"
            target="_blank"
              type="button"
              id="button"
              className="btn btn-outline-dark text-white"
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Ver Demo</h5>{" "}
            </a>
            <a
              type="button"
              id="button"
              className="btn btn-outline-dark text-white "
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Herramientas</h5>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="img" style={{ backgroundImage: `url(${tictac})` }}>
          <div className="title text-white" data-swiper-parallax="-300">
            Juego Tres en Raya
          </div>
          <div className="subtitle" data-swiper-parallax="-200"></div>
          <div className="text text-white" data-swiper-parallax="-100">
            <p>
              <br />
              Desarrollada en ReactJs,componentes con Hooks, metodología ágil,
              wireFrame en Miro
            </p>
          </div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <a
            href="https://youtu.be/3slUjGigXOg"
            target="_blank"
              type="button"
              id="button"
              className="btn btn-outline-dark text-white"
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Ver Demo</h5>{" "}
            </a>
            <a
              type="button"
              id="button"
              className="btn btn-outline-dark text-white "
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Herramientas</h5>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="img" style={{ backgroundImage: `url(${bubblesort})` }}>
          <div className="title text-white" data-swiper-parallax="-300">
          Juego Ordenando Cartas
          </div>
          <div className="subtitle text-white" data-swiper-parallax="-200"></div>
          <div className="text text-white" data-swiper-parallax="-100">
            <p>
              <br />
          Desarrollada en Vanilla Javascript, HTML y CSS aplicando
           bubble sort,function Math Random, AddeventListener.

            </p>
          </div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <a
            href="https://youtu.be/nbYJ0nxUZ_Q"
            target="_blank"
              type="button"
              id="button"
              className="btn btn-outline-dark text-white"
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Ver Demo</h5>{" "}
            </a>
            <a
              type="button"
              id="button"
              className="btn btn-outline-dark text-white "
              style={{ width: "150px" }}
            >
              {" "}
              <h5> Herramientas</h5>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};
