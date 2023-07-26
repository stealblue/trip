import { useEffect, useRef } from "react";
import styles from "./ModalBasic.css";
import KakaoMapComp from "./KakaoMapComp";
import { styled } from "styled-components";
import ThemeComp from "./ThemeComp";

const ModalBlock = styled.div`
  background-color: ${ThemeComp.smoke};
  position: absolute;
  top: 80px;
  left: 25px;
  z-index: 9999;
  width: 700px;
  height: 600px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 24px;
    font-weight: 600;
  }
`;

const ModalBasic = ({ setModalOpen, mapData }) => {
  const { title, mapx, mapy, addr } = mapData;
  console.log(`${title} / ${mapx} / ${mapy} / ${addr}`);
  const closeModal = () => {
    setModalOpen(false);
  }; // 모달 끄기 (X버튼 onClick 이벤트 핸들러)

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (e) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  return (
    // 모달창을 useRef로 잡아준다.
    <>
      <ModalBlock ref={modalRef}>
        <button className="close" onClick={closeModal}>
          X
        </button>
        <div className="title">{title}</div>
        <div className="addr">{addr}</div>
        <KakaoMapComp mapx={mapx} mapy={mapy} />
      </ModalBlock>
    </>
  );
};
export default ModalBasic;
