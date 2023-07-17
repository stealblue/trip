import { styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";
import Modal from "styled-react-modal";
import AdminUserGraph from "./AdminUserGraph";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";

const AdminUserWrap = styled.div`
  width: 1600px;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  padding: 20px;
`;

const BoardContainer = styled.div`
  background: ${ThemeComp.smoke};
  width: 1200px;
  margin: 10px auto;
`;

const BoardName = styled.div`
  background: ${ThemeComp.dark};

  font-size: 20px;
  padding: 10px 20px;
  span {
    color: ${ThemeComp.smoke};
    margin-left: 10px;
  }
`;

const Board = styled.div`
  background: white;
  height: 100%;
  border-radius: 20px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  background: green;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  background: gray;
  border-bottom: 1px solid black;
  cursor: pointer;
  height: 40px;
  padding: 0 10px;
`;

const Detail = styled.span`
  margin-right: 10px;
`;

const ControlButton = styled.button`
  border: none;
  background: gray;
  cursor: pointer;
  margin: 0 10px;
`;

const StyledModal = Modal.styled`
  background: white;
  height: 450px;
  width: 500px;

  div{
    display: flex;
    padding: 5px;
    justify-contents: space-between;
  }
`;

const AdminUserComp = ({ getUserInform, deleteUserInform, userList, totalUser, user, modal, switchModal }) => {
  return (
    <AdminUserWrap>
      <BoardContainer>
        <BoardName>
          <FontAwesomeIcon icon={faChartSimple} style={{ color: "#000000" }} /> <span>가입자수</span>
        </BoardName>
        <AdminUserGraph totalItem={totalUser} type={"user"} />
      </BoardContainer>

      <BoardContainer>
        <BoardName>
          <FontAwesomeIcon icon={faChartSimple} style={{ color: "#000000" }} /> <span>회원관리</span>
          <span> / 총 가입자 수({totalUser}명)</span>
        </BoardName>
        <Board>
          {userList.map((user) => (
            <UserInfoContainer key={user.id}>
              <UserInfo id={user.id} onClick={getUserInform}>
                <Detail>아이디 : {user.id}</Detail>
                <Detail>닉네임 : {user.nick}</Detail>
                <Detail>phone : {user.phone}</Detail>
              </UserInfo>
              <ControlButton onClick={() => deleteUserInform(user.id)}>탈퇴</ControlButton>
            </UserInfoContainer>
          ))}
          {modal && user && (
            <StyledModal
              isOpen={modal} //true = 열림 / false = 닫힘
              ariahideapp={"false"} //없으면 에러 뜸
              onEscapeKeydown={switchModal} //esc키 눌렀을경우 함수 실행
              onBackgroundClick={switchModal} //esc키 or 오버레이부분 클릭시 함수 실행
            >
              <div>아이디 : {user.id}</div>
              <div>닉네임 : {user.nick}</div>
              <div>phone : {user.phone}</div>
              <div>주소 : {user.addr1 + user?.addr2}</div>
              <div>우편번호 : {user.zipcode}</div>
              <div>성별 : {user.gender ? "여자" : "남자"}</div>
              <div>등급 : {user.grade}</div>
              <div>가입날짜 : {user.reg}</div>
              <ControlButton onClick={switchModal}>닫기</ControlButton>
            </StyledModal>
          )}
        </Board>
      </BoardContainer>
    </AdminUserWrap>
  );
};

export default AdminUserComp;
