import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./congratulations.scss";

function Congratulations() {
  return (
    <div className="congratulations">
      <div className="congratulations__wrapper">
        <h2 className="congratulations__title">Поздравления</h2>
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
              },
            }}
          >
            <SwiperSlide>
              <img
                alt="Поздравление"
                title="Поздравление"
                src={require("../img/congratulations/congratulations_slide_photo_1.png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Поздравление"
                title="Поздравление"
                src={require("../img/congratulations/congratulations_slide_photo_2.png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Поздравление"
                title="Поздравление"
                src={require("../img/congratulations/congratulations_slide_photo_3.png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="Поздравление"
                title="Поздравление"
                src={require("../img/congratulations/congratulations_slide_photo_4.png")}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
