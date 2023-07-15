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
  margin: 5px;
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
`;

const SelectButton = styled.button`
  border: none;
  background: white;
  cursor: pointer;
  font-size: 15px;
  padding: 5px;
  margin: 5px;

  &:focus {
    background: orange;
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
  display: flex;
  background: none;
  border-bottom: 1px solid black;
`;

const ProfileComp = ({
  user,
  modal,
  boardType,
  boardList,
  totalBoard,
  replyList,
  likeList,
  wishList,
  changePhoto,
  onModify,
  onWithdraw,
  onDelete,
  onGetBoardList,
  onGetReplyList,
  onGetLikeList,
  onGetWishList,
}) => {
  return (
    <>
      <ProfileBlock>
        <ImageBox onClick={changePhoto} />
        <UserInformBox>
          {user && (
            <>
              <UserInform>
                <NameTag>아이디</NameTag>
                <Inform>{user.id}</Inform>
              </UserInform>
              <UserInform>
                <NameTag>닉네임</NameTag>
                <Inform>{user.nick}</Inform>
              </UserInform>
              <UserInform>
                <NameTag>전화번호</NameTag>
                <Inform>{user.phone}</Inform>
              </UserInform>
              <UserInform>
                <NameTag>주소</NameTag>
                <Inform>{user.addr1 + user.addr2}</Inform>
              </UserInform>
              <UserInform>
                <NameTag>성별</NameTag>
                <Inform>{user.gender === "0" ? "남자" : "여자"}</Inform>
              </UserInform>
            </>
          )}
        </UserInformBox>
        <div>
          <Button onClick={onModify}>정보수정</Button>
          <Button onClick={onWithdraw}>회원탈퇴</Button>
        </div>
      </ProfileBlock>
      <ButtonBox>
        <SelectButton onClick={onGetBoardList}>
          게시물 ({totalBoard})
        </SelectButton>
        <SelectButton onClick={onGetReplyList}>댓글</SelectButton>
        <SelectButton onClick={onGetLikeList}>좋아요</SelectButton>
        <SelectButton onClick={onGetWishList}>wishList</SelectButton>
      </ButtonBox>
      <ListBox>
        {boardType === "BOARD" ? (
          <BoardBox>
            {boardList?.map((board) => (
              <Item key={board.no}>
                <Inform>{board.title}</Inform>
                <Inform>{board.id}</Inform>
                <Inform>{board.content}</Inform>
                <Inform>좋아요아이콘{board.like}</Inform>
                <Inform>눈아이콘{board.cnt}</Inform>
                <Button onClick={() => onDelete(board.no)}>삭제</Button>
              </Item>
            ))}
          </BoardBox>
        ) : boardType === "REPLY" ? (
          <ReplyBox>
            {replyList.map((reply) => (
              <Item key={reply}>{reply}</Item>
            ))}
          </ReplyBox>
        ) : boardType === "LIKELIST" ? (
          <WishListBox>
            {likeList.map((like) => (
              <Item key={like}>{like}</Item>
            ))}
          </WishListBox>
        ) : boardType === "WISHLIST" ? (
          <SchedulerBox>
            {wishList.map((wish) => (
              <Item key={wish}>{wish}</Item>
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
