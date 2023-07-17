import React, { useState } from "react";
import { styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";
import Modal from "styled-react-modal";
import AdminUserGraph from "./AdminUserGraph";

import PaginationComp from "../common/PaginationComp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faUser } from "@fortawesome/free-solid-svg-icons";

const AdminBoardWrap = styled.div`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
`;

const BoardContainer = styled.div`
  background: ${ThemeComp.smoke};

  &:first-child {
    width: 35%;
    height: 100%;
    margin-left: 1%;
  }
  &:last-child {
    width: 62%;
    margin-left: 1%;
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
      width: 5%;
      line-height: 30px;
    }

    li:nth-child(3n),
    li:nth-child(2) {
      width: 20%;
    }

    li:first-child {
      line-height: 17px;
    }
  }
`;

const BoardInfoContainer = styled.div`
  display: flex;
`;

const BoardInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* background: ${ThemeComp.smoke}; */
  border-bottom: 1px solid ${ThemeComp.lightblack};
  cursor: pointer;
  padding: 14px 0;
  line-height: 30px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Detail = styled.span`
  margin-right: 10px;
  width: 30%;
  text-align: center;
  width: 5%;

  &:nth-child(3n),
  &:nth-child(2) {
    width: 20%;
  }

  &.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ControlButton = styled.button`
  border: none;
  background: ${ThemeComp.lightblack};
  color: ${ThemeComp.smoke};
  cursor: pointer;
  padding: 7px 12px;

  &:hover {
    background: ${ThemeComp.softblack};
  }
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

const AdminBoardComp = ({ getBoardInform, deleteBoardInform, boardList, totalBoard, board, modal, switchModal }) => {
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <AdminBoardWrap>
      <BoardContainer>
        <BoardName>
          <FontAwesomeIcon icon={faChartSimple} style={{ color: "#000000" }} /> <span>게시물</span>
        </BoardName>
        <AdminUserGraph totalItem={totalBoard} type={"board"} />
      </BoardContainer>

      <BoardContainer>
        <BoardName>
          <FontAwesomeIcon icon={faChartSimple} style={{ color: "#000000" }} /> <span>게시물</span>
          <span>총 게시물 수({totalBoard})개</span>
        </BoardName>
        <Board>
          <ul className="list-name">
            <li>게시물 번호</li>
            <li>작성자</li>
            <li>제목</li>
            <li>좋아요</li>
            <li>조회수</li>
            <li>작성일</li>
            <li></li>
          </ul>
          {boardList.slice(offset, offset + limit).map((board) => (
            <BoardInfoContainer key={board.no}>
              <BoardInfo id={board.no} onClick={getBoardInform}>
                <Detail>{board.no}</Detail>
                <Detail>{board.id}</Detail>
                <Detail className="title">{board.title}</Detail>
                <Detail>{board.like}</Detail>
                <Detail>{board.cnt}</Detail>
                <Detail>{board.createAt}</Detail>
                <Detail>
                  <ControlButton onClick={() => deleteBoardInform(board.no)}>삭제</ControlButton>
                </Detail>
              </BoardInfo>
            </BoardInfoContainer>
          ))}
          <PaginationComp total={boardList.length} limit={limit} page={page} setPage={setPage} />
          {modal && board && (
            <StyledModal
              isOpen={modal} //true = 열림 / false = 닫힘
              ariahideapp={"false"} //없으면 에러 뜸
              onEscapeKeydown={switchModal} //esc키 눌렀을경우 함수 실행
              onBackgroundClick={switchModal} //esc키 or 오버레이부분 클릭시 함수 실행
            >
              <div>게시물 번호 : {board.no}</div>
              <div>작성자 : {board.id}</div>
              <div>제목 : {board.title}</div>
              <div>사진 : {board.img}</div>
              <div>내용 : {board.content}</div>
              <div>좋아요 : {board.like}</div>
              <div>조회수 : {board.cnt}</div>
              <div>작성일 : {board.createAt}</div>
              <ControlButton onClick={switchModal}>닫기</ControlButton>
            </StyledModal>
          )}
        </Board>
      </BoardContainer>
    </AdminBoardWrap>
  );
};

export default AdminBoardComp;
