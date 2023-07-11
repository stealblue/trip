import React from "react";
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
    height: 850px;
    /* opacity: 0.8; */
  }

  .slide-text {
    position: absolute;
    bottom: 140px;
    left: 140px;

    h3 {
      font-size: 70px;
      font-family: "PyeongChangPeace-Bold";
      line-height: 74px;
    }
    p {
      font-size: 20px;
      background: rgba(0, 0, 0, 0.7);
      padding: 10px 40px;
      border-radius: 50px;
      margin-top: 10px;
      display: inline-block;
      color: #fff;
    }
  }
`;

const FadeInLeft = ({ children }) => (
  <Tween from={{ opacity: 0, transform: "translate3d(-100vw, 0, 0)" }} ease="back.out(1.4)">
    {children}
  </Tween>
);

const Main = () => {
  return (
    <SlideWarraper>
      <Swiper cssMode={true} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <img src="/assets/mainslide.jpeg" alt="슬라이드1" />

          <div className="slide-text">
            <Reveal repeat trigger={<div />}>
              <FadeInLeft>
                <h3>바다로 떠나는 여행</h3>
                <p>전국 곳곳 바다여행 알아보기</p>
              </FadeInLeft>
            </Reveal>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/mainslide2.jpeg" alt="슬라이드1" />
          <div className="slide-text">
            <Reveal repeat trigger={<div />}>
              <FadeInLeft>
                <h3>
                  하늘에서 즐기는
                  <br />
                  자유로운 여행
                </h3>
                <p>전국 곳곳 바다여행 알아보기</p>
              </FadeInLeft>
            </Reveal>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/mainslide3.jpg" alt="슬라이드1" />
          <div className="slide-text">
            <Reveal repeat trigger={<div />}>
              <FadeInLeft>
                <h3>바다로 떠나는 여행</h3>
                <p>전국 곳곳 바다여행 알아보기</p>
              </FadeInLeft>
            </Reveal>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/mainslide4.jpeg" alt="슬라이드1" />
          <div className="slide-text">
            <Reveal repeat trigger={<div />}>
              <FadeInLeft>
                <h3>바다로 떠나는 여행</h3>
                <p>전국 곳곳 바다여행 알아보기</p>
              </FadeInLeft>
            </Reveal>
          </div>
        </SwiperSlide>
      </Swiper>
    </SlideWarraper>
  );
};

export default Main;
