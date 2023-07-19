import { styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ProfileBlock = styled.div`
  display: flex;
  /* background: gray; */
  height: 250px;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;

const ImageBox = styled.img`
  cursor: pointer;
  height: 150px;
  width: 150px;
  border-radius: 25px;
  border: 1px solid black;
`;

const ImgInput = styled.input`
  display: none;
`;

const InputBox = styled.input`
  background: white;
`;

const UserInformBox = styled.div`
  height: 240px;
  margin-left: 30px;
`;

const UserInform = styled.div`
  border-bottom: 1px solid black;
  &:last-child {
    border: none;
  }
`;

const BoardListTitle = styled.li`
  display: flex;
  text-align: center;
  padding: 10px;
  font-weight: 600;
  border-bottom: 1px solid #000;
  li:first-child {
    width: 20%;
  }
  li:nth-child(2) {
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  li:nth-child(3) {
    width: 15%;
  }
  li:nth-child(4),
  li:nth-child(5) {
    width: 5%;
  }
`;

const BoardInfo = styled.ul`
  /* background: gray; */
  cursor: pointer;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  text-align: center;
  li:first-child {
    width: 20%;
  }
  li:nth-child(2) {
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  li:nth-child(3) {
    width: 15%;
  }
  li:nth-child(4),
  li:nth-child(5) {
    width: 5%;
  }

  span {
    margin-left: 10px;
  }
`;

const Detail = styled.div`
  padding: 5px 10px;
  display: inline-block;
`;

const NameTag = styled.span`
  margin-right: 20px;
  width: 70px;
  padding: 0px 10px;
  display: inline-block;
  /* background : ${ThemeComp.bgcolor}; */
  font-weight: 600;
`;

const ErrorMessage = styled.span`
  background: red;
`;

const Button = styled.button`
  border: none;
  background: white;
  cursor: pointer;
  font-size: 14px;
  display: inline-block;
  padding: 7px 15px;
  margin: 10px auto;
  background: ${ThemeComp.bgcolor};
  border: none;
  border-radius: 10px;

  &.change-btn {
    display: block;
    margin: 10px auto;
  }

  &.delete-user-btn {
    margin-left: 10px;
  }
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
  /* background: gray; */
  height: 600px;
`;

const BoardBox = styled.div`
  /* background: red; */
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
  nick,
  nickAuth,
  nickError,
  modal,
  changeInform,
  boardType,
  boardList,
  totalBoard,
  replyList,
  totalReply,
  likeList,
  totalLike,
  wishList,
  onUploadPhoto,
  onChangePhoto,
  onChange,
  onChangeProfile,
  onNickCheck,
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
        <form encType="multipart/form-data">
          <label>
            <ImageBox></ImageBox>
            {user?.img ? <ImageBox src={`/assets/${user.img}`} alt="img" /> : <ImageBox src={"/assets/triplogo.png"} alt="img" />}
            <ImgInput type="file" onChange={onUploadPhoto} name="img" />
          </label>
        </form>
        <UserInformBox>
          {user && !changeInform ? (
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
          ) : user && changeInform ? (
            <>
              <UserInform>
                <NameTag>아이디</NameTag>
                <Detail>{user.id}</Detail>
              </UserInform>
              <UserInform>
                <NameTag>닉네임</NameTag>
                <InputBox placeholder={"ID"} onChange={onChange} />
                <Button onClick={onNickCheck}>중복확인</Button>
              </UserInform>
              {nickError ? <ErrorMessage>이미 존재하는 닉네임입니다.</ErrorMessage> : nickAuth ? <ErrorMessage>사용가능한 아이디 입니다.</ErrorMessage> : ""}
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
          ) : (
            ""
          )}
          <div>
            <Button onClick={onChangeProfile}>정보수정</Button>
            <Button className="delete-user-btn" onClick={onWithdraw}>
              회원탈퇴
            </Button>
          </div>
        </UserInformBox>
      </ProfileBlock>
      <ButtonBox>
        <SelectButton onClick={onGetBoardList}>게시물 ({totalBoard})</SelectButton>
        <SelectButton onClick={onGetReplyList}>댓글 ({totalReply})</SelectButton>
        <SelectButton onClick={onGetLikeList}>좋아요 ({totalLike})</SelectButton>
        <SelectButton onClick={onGetWishList}>wishList</SelectButton>
      </ButtonBox>
      <ListBox>
        {boardType === "BOARD" ? (
          <BoardBox>
            <BoardListTitle>
              <li>제목</li>
              <li>내용</li>
              <li>작성일자</li>
              <li></li>
              <li></li>
            </BoardListTitle>
            {boardList?.map((board) => (
              <Item key={board.no}>
                <BoardInfo onClick={() => onGetBoardDetail(board.no)}>
                  <li className="title">{board.title}</li>
                  <li className="content">{board.content}</li>
                  <li>{board.createAt}</li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <span>{board.like}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faEye} />
                    <span>{board.cnt}</span>
                  </li>

                  <li>
                    <Button onClick={() => onDeleteBoard(board.no)}>삭제</Button>
                  </li>
                </BoardInfo>
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
                  <Detail>{like.bno_board.id}</Detail>
                  <Detail>{like.bno_board.title}</Detail>
                </BoardInfo>
                <Button onClick={() => onDeleteLike(like.no)}>좋아요버튼</Button>
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
        )}
      </ListBox>
    </>
  );
};

export default ProfileComp;
