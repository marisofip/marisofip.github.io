import React, { useRef, useState } from "react";
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
export const Portfolio = () => {
  
  return (
    <>
    <Swiper
    style={{
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff", 
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
    <SwiperSlide  style={{ backgroundImage: `url(${eshop})` }}>
      <div className="title" data-swiper-parallax="-300">
        Slide 1
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          
        </p>
        </div>
       <div className="btn-group" role="group" aria-label="Basic outlined example">
  <a type="button" id="button" className="btn btn-outline-dark text-white" style={{width:"150px"}}> <h5> Ver Demo</h5> </a>
   <a type="button" id="button" className="btn btn-outline-dark text-white " style={{width:"150px"}}> <h5> Herramientas</h5></a>
</div>
    </SwiperSlide>
    <SwiperSlide style={{ backgroundImage: `url(${audioplay})` }}>
      <div className="title" data-swiper-parallax="-300">
        Slide 2
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
          tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide style={{ backgroundImage: `url(${starwars})` }}>
      <div className="title" data-swiper-parallax="-300">
        Slide 3
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
          tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide style={{ backgroundImage: `url(${tictac})` }}>
      <div className="title" data-swiper-parallax="-300">
        Slide 3
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
          tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </SwiperSlide>
    <SwiperSlide style={{ backgroundImage: `url(${bubblesort})` }}>
      <div className="title" data-swiper-parallax="-300">
        Slide 3
      </div>
      <div className="subtitle" data-swiper-parallax="-200">
        Subtitle
      </div>
      <div className="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
          tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
</>
);
}