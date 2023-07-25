import React, { useState } from "react";
import { styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";
import Modal from "styled-react-modal";
import AdminUserGraph from "./AdminUserGraph";
import PaginationComp from "../common/PaginationComp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";

const AdminUserWrap = styled.div`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
`;

const BoardContainer = styled.div`
  background: ${ThemeComp.smoke};

  &:first-child {
    width: 40%;
    height: 100%;
    margin-left: 1%;
  }
  &:last-child {
    width: 55%;
    margin-left: 2%;
  }
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
  border-radius: 20px;
  .list-name {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 14px 0;
    width: 100%;
    background: ${ThemeComp.smoke};
    border-bottom: 2px solid #333;
    li {
      text-align: center;
      width: 30%;
    }
    li:last-child {
      width: 10%;
    }
  }
`;
const UserInfoContainer = styled.div`
  display: flex;
`;

const UserInfo = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* background: ${ThemeComp.smoke}; */
  border-bottom: 1px solid ${ThemeComp.lightblack};
  cursor: pointer;
  line-height: 60px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Detail = styled.li`
  margin-right: 10px;
  width: 30%;
  text-align: center;

  &:last-child {
    width: 10%;
  }
`;

const ControlButton = styled.button`
  border: none;
  background: ${ThemeComp.lightblack};
  color: ${ThemeComp.smoke};
  cursor: pointer;
  padding: 7px 12px;
  margin-top: 20px;
  &:hover {
    background: ${ThemeComp.softblack};
  }
`;

const StyledModal = Modal.styled`
  background: ${ThemeComp.smoke};
  height: 400px;
  width: 600px;
  margin: 0 auto;
  display:flex;
  flex-direction :column;
  align-items:center;
  justify-content:center;

  table{
    width :90%;
  }

    table,
  td,
  th {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 15px;
    margin:0 auto;
    margin-top : 20px;
  }

  th{
    background : #e7e7e7;
  }

  h3{
    text-align:center;
  }
`;

const AdminUserComp = ({ getUserInform, deleteUserInform, userList, totalUser, user, modal, switchModal }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
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
          <FontAwesomeIcon icon={faUser} style={{ color: "#000000" }} /> <span>회원관리</span>
          <span> / 총 가입자 수({totalUser}명)</span>
        </BoardName>
        <Board>
          <ul className="list-name">
            <li>아이디</li>
            <li>닉네임</li>
            <li>전화번호</li>
            <li></li>
          </ul>

          {userList.slice(offset, offset + limit).map((user) => (
            <UserInfoContainer key={user.colSpanid}>
              <UserInfo id={user.id} onClick={getUserInform}>
                <Detail>{user.id}</Detail>
                <Detail> {user.nick}</Detail>
                <Detail> {user.phone}</Detail>
                <Detail>
                  <ControlButton onClick={() => deleteUserInform(user.id)}>탈퇴</ControlButton>
                </Detail>
              </UserInfo>
            </UserInfoContainer>
          ))}
          <PaginationComp total={userList.length} limit={limit} page={page} setPage={setPage} />

          {modal && user && (
            <StyledModal
              isOpen={modal} //true = 열림 / false = 닫힘
              ariahideapp={"false"} //없으면 에러 뜸
              onEscapeKeydown={switchModal} //esc키 눌렀을경우 함수 실행
              onBackgroundClick={switchModal} //esc키 or 오버레이부분 클릭시 함수 실행
            >
              <h3>회원 상세 정보</h3>
              <table>
                {/* <thead>
                  <tr>
                    <th></th>
                    <th>Ipsum</th>
                    <th>Ipsum</th>
                    <th>Ipsum</th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th>아이디</th>
                    <td> {user.id}</td>
                    <th>닉네임</th>
                    <td>{user.nick}</td>
                  </tr>
                  <tr>
                    <th>전화번호</th>
                    <td>{user.phone}</td>
                    <th>성별</th>
                    <td>{user.gender ? "여자" : "남자"}</td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td colSpan="3">{user.addr1 + user?.addr2}</td>
                  </tr>
                  <tr>
                    <th>우편번호</th>
                    <td>{user.zipcode}</td>
                    <th>등급</th>
                    <td>{user.grade}</td>
                  </tr>
                  <tr>
                    <th>가입날짜</th>
                    <td colSpan="3">{user.reg}</td>
                  </tr>
                </tbody>
              </table>
              <ControlButton onClick={switchModal}>닫기</ControlButton>
            </StyledModal>
          )}
        </Board>
      </BoardContainer>
    </AdminUserWrap>
  );
};

export default AdminUserComp;
