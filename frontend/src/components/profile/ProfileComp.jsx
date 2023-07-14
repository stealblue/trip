import { styled } from "styled-components";

const ProfileBlock = styled.div`
  display: flex;
  background: gray;
  height: 250px;
`;

const ImageBox = styled.img`
  cursor: pointer;
  height: 150px;
  width: 150px;
  border-radius: 25px;
  background: black;
`;

const UserInformBox = styled.div`
  background: skyblue;
  height: 240px;
`;

const UserInform = styled.div`
  display: flex;
  background: yellow;
  border-bottom: 1px solid black;
`;

const Inform = styled.div`
  background: green;
`;

const NameTag = styled.div`
  background: orange;
  margin-right: 20px;
  width: 70px;
`;

const Button = styled.button`
  border: none;
  background: white;
  cursor: pointer;
  font-size: 15px;
  padding: 5px;
  margin: 5px;

  &:focus {
    background: purple;
  }
`;

const ButtonBox = styled.div`
  background: orange;
  margin-top: 20px;
`;

const ListBox = styled.div`
  background: gray;
  height: 600px;
`;

const BoardBox = styled.div`
  background: red;
`;
const ReplyBox = styled.div`
  background: skyblue;
`;
const WishListBox = styled.div`
  background: yellow;
`;
const SchedulerBox = styled.div`
  background: green;
`;

const Item = styled.div`
  background: none;
  border-bottom: 1px solid black;
`;

const ProfileComp = ({
  user,
  modal,
  boardType,
  boardList,
  replyList,
  wishList,
  schedulerList,
  changePhoto,
  onModify,
  onWithdraw,
  getBoardList,
  getReplyList,
  getWishList,
  getScheduler,
}) => {
  return (
    <>
      <ProfileBlock>
        <ImageBox onClick={changePhoto} />
        <UserInformBox>
          <UserInform>
            <NameTag>아이디</NameTag>
            <Inform>jaeho714@1234.1234</Inform>
          </UserInform>
          <UserInform>
            <NameTag>닉네임</NameTag>
            <Inform>ddddd</Inform>
          </UserInform>
          <UserInform>
            <NameTag>전화번호</NameTag>
            <Inform>010-1234-1234</Inform>
          </UserInform>
          <UserInform>
            <NameTag>주소</NameTag>
            <Inform>서울특별시 관악산로 12길 33번지</Inform>
          </UserInform>
          <UserInform>
            <NameTag>성별</NameTag>
            <Inform>남자</Inform>
          </UserInform>
        </UserInformBox>
        <div>
          <Button onClick={onModify}>정보수정</Button>
          <Button onClick={onWithdraw}>회원탈퇴</Button>
        </div>
      </ProfileBlock>
      <ButtonBox>
        <Button onClick={getBoardList}>게시물</Button>
        <Button onClick={getReplyList}>댓글</Button>
        <Button onClick={getWishList}>좋아요</Button>
        <Button onClick={getScheduler}>Scheduler</Button>
      </ButtonBox>
      <ListBox>
        {boardType === "BOARD" ? (
          <BoardBox>
            {boardList.map((board) => (
              <Item key={board}>{board}</Item>
            ))}
          </BoardBox>
        ) : boardType === "REPLY" ? (
          <ReplyBox>
            {replyList.map((reply) => (
              <Item key={reply}>{reply}</Item>
            ))}
          </ReplyBox>
        ) : boardType === "WISHLIST" ? (
          <WishListBox>
            {wishList.map((wish) => (
              <Item key={wish}>{wish}</Item>
            ))}
          </WishListBox>
        ) : boardType === "SCHEDULER" ? (
          <SchedulerBox>
            {schedulerList.map((schedule) => (
              <Item key={schedule}>{schedule}</Item>
            ))}
          </SchedulerBox>
        ) : (
          <BoardBox>
            {boardList.map((board) => (
              <Item key={board}>{board}</Item>
            ))}
          </BoardBox>
        )}
      </ListBox>
    </>
  );
};

export default ProfileComp;
