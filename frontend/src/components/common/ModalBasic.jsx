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

const ModalBasic = ({ setModalOpen, mapData, getDetail, onGetDetail }) => {
  const { title, mapx, mapy, addr } = mapData;
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
        {onGetDetail?.contenttypeid === "32" ? (
          <>
            <div>
              보유 룸 갯수 :
              {onGetDetail?.roomcount ? onGetDetail.roomcount : "-"}
            </div>
            <div>
              룸 타입 :{onGetDetail?.roomtype ? onGetDetail.roomtype : "-"}
            </div>
            <div>
              체크인 :{onGetDetail?.checkintime ? onGetDetail.checkintime : "-"}
            </div>
            <div>
              체크아웃 :
              {onGetDetail?.checkouttime ? onGetDetail.checkouttime : "-"}
            </div>
            <div>
              취사 가능여부 :
              {onGetDetail?.chkcooking ? onGetDetail.chkcooking : "-"}
            </div>
            <div>
              이용시설 :{onGetDetail?.foodplace ? onGetDetail.foodplace : "-"}
            </div>
            <div>
              전화번호 :
              {onGetDetail?.infocenterlodging
                ? onGetDetail.infocenterlodging
                : "-"}
            </div>
            <div>
              주차 가능여부 :
              {onGetDetail?.parkinglodging ? onGetDetail.parkinglodging : "-"}
            </div>
            <div>
              숙박 예약 :
              {onGetDetail?.reservationlodging
                ? onGetDetail.reservationlodging
                : "-"}
            </div>
            <div>
              건물 이용 범위 :
              {onGetDetail?.scalelodging ? onGetDetail.scalelodging : "-"}
            </div>
            {onGetDetail?.reservationurl ? (
              <div>
                예약링크 :
                <div
                  dangerouslySetInnerHTML={{
                    __html: onGetDetail.reservationurl,
                  }}
                ></div>
              </div>
            ) : (
              <div>예약링크 : -</div>
            )}
          </>
        ) : (
          <>
            <div>
              전화번호 :{onGetDetail?.infocenter ? onGetDetail.infocenter : "-"}
            </div>
            <div>
              휴일 :{onGetDetail?.restdate ? onGetDetail.restdate : "-"}
            </div>
            <div>
              컨텐츠 :{onGetDetail?.expguide ? onGetDetail.expguide : "-"}
            </div>
            {onGetDetail?.usetime ? (
              <div>
                이용시간 :
                <div
                  dangerouslySetInnerHTML={{
                    __html: onGetDetail.usetime,
                  }}
                ></div>
              </div>
            ) : (
              <div>이용시간 : -</div>
            )}
            <div>
              주차 가능여부 : {onGetDetail?.parking ? onGetDetail.parking : "-"}
            </div>
            <div>
              반려동물 동반여부 :
              {onGetDetail?.chkpet ? onGetDetail.chkpet : "-"}
            </div>
            <div>
              신용카드 이용 :
              {onGetDetail?.chkcreditcard ? onGetDetail.chkcreditcard : "-"}
            </div>
          </>
        )}

        <div className="addr">{addr}</div>
        <KakaoMapComp mapx={mapx} mapy={mapy} />
      </ModalBlock>
    </>
  );
};
export default ModalBasic;
