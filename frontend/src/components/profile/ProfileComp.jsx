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

const BoardInfo = styled.div`
  background: gray;
  display: flex;
  cursor: pointer;
`;

const Detail = styled.div`
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
  justify-content: space-between;
`;

const ProfileComp = ({
  user,
  modal,
  boardType,
  boardList,
  totalBoard,
  replyList,
  totalReply,
  likeList,
  totalLike,
  wishList,
  changePhoto,
  onModify,
  onWithdraw,
  onGetBoardList,
  onGetBoardDetail,
  onDeleteBoard,
  onGetReplyList,
  onGetReplyDetail,
  onDeleteReply,
  onGetLikeList,
  onGetLikeDetail,
  onDeleteLike,
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
                <Detail>{user.id}</Detail>
              </UserInform>
              <UserInform>
                <NameTag>닉네임</NameTag>
                <Detail>{user.nick}</Detail>
              </UserInform>
              <UserInform>
                <NameTag>전화번호</NameTag>
                <Detail>{user.phone}</Detail>
              </UserInform>
              <UserInform>
                <NameTag>주소</NameTag>
                <Detail>{user.addr1 + user.addr2}</Detail>
              </UserInform>
              <UserInform>
                <NameTag>성별</NameTag>
                <Detail>{user.gender === "0" ? "남자" : "여자"}</Detail>
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
        <SelectButton onClick={onGetReplyList}>
          댓글 ({totalReply})
        </SelectButton>
        <SelectButton onClick={onGetLikeList}>
          좋아요 ({totalLike})
        </SelectButton>
        <SelectButton onClick={onGetWishList}>wishList</SelectButton>
      </ButtonBox>
      <ListBox>
        {boardType === "BOARD" ? (
          <BoardBox>
            {boardList?.map((board) => (
              <Item key={board.no}>
                <BoardInfo onClick={() => onGetBoardDetail(board.no)}>
                  <Detail>{board.title}</Detail>
                  <Detail>{board.id}</Detail>
                  <Detail>{board.content}</Detail>
                  <Detail>좋아요아이콘{board.like}</Detail>
                  <Detail>눈아이콘{board.cnt}</Detail>
                </BoardInfo>
                <Button onClick={() => onDeleteBoard(board.no)}>삭제</Button>
              </Item>
            ))}
          </BoardBox>
        ) : boardType === "REPLY" ? (
          <ReplyBox>
            {replyList.map((reply) => (
              <Item key={reply.no}>
                <BoardInfo onClick={() => onGetReplyDetail(reply.bno)}>
                  <Detail>{reply.id}</Detail>
                  <Detail>{reply.content}</Detail>
                  <Detail>{reply.createAt.substr(0, 10)}</Detail>
                </BoardInfo>
                <Button onClick={() => onDeleteReply(reply.no)}>삭제</Button>
              </Item>
            ))}
          </ReplyBox>
        ) : boardType === "LIKELIST" ? (
          <WishListBox>
            {likeList.map((like) => (
              <Item key={like.no}>
                <BoardInfo onClick={() => onGetLikeDetail(like.bno)}>
                  <Detail>제목</Detail>
                  <Detail>내용</Detail>
                </BoardInfo>
                <Button onClick={() => onDeleteLike(like.no)}>
                  좋아요버튼
                </Button>
              </Item>
            ))}
          </WishListBox>
        ) : boardType === "WISHLIST" ? (
          <SchedulerBox>
            {wishList.map((wish) => (
              <Item key={wish.id}>{wish}</Item>
            ))}
          </SchedulerBox>
        ) : (
          ""
          // <BoardBox> 이부분 같은 key 공유한다고 에러뜸 해결해야함.
          //   {boardList.map((board) => (
          //     <Item key={board.index}>{board}</Item>
          //   ))}
          // </BoardBox>
        )}
      </ListBox>
    </>
  );
};

export default ProfileComp;
