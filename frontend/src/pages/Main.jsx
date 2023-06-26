import { styled } from "styled-components";

const Main = () => {
  const SlideImg = styled.img`
    width: 100%;
    height: 800px;
    background-image: url("/assets/mainslide.jpeg");
    background-position: center;
    background-size: 100%;
    opacity: 0.8;
    position: relative;
  `;

  return (
    <div>
      <div>
        <SlideImg />
      </div>
    </div>
  );
};

export default Main;
