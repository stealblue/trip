import { styled } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Reveal, Tween } from "react-gsap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideWarraper = styled.div`
  position: relative;
  top: -200px;

  img {
    width: 100%;
    background-position: center;
    background-size: auto;
    object-fit: cover;
    height: 900px;
    /* opacity: 0.8; */
  }
`;

const Main = () => {
  return (
    <SlideWarraper>
      <Swiper cssMode={true} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <img src="/assets/mainslide.jpeg" alt="슬라이드1" />
          <div className="slide-text">
            <h3>바다로 떠나는 여행</h3>
            <p>전국 곳곳 바다여행 알아보기</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/mainslide2.jpeg" alt="슬라이드1" />
          <div className="slide-text">
            <h3>바다로 떠나는 여행</h3>
            <p>전국 곳곳 바다여행 알아보기</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/mainslide3.jpg" alt="슬라이드1" />
          <div className="slide-text">
            <h3>바다로 떠나는 여행</h3>
            <p>전국 곳곳 바다여행 알아보기</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/mainslide4.jpeg" alt="슬라이드1" />
          <div className="slide-text">
            <h3>바다로 떠나는 여행</h3>
            <p>전국 곳곳 바다여행 알아보기</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </SlideWarraper>
  );
};

export default Main;
