import { styled } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
    background-size: cover;
    opacity: 0.8;
    height: 900px;
  }
`;

const Main = () => {
  return (
    <SlideWarraper>
      <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} modules={[Navigation, Pagination, Mousewheel, Keyboard]} className="mySwiper">
        <SwiperSlide>
          <img src="/assets/mainslide.jpeg" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </SlideWarraper>
  );
};

export default Main;
