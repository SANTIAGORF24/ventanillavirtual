"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Team = () => {
  return (
    <div className="flex items-center justify-center max-w-full">
      <div className="w-4/5">
        <h2 className="text-3xl font-bold py-10"> Team</h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2"
        >
          <SwiperSlide className="teamsl">Slide 1</SwiperSlide>
          <SwiperSlide className="teamsl">Slide 2</SwiperSlide>
          <SwiperSlide className="teamsl">Slide 3</SwiperSlide>
          <SwiperSlide className="teamsl">Slide 4</SwiperSlide>
          <SwiperSlide className="teamsl">Slide 5</SwiperSlide>
          <SwiperSlide className="teamsl">Slide 6</SwiperSlide>
          <SwiperSlide className="teamsl">Slide 7</SwiperSlide>
          <SwiperSlide className="teamsl">Slide 8</SwiperSlide>
          <SwiperSlide className="teamsl">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
