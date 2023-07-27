import { useState } from "react";
import { styled } from "styled-components";
import Modal from "styled-react-modal";
import ThemeComp from "../common/ThemeComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import PaginationComp from "../common/PaginationComp";
import { Container } from "../../containers/profile/Container";
import { makeCreatedAt } from "../../lib/makeCreatedAt";

const StyledModal = Modal.styled`
  background: white;
  height: 450px;
  width: 500px;
  border-radius: 10px;
  padding: 15px;
  overflow: auto;

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
  height: 28px;
  padding: 0 10px;
  border-radius: 14px;
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
    width: 40%;
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

  @media (max-width: 1200px) {
  }
`;

const BoardInfo = styled.ul`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  text-align: center;
  line-height: 50px;

  li:first-child {
    width: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    cursor: pointer;

    &:hover {
      font-weight: 800;
    }
  }
  /* li:nth-child(2) {
    width: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } */
  li:nth-child(3) {
    width: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  li:nth-child(4) {
    width: 10%;
  }
  li:nth-child(5) {
    width: 10%;
  }

  @media (max-width: 1200px) {
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
  color: ${ThemeComp.red};
  margin-left: 100px;
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
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  justify-content: space-around;
`;

const SchedulerBox = styled.div`
  background: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 70%;
  height: 50px;
  margin: 7px;

  &:hover {
    cursor: pointer;
    background: pink;
    opacity: 0.8;
  }
`;

const ScheduleTitle = styled.span`
  font-weight: 700;
`;

const ScheduleButton = styled.div`
  cursor: pointer;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  width: 30px;
  height: 30px;
  font-weight: 800;

  &:hover {
    background: pink;
    opacity: 0.8;
  }
`;

const WishListBox = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
  height: 600px;
  overflow: auto;
`;

const BeforeBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  background: white;
  width: 30%;
  height: 600px;
  overflow: auto;
`;

const BeforeInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

const AfterBox = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 10px;
  flex-direction: column;
  background: white;
  width: 30%;
  height: 600px;
  overflow: auto;
`;

const Item = styled.div`
  display: flex;
  background: none;
  justify-content: space-around;
  align-items: center;
`;

const SavedList = styled.div`
  display: flex;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  margin: 7px;
  font-weight: 700;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  &:hover {
    background: pink;
    opacity: 0.7;
  }
`;

const SavedListBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
`;

const SavedListDetailBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ShceduleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 70%;
  height: 30px;
  margin: 10px 0;
`;

const SavedButton = styled.div`
  background: none;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  font-weight: 800;
  text-align: center;

  &:hover {
    background: pink;
    opacity: 0.8;
  }
