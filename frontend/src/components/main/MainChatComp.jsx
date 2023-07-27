import styled from "styled-components";

const MainChatWarraper = styled.div`
  width: 45%;
  text-align: center;

  img {
    width: 600px;
    padding: 100px 0;
  }
  @media (max-width: 1400px) {
    margin: 0 auto;
    text-align: center;
    img {
      width: 500px;
    }
  }

  @media (max-width: 1200px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;

    img {
      width: 400px;
    }
  }
`;

const MainChatComp = () => {
  return (
    <>
      <MainChatWarraper>
        <img src="/assets/banner.jpg" alt="채팅방 샘플 이미지" />
      </MainChatWarraper>
    </>
  );
};

export default MainChatComp;
