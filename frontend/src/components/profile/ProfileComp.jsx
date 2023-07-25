import { useState } from "react";
import { styled } from "styled-components";
import Modal from "styled-react-modal";
import ThemeComp from "../common/ThemeComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import PaginationComp from "../common/PaginationComp";
import { Container } from "../../containers/profile/Container";

const StyledModal = Modal.styled`
  background: white;
  height: 450px;
  width: 500px;

  div{
    display: flex;
    padding: 5px;
    justify-content: space-between;
  }
`;

const ProfileBlock = styled.div`
  display: flex;
  /* background: gray; */
  height: 250px;
  justify-content: center;
  width: 50%;
  margin: 60px auto;
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
  margin-right: 10px;
  width: 150px;
  height: 27px;
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

const BoardListTitle = styled.ul`
  display: flex;
  text-align: center;
  padding: 10px;
  font-weight: 600;
  border-bottom: 1px solid #000;
  li:first-child {
    width: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 2px;
  }
  li:nth-child(2) {
    width: 50%;
    margin: 0 2px;
  }
  li:nth-child(3) {
    width: 15%;
    margin: 0 2px;
  }
  li:nth-child(4) {
    width: 5%;
    margin: 0 4px;
  }
  li:nth-child(5) {
    width: 5%;
    margin: 0 2px;
  }
`;

const BoardInfo = styled.ul`
  /* background: gray; */
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  text-align: center;
  line-height: 50px;
  li:first-child {
    width: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
      font-weight: 800;
    }
  }
  li:nth-child(2) {
    width: 50%;
  }
  li:nth-child(3) {
    width: 15%;
  }
  li:nth-child(4) {
    width: 5%;
  }
  li:nth-child(5) {
    width: 5%;
  }
`;

const ListTitle = styled.ul`
  display: flex;
  text-align: center;
  padding: 10px;
  font-weight: 600;
  border-bottom: 1px solid #000;

  li:first-child {
    width: 22%;
  }
  li:nth-child(2) {
    width: 53.5%;
  }
  li:nth-child(3) {
    width: 16%;
  }
