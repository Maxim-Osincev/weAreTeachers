import React from "react";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./postcards.scss";

function Postcards() {
  return (
    <div className="postcards">
      <div className="postcards__wrapper">
        <div className="postcards__title">Поздравь учителя!</div>
        <div className="postcards__second_title">
          Сделай поздравительную открытку
        </div>
        <div className="postcards__swiper-wrapper">
          <Swiper
            className='_postcards__swiper'
            modules={[Navigation, Pagination]}
            loop={true}
            slidesPerView={3}
            navigation
            spaceBetween={33}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              940: {
                direction: "horizontal",
              },
              1: {
                direction: "vertical",
                slidesPerView: 1,
                height: 400,
                pagination: false,
                loop: false
              },
            }}
          >
            <SwiperSlide className="_swiper-slide">
              <img
                src={require("../img/postcards/postcards_slide_1.png")}
              />
            </SwiperSlide>
            <SwiperSlide className="_swiper-slide">
              <img
                src={require("../img/postcards/postcards_slide_3.png")}
              />
            </SwiperSlide>
            <SwiperSlide className="_swiper-slide">
              <img
                src={require("../img/postcards/postcards_slide_1.png")}
              />
            </SwiperSlide>
            <SwiperSlide className="_swiper-slide">
              <img
                src={require("../img/postcards/postcards_slide_3.png")}
              />
            </SwiperSlide>
            <SwiperSlide className="_swiper-slide">
              <img
                src={require("../img/postcards/postcards_slide_1.png")}
              />
            </SwiperSlide>
            <SwiperSlide className="_swiper-slide">
              <img
                src={require("../img/postcards/postcards_slide_3.png")}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="postcards__button">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 15V19C21.5 19.5304 21.2893 20.0391 20.9142 20.4142C20.5391 20.7893 20.0304 21 19.5 21H5.5C4.96957 21 4.46086 20.7893 4.08579 20.4142C3.71071 20.0391 3.5 19.5304 3.5 19V15"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 10L12.5 15L17.5 10"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 15V3"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Загрузить фото</span>
        </div>
        <div className="postcards__prompt">
          Формат - .jpg, .jpeg, .png, .tiff, .bmp
        </div>
      </div>
    </div>
  );
}

export default Postcards;
