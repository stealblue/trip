import styled from "styled-components";

const MainChatWarraper = styled.div`
  margin-top: 50px;
  width: 45%;

  @media (max-width: 1200px) {
    width: 100%;
  }

  img {
    width: 700px;
    padding: 100px 0;
  }
`;

const MainChatComp = () => {
  return (
    <>
      <MainChatWarraper>
        <img src="/assets/chat-sample.png" alt="채팅방 샘플 이미지" />
      </MainChatWarraper>
    </>
  );
};

export default MainChatComp;