`;

const LikeListTitle = styled.ul`
  display: flex;
  text-align: center;
  padding: 10px;
  font-weight: 600;
  border-bottom: 1px solid #000;

  li:first-child {
    width: 24.5%;
  }
  li:nth-child(2) {
    width: 55%;
  }
  li:nth-child(3) {
    width: 20%;
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
  transition: 0.3s;

  &:hover {
    background: ${ThemeComp.subcolor};
    color: #fff;
  }

  &.change-btn {
    display: block;
    margin: 28px auto;
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
  border: 1px solid ${ThemeComp.softblack};
  padding: 10px 20px;
  transition: 0.3s;

  &:focus {
    background: ${ThemeComp.softblack};
    color: ${ThemeComp.white};
  }

  &:hover {
    background: ${ThemeComp.softblack};
    color: ${ThemeComp.white};
  }
`;

const ButtonBox = styled.div`
  margin-top: 20px;
  margin: 0 auto;
  text-align: center;
`;

const ListBox = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 600px;
  margin-top: 20px;
  background: ${ThemeComp.smoke};
  padding: 50px;
`;

const BoardBox = styled.div`
  /* background: red; */
`;
const ReplyBox = styled.div`
  /* background: skyblue; */
`;

const LikeBox = styled.div`
  /* background: purple; */
`;

const AllScheduleBox = styled.div`
  background: red;
  display: flex;
`;

const SchedulerBox = styled.div`
  background: pink;
  display: flex;
  width: 70%;
`;

const WishListBox = styled.div`
  background: yellow;
  width: 30%;
`;

const BeforeBox = styled.div`
  background: white;
  width: 300px;
`;

const AfterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Item = styled.div`
  display: flex;
  background: none;
  border-bottom: 1px solid black;
  justify-content: space-between;
`;

const SavedListBox = styled.div`
  border: 2px dashed black;
  margin: 2px 0;
`;

const SavedList = styled.div`
  background: white;
  cursor: pointer;
`;

const ShceduleBox = styled.div`
  border: 1px dashed black;
  background: skyblue;
  margin: 4px;
`;

const SheduleTitleBox = styled.div`
  color: green;
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
  totalWish,
  wish,
  wishError,
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
  onGetWishDetail,
  onDeleteWish,
  onAddSchedule,
  scheduleList,
  onSaveScheduleList,
  cards,
  moveCard,
  subjectRef,
  savedList,
  onGetSavedListDetail,
  savedListDetail,
  listModal,
  onChangeProfileCancle,
  onSavedListDelete,
}) => {
  const [limit, setLimit] = useState(7);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <>
      <ProfileBlock>
        <form encType="multipart/form-data">
          <label>
            {user?.img ? (
              <ImageBox src={`/assets/${user.img}`} alt="img" />
            ) : (
              <ImageBox src={"/assets/triplogo.png"} alt="img" />
            )}
            <ImgInput type="file" onChange={onUploadPhoto} name="img" />
            <Button onClick={onChangePhoto} className="change-btn">
              사진변경
            </Button>
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
              {nickError ? (
                <ErrorMessage>이미 존재하는 닉네임입니다.</ErrorMessage>
              ) : nickAuth ? (
                <ErrorMessage>사용가능한 아이디 입니다.</ErrorMessage>
              ) : (
                ""
              )}
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
            {changeInform && (
              <Button
                style={{ marginLeft: "10px" }}
                onClick={onChangeProfileCancle}
              >
                수정취소
              </Button>
            )}
          </div>
        </UserInformBox>
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
        <SelectButton onClick={onGetWishList}>
          wishList ({totalWish})
        </SelectButton>
      </ButtonBox>
      <ListBox>
        {boardType === "BOARD" ? (
          <BoardBox>
            <BoardListTitle>
              <li>제목</li>
              <li>내용</li>
              <li>작성일자</li>
              <li>좋아요</li>
              <li>조회수</li>
            </BoardListTitle>
            {boardList?.map((board) => (
              <Item key={board.no}>
                <BoardInfo>
                  <li onClick={() => onGetBoardDetail(board.no)}>
                    {board.title}
                  </li>
                  <li>{board.content}</li>
                  <li>{board.createAt.substr(0, 10)}</li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <span>{board.like}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faEye} />
                    <span>{board.cnt}</span>
                  </li>

                  <li>
                    <Button onClick={() => onDeleteBoard(board.no)}>
                      삭제
                    </Button>
                  </li>
                </BoardInfo>
              </Item>
            ))}
            <div className="pagin">
              {boardList && (
                <PaginationComp
                  total={boardList.length}
                  limit={limit}
                  page={page}
                  setPage={setPage}
                />
              )}
            </div>
          </BoardBox>
        ) : boardType === "REPLY" ? (
          <ReplyBox>
            <ListTitle>
              <li>이메일</li>
              <li>내용</li>
              <li>작성일자</li>
            </ListTitle>
            {replyList.slice(offset, offset + limit).map((reply) => (
              <Item key={reply.no}>
                <BoardInfo>
                  <li onClick={() => onGetReplyDetail(reply.bno)}>
                    {reply.id}
                  </li>
                  <li>{reply.content}</li>
                  <li>{reply.createAt.substr(0, 10)}</li>
                  <li>
                    <Button onClick={() => onDeleteReply(reply.no)}>
                      삭제
                    </Button>
                  </li>
                </BoardInfo>
              </Item>
            ))}
            <div className="pagin">
              {replyList && (
                <PaginationComp
                  total={replyList.length}
                  limit={limit}
                  page={page}
                  setPage={setPage}
                />
              )}
            </div>
          </ReplyBox>
        ) : boardType === "LIKELIST" ? (
          <LikeBox>
            <LikeListTitle>
              <li>이메일</li>
              <li>글 제목</li>
              <li>좋아요버튼</li>
            </LikeListTitle>
            {likeList.slice(offset, offset + limit).map((like) => (
              <Item key={like.no}>
                <BoardInfo onClick={() => onGetLikeDetail(like.bno)}>
                  <li>{like.bno_board.id}</li>
                  <li>{like.bno_board.title}</li>
                  <li>
                    <Button onClick={() => onDeleteLike(like.no)}>
                      <FontAwesomeIcon className="icon" icon={faHeart} />
                    </Button>
                  </li>
                </BoardInfo>
              </Item>
            ))}
            <div className="pagin">
              {likeList && (
                <PaginationComp
                  total={likeList.length}
                  limit={limit}
                  page={page}
                  setPage={setPage}
                />
              )}
            </div>
          </LikeBox>
        ) : (
          <AllScheduleBox>
            <WishListBox>
              {wishList.map((Wish) => (
                <Item key={Wish.no}>
                  <BoardInfo onClick={() => onGetWishDetail(Wish.contentId)}>
                    {Wish.title}
                  </BoardInfo>
                  <Button
                    onClick={() =>
                      onAddSchedule({
                        id: user.id,
                        contentId: Wish.contentId,
                        title: Wish.title,
                        contentTypeId: Wish.contentTypeId,
                      })
                    }
                  >
                    +
                  </Button>
                  <Button onClick={() => onDeleteWish(Wish.no)}>삭제</Button>
                </Item>
              ))}
              <StyledModal
                isOpen={modal} //true = 열림 / false = 닫힘
                ariahideapp={"false"} //에러 안뜨게하기
                onEscapeKeydown={onGetWishDetail} //esc키 눌렀을경우 함수 실행
                onBackgroundClick={onGetWishDetail} //esc키 or 오버레이부분 클릭시 함수 실행
              >
                <div>{wish?.title ? wish.title : "준비중"}</div>
                <div>{wish?.img ? wish.img : "준비중"}</div>
                <div>{wish?.location ? wish.location : "준비중"}</div>
                <button onClick={onGetWishDetail}>x</button>
              </StyledModal>
            </WishListBox>
            <BeforeBox>
              <div>
                <InputBox type="text" ref={subjectRef} />
                <Button onClick={onSaveScheduleList}>저장</Button>
              </div>
              {cards ? <Container cards={cards} moveCard={moveCard} /> : null}
            </BeforeBox>
            <AfterBox>
              {savedList?.map((list) => (
                <>
                  <SavedListBox>
                    <SavedList
                      key={list._id}
                      onClick={() =>
                        onGetSavedListDetail(
                          list.name[0].id,
                          list.name[0].subject
                        )
                      }
                    >
                      {list.name[0].subject}
                    </SavedList>
                    <Button onClick={() => onSavedListDelete(list._id)}>
                      x
                    </Button>
                  </SavedListBox>
                </>
              ))}
              <StyledModal
                isOpen={listModal} //true = 열림 / false = 닫힘
                ariahideapp={"false"} //에러 안뜨게하기
                onEscapeKeydown={onGetSavedListDetail} //esc키 눌렀을경우 함수 실행
                onBackgroundClick={onGetSavedListDetail} //esc키 or 오버레이부분 클릭시 함수 실행
              >
                <SheduleTitleBox>
                  {savedListDetail?.name[0].subject}
                </SheduleTitleBox>
                {savedListDetail?.name[0].scheduleList.map((detail) => (
                  <ShceduleBox key={detail.items[0].contentId}>
                    {detail.items[0].title}
                  </ShceduleBox>
                ))}
                <Button onClick={onGetSavedListDetail}>닫기</Button>
              </StyledModal>
            </AfterBox>
          </AllScheduleBox>
        )}
      </ListBox>
    </>
  );
};

export default ProfileComp;
