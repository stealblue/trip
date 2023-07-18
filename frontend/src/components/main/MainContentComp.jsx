import styled from "styled-components";
import WrapperComp from "../common/WrapperComp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ThemeComp from "../common/ThemeComp";

const TravelList = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;

  .bg {
    width: 500px;
    height: 500px;
    background: #333;
    border-radius: 20px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 100px 100px inset;
    .title {
      position: absolute;
      bottom: 120px;
      left: 3rem;
      font-size: 40px;
      color: ${ThemeComp.white};
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      padding: 10px 0;
      border-bottom: 5px solid ${ThemeComp.red};
      font-family: "TheJamsil5light";
    }

    .place {
      position: absolute;
      bottom: 66px;
      left: 30px;
      font-size: 30px;
      color: ${ThemeComp.white};
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      font-family: "TheJamsil5light";
    }
  }

  .bg1 {
    background: url("/assets/main-content1.jpg");
    background-size: cover;
  }
  .bg2 {
    background: url("/assets/main-content2.jpg");
    background-size: cover;
  }
  .bg3 {
    background: url("/assets/main-content3.jpeg");
    background-size: cover;
  }
  .bg4 {
    background: url("/assets/main-content4.jpg");
    background-size: cover;
  }
  .bg5 {
    background: url("/assets/main-content5.jpeg");
    background-size: cover;
  }
  .bg6 {
    background: url("/assets/main-content6.jpg");
    background-size: cover;
  }
  .bg7 {
    background: url("/assets/main-content7.jpg");
    background-size: cover;
  }
`;

const TravelListTitle = styled.div`
  margin-top: 5rem;
  h2 {
    font-size: 30px;
    span {
      color: ${ThemeComp.subcolor};
      font-size: 36px;
    }
  }
`;
const TravelListItem = styled.div`
  width: 300px;
  height: 400px;
  background: #dff6b3;
`;

const MaincontentComp = () => {
  return (
    <WrapperComp>
      <TravelListTitle>
        <h2>
          <span>7월</span>에 떠나기 좋은 여행지는?
        </h2>
      </TravelListTitle>

      <TravelList>
        <Swiper slidesPerView={3} spaceBetween={30} slidesPerView={4} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} navigation={true} modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
          <SwiperSlide className="bg bg1">
            <p className="title">제주도</p>
            <p className="place">무지개 해안도로</p>
          </SwiperSlide>
          <SwiperSlide className="bg bg2">
            <p className="title">부산</p>
            <p className="place">엑스더스카이 전망대</p>
          </SwiperSlide>
          <SwiperSlide className="bg bg3">
            <p className="title">울산</p>
            <p className="place">간월재</p>
          </SwiperSlide>
          <SwiperSlide className="bg bg4">
            <p className="title">충북</p>
            <p className="place">갈론계곡</p>
          </SwiperSlide>
          <SwiperSlide className="bg bg5">
            <p className="title">경주</p>
            <p className="place">안압지</p>
          </SwiperSlide>
          <SwiperSlide className="bg bg6">
            <p className="title">남해</p>
            <p className="place">상상양떼목장&편백숲</p>
          </SwiperSlide>
          <SwiperSlide className="bg bg7">
            {" "}
            <p className="title">전주</p>
            <p className="place">전주 한옥 마을</p>
          </SwiperSlide>
        </Swiper>
      </TravelList>
    </WrapperComp>
  );
};

export default MaincontentComp;
