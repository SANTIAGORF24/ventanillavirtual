"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../app/globals.css";
// import required modules
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

export const AboutUs = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {};
  return (
    <div className=" bg-[#D9D9D9] py-10 flex justify-center">
      <div className=" flex w-5/6 ">
        <div className="w-1/3 pt-10 pr-10">
          <p>Transformando Ideas en Realidad</p>
          <h3 className="text-4xl font-bold">Sobre Nosotros</h3>
          <p>
            En Cibertech, nos apasiona la creación y el desarrollo de soluciones
            innovadoras a través de la programación. Somos una empresa líder en
            el campo de la tecnología, especializada en el diseño, desarrollo y
            mantenimiento de proyectos a medida. Nuestra misión es simple pero
            poderosa: transformar tus ideas en realidades digitales que superen
            tus expectativas.
          </p>
        </div>
        <div className=" px-5 w-2/3 ">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/assets/img/html.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/css.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/javascript.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/python.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/java.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/react.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/img/sql.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
