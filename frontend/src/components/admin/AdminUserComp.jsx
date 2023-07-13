import { styled } from "styled-components";

const BoardContainer = styled.div`
  background: green;
  height: 500px;
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

const UserInfo = styled.div`
  height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid black;
`;

const Detail = styled.span`
  margin-right: 10px;
`;

const ControlButton = styled.button`
  margin: 0 5px;
`;

const AdminUserComp = ({ getUserDetail, deleteUser, userList }) => {
  return (
    <div>
      <BoardContainer>
        <BoardName>아이콘 / 회원관리</BoardName>
        <Board>
          {userList.map((user) => (
            <UserInfo key={user.phone}>
              <Detail>아이디 : {user.id}</Detail>
              <Detail>닉네임 : {user.nick}</Detail>
              <Detail>phone : {user.phone}</Detail>
              <ControlButton onClick={getUserDetail}>정보</ControlButton>
              <ControlButton onClick={deleteUser}>탈퇴</ControlButton>
            </UserInfo>
          ))}
        </Board>
      </BoardContainer>
    </div>
  );
};

export default AdminUserComp;