`;

const SheduleTitleBox = styled.div`
  color: blue;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
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
  addScheduleError,
  cards,
  moveCard,
  subjectRef,
  savedList,
  onGetSavedListDetail,
  savedListDetail,
  listModal,
  setListModal,
  onChangeProfileCancle,
  onSavedListDelete,
  contentImgFilter,
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
                <InputBox placeholder={"닉네임"} onChange={onChange} />
                <Button onClick={onNickCheck}>중복확인</Button>
                <div>
                  {nickError ? (
                    <ErrorMessage>이미 존재하는 닉네임입니다.</ErrorMessage>
                  ) : nickAuth ? (
                    <ErrorMessage>사용가능한 아이디 입니다.</ErrorMessage>
                  ) : (
                    ""
                  )}
                </div>
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
              {/* <li className="content">내용</li> */}
              <li>작성일자</li>
              <li>좋아요</li>
              <li>조회수</li>
              <li></li>
            </BoardListTitle>
            {boardList?.map((board) => (
              <Item key={board.no}>
                <BoardInfo>
                  <li onClick={() => onGetBoardDetail(board.no)}>
                    {board.title}
                  </li>
                  {/* <li
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: contentImgFilter(board.content),
                    }}></li> */}
                  <li>{makeCreatedAt(board.createAt)}</li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                    <span> {board.like}</span>
                  </li>
                  <li>
                    <FontAwesomeIcon className="icon" icon={faEye} />
                    <span> {board.cnt}</span>
                  </li>

                  <li>
                    <Button onClick={() => onDeleteBoard(board.no)}>
                      삭제
                    </Button>
                  </li>
                  <li></li>
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
                    {reply.nick}
                  </li>
                  <li onClick={() => onGetReplyDetail(reply.bno)}>
                    {reply.uno_user.id}
                  </li>
                  <li>{reply.content}</li>
                  <li>{makeCreatedAt(reply.createAt)}</li>
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
              <li>좋아요</li>
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
                  <SchedulerBox
                    onClick={() =>
                      onGetWishDetail(
                        Wish.title,
                        Wish.contentId,
                        Wish.contentTypeId
                      )
                    }
                  >
                    <ScheduleTitle key={Wish.no}>{Wish.title}</ScheduleTitle>
                  </SchedulerBox>
                  <ScheduleButton
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
                  </ScheduleButton>
                  <ScheduleButton onClick={() => onDeleteWish(Wish.no)}>
                    x
                  </ScheduleButton>
                </Item>
              ))}
              <StyledModal
                isOpen={modal} //true = 열림 / false = 닫힘
                ariahideapp={"false"} //에러 안뜨게하기
                onEscapeKeydown={onGetWishDetail} //esc키 눌렀을경우 함수 실행
                onBackgroundClick={onGetWishDetail} //esc키 or 오버레이부분 클릭시 함수 실행
              >
                {wish?.data?.contenttypeid === "32" ? (
                  <>
                    <div>{wish?.title}</div>
                    <div>
                      보유 룸 갯수 :
                      {wish?.data?.roomcount ? wish.data.roomcount : "-"}
                    </div>
                    <div>
                      룸 타입 :{wish?.data?.roomtype ? wish.data.roomtype : "-"}
                    </div>
                    <div>
                      체크인 :
                      {wish?.data?.checkintime ? wish.data.checkintime : "-"}
                    </div>
                    <div>
                      체크아웃 :
                      {wish?.data?.checkouttime ? wish.data.checkouttime : "-"}
                    </div>
                    <div>
                      취사 가능여부 :
                      {wish?.data?.chkcooking ? wish.data.chkcooking : "-"}
                    </div>
                    <div>
                      이용시설 :
                      {wish?.data?.foodplace ? wish.data.foodplace : "-"}
                    </div>
                    <div>
                      전화번호 :
                      {wish?.data?.infocenterlodging
                        ? wish.data.infocenterlodging
                        : "-"}
                    </div>
                    <div>
                      주차 가능여부 :
                      {wish?.data?.parkinglodging
                        ? wish.data.parkinglodging
                        : "-"}
                    </div>
                    <div>
                      숙박 예약 :
                      {wish?.data?.reservationlodging
                        ? wish.data.reservationlodging
                        : "-"}
                    </div>
                    <div>
                      건물 이용 범위 :
                      {wish?.data?.scalelodging ? wish.data.scalelodging : "-"}
                    </div>
                    {wish?.data?.reservationurl ? (
                      <div>
                        홈페이지 링크 :
                        <div
                          dangerouslySetInnerHTML={{
                            __html: wish.data.reservationurl,
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div>홈페이지 링크 : -</div>
                    )}
                  </>
                ) : (
                  <>
                    <div>{wish?.title}</div>
                    <div>
                      전화번호 :
                      {wish?.data?.infocenter ? wish.data.infocenter : "-"}
                    </div>
                    <div>
                      휴일 :{wish?.data?.restdate ? wish.data.restdate : "-"}
                    </div>
                    <div>
                      컨텐츠 :{wish?.data?.expguide ? wish.data.expguide : "-"}
                    </div>
                    {wish?.data?.usetime ? (
                      <div>
                        이용시간 :
                        <div
                          dangerouslySetInnerHTML={{
                            __html: wish.data.usetime,
                          }}
                        ></div>
                      </div>
                    ) : (
                      <div>이용시간 : -</div>
                    )}
                    <div>
                      주차 가능여부 :
                      {wish?.data?.parking ? wish.data.parking : "-"}
                    </div>
                    <div>
                      반려동물 동반여부 :
                      {wish?.data?.chkpet ? wish.data.chkpet : "-"}
                    </div>
                    <div>
                      신용카드 이용 :
                      {wish?.data?.chkcreditcard
                        ? wish.data.chkcreditcard
                        : "-"}
                    </div>
                  </>
                )}

                <button onClick={onGetWishDetail}>x</button>
              </StyledModal>
            </WishListBox>
            <BeforeBox>
              <BeforeInputBox>
                <InputBox
                  type="text"
                  ref={subjectRef}
                  placeholder="한글 2~10자"
                />
                <Button onClick={onSaveScheduleList}>저장</Button>
              </BeforeInputBox>
              {cards ? <Container cards={cards} moveCard={moveCard} /> : null}
            </BeforeBox>
            <AfterBox>
              {savedList?.map((list) => (
                <SavedListBox key={list._id}>
                  <SavedList
                    onClick={() =>
                      onGetSavedListDetail(
                        list.name[0].id,
                        list.name[0].subject
                      )
                    }
                  >
                    {list.name[0].subject}
                  </SavedList>
                  <SavedButton onClick={() => onSavedListDelete(list._id)}>
                    x
                  </SavedButton>
                </SavedListBox>
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
                <SavedListDetailBox>
                  {savedListDetail?.name[0].scheduleList.map((detail) => (
                    <ShceduleBox key={detail.items[0].contentId}>
                      {detail.items[0].title}
                    </ShceduleBox>
                  ))}
                </SavedListDetailBox>
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
