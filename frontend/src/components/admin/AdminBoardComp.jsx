import { styled } from "styled-components";
import Modal from "styled-react-modal";
import AdminUserGraph from "./AdminUserGraph";

const BoardContainer = styled.div`
  background: skyblue;
  height: 600px;
  width: 800px;
  margin: 20px;
`;

const BoardName = styled.div`
  background: yellow;
  color: green;
  font-size: 20px;
  padding: 10px 0;
`;

const Board = styled.div`
  background: white;
  height: 100%;
  border-radius: 20px;
`;

const BoardInfoContainer = styled.div`
  display: flex;
  background: green;
`;

const BoardInfo = styled.div`
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

const AdminBoardComp = ({
  getBoardInform,
  deleteBoardInform,
  boardList,
  totalBoard,
  board,
  modal,
  switchModal,
}) => {
  return (
    <div>
      <BoardContainer>
        <BoardName>아이콘 / 게시물 </BoardName>
        <AdminUserGraph totalItem={totalBoard} type={"board"} />
      </BoardContainer>

      <BoardContainer>
        <BoardName>아이콘 / 게시물 / 총 게시물 수({totalBoard})개</BoardName>
        <Board>
          {boardList?.map((board) => (
            <BoardInfoContainer key={board.no}>
              <BoardInfo id={board.no} onClick={getBoardInform}>
                <Detail>게시물 번호 : {board.no}</Detail>
                <Detail>작성자 : {board.id}</Detail>
                <Detail>제목 : {board.title}</Detail>
                <Detail>좋아요 : {board.like}</Detail>
                <Detail>조회수 : {board.cnt}</Detail>
                <Detail>작성일 : {board.createAt}</Detail>
              </BoardInfo>
              <ControlButton onClick={() => deleteBoardInform(board.no)}>
                삭제
              </ControlButton>
            </BoardInfoContainer>
          ))}
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
    </div>
  );
};

export default AdminBoardComp;
