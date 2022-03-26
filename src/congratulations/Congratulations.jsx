import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./congratulations.scss";

function Congratulations() {
  
  return (
    <div className="congratulations">
      <div className="congratulations__wrapper">
        <div className="congratulations__title">Поздравления</div>
        <div className="congratulations__swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1441: {
                slidesPerView: 5,
              },
              1025: {
                slidesPerView: 4,
              },
              769: {
                slidesPerView: 3,
              },
              485: {
                slidesPerView: 2,
              },
              1: {
                direction: "vertical",
                slidesPerView: 1,
                height: 400,
                pagination: false
              },
            }}
          >
            <SwiperSlide>
              <img
                src={require("../img/congratulations/congratulations_slide_1.png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../img/congratulations/congratulations_slide_2.png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../img/congratulations/congratulations_slide_1.png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../img/congratulations/congratulations_slide_3.png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../img/congratulations/congratulations_slide_4.png")}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
