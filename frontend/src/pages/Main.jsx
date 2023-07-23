import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { Reveal, Tween } from "react-gsap";

import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import MainSearchComp from "../components/main/MainSearchComp";
import MaincontentComp from "../components/main/MainContentComp";
import MainChatComp from "../components/main/MainChatComp";
import MainBoardComp from "../components/main/MainBoardComp";
import WrapperComp from "../components/common/WrapperComp";
import Swal from "sweetalert2";
import SideMenuComp from "../components/main/SideMenuComp";

const SlideWarraper = styled.div`
  position: relative;
  top: -200px;
  height: 850px;

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
  }

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
    cursor: pointer;

    span {
      margin-right: 10px;
      color: #fff;
    }
  }
  p:hover {
    background: #111;
  }
`;

const MainBoardListContainer = styled.div`
  display: flex;
`;

const FadeInLeft = ({ children }) => (
  <Tween from={{ opacity: 0, transform: "translate3d(-100vw, 0, 0)" }} ease="back.out(1.4)">
    {children}
  </Tween>
);

const Main = () => {
  const navigate = useNavigate();

  const onSearchArea = (e) => {

    if (e.key === "Enter") {
      const keyword = `${e.target.value}`;
      navigate('/search', { state: { keyword } });
    } else if (e.button === 0) {
      const keyword = `${e.target.dataset.keyword}`;
      navigate('/search', { state: { keyword } });
    }
  };

  const onSwal = () => {
    Swal.fire({
      icon: 'info',
      title: "구현 중"
    })
  }

  return (
    <>
      <SlideWarraper>
        <Swiper cssMode={true} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} className="mySwiper">
          <SwiperSlide onClick={onSwal}>
            <img src="/assets/mainslide.jpeg" alt="슬라이드1" />
            <div className="slide-text">
              <Reveal repeat trigger={<div />}>
                <FadeInLeft>
                  <h3>바다로 떠나는 여행</h3>
                  <p>
                    <span>전국 곳곳 바다여행 알아보기</span>
                    <FontAwesomeIcon icon={faRightLong} />
                  </p>
                </FadeInLeft>
              </Reveal>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={onSwal}>
            <img src="/assets/mainslide2.jpeg" alt="슬라이드1" />
            <div className="slide-text">
              <Reveal repeat trigger={<div />}>
                <FadeInLeft>
                  <h3>
                    하늘에서 즐기는 <br /> 액티비티한 여행
                  </h3>
                  <p>
                    <span>액티비티 여행 찾아보기</span>
                    <FontAwesomeIcon icon={faRightLong} />
                  </p>
                </FadeInLeft>
              </Reveal>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={onSwal}>
            <img src="/assets/mainslide3.jpg" alt="슬라이드1" />
            <div className="slide-text">
              <Reveal repeat trigger={<div />}>
                <FadeInLeft>
                  <h3>아름다운 풍경과 마주하는 여행</h3>
                  <p>
                    <span>전국 풍경 명소 찾아보기</span>
                    <FontAwesomeIcon icon={faRightLong} />
                  </p>
                </FadeInLeft>
              </Reveal>
            </div>
          </SwiperSlide>
          <SwiperSlide onClick={onSwal}>
            <img src="/assets/mainslide4.jpeg" alt="슬라이드1" />
            <div className="slide-text">
              <Reveal repeat trigger={<div />}>
                <FadeInLeft>
                  <h3>
                    고즈넉한 <br />
                    한옥을 즐기고 싶다면
                  </h3>
                  <p>
                    <span>아름다운 한옥펜션 알아보기</span>
                    <FontAwesomeIcon icon={faRightLong} />
                  </p>
                </FadeInLeft>
              </Reveal>
            </div>
          </SwiperSlide>
        </Swiper>
      </SlideWarraper>
      <WrapperComp>
        <MainSearchComp onSearchArea={onSearchArea} />
        <MaincontentComp />
        {/* <MaincontentComp /> */}
        <MainBoardListContainer>
          <MainChatComp />
          <MainBoardComp />
        </MainBoardListContainer>
      </WrapperComp>
    </>
  );
};

export default Main;
