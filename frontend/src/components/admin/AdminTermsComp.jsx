import { css, styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";
import Modal from "styled-react-modal";
import DaumPostcode from "react-daum-postcode";

const StyledModal = Modal.styled`
  background: white;
  height: 80%;
  width: 80%;
  padding: 10px;

  div{
    display: flex;
    justify-content: space-between;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 600px;
`;

const DivInModal = styled.div`
  cursor: pointer;
  color: ${ThemeComp.red};
  margin-left: 400px;
  background: none;
  text-align: center;
`;

const SubIdInput = styled.input`
  height: 27px;
  margin-top: 10px;
  padding: 7px 10px;
  /* border-radius: 10px; */
  border: 1px solid ${ThemeComp.lightblack};
  background: ${ThemeComp.white};
  color: ${ThemeComp.softblack};
  margin-right: 5px;
  width: 200px;

  ${(props) =>
    props.disabled &&
    css`
      background: gray;
      disabled
    `}
`;

const AdminBoardWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
`;

const BoardContainer = styled.div`
  background: ${ThemeComp.smoke};

  &:first-child {
    width: 35%;
    /* height: 100%; */
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

const BoardTag = styled.div`
  display: flex;
  justify-content: space-around;
  background: yellow;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  background: ${ThemeComp.lightblack};
  color: ${ThemeComp.smoke};
  cursor: pointer;
  padding: 7px 12px;
  margin: 10px;

  &:hover {
    background: ${ThemeComp.softblack};
  }
`;

const BoardContent = styled.div`
  background: green;
`;

const ImgInput = styled.input`
  display: none;
`;

const ImageBox = styled.img`
  cursor: pointer;
  height: 150px;
  width: 150px;
  border-radius: 25px;
  border: 1px solid black;
`;

const AdminTermsComp = ({
  admin,
  modal,
  tableType,
  changeType,
  onChangeLogo,
  onUploadLogo,
  onChangeForm,
  onChangeInform,
  changeForm,
  onChange,
  businessNameRef,
  masterNameRef,
  phoneNumberRef,
  addr1,
  address1Ref,
  address2Ref,
  zipcodeRef,
  openModal,
  onCompletePost,
  onOpenTerms,
  onEditTerms,
  changeEditForm,
  termsRef,
}) => {
  return (
    <AdminBoardWrap>
      <BoardContainer>
        <BoardName>
          <span>약관관리</span>
        </BoardName>
        <BoardTag>
          <Button id="LOGO" onClick={changeType}>
            로고변경
          </Button>
          <Button id="INFORM" onClick={changeType}>
            정보변경
          </Button>
          <Button id="TERMS" onClick={changeType}>
            약관관리
          </Button>
        </BoardTag>
        {tableType === "LOGO" && (
          <BoardContent>
            <form encType="multipart/form-data">
              <label>
                {admin?.img ? (
                  <ImageBox src={`/assets/${admin.img}`} alt="img" />
                ) : (
                  <ImageBox src={"/assets/triplogo.png"} alt="img" />
                )}
                <ImgInput type="file" onChange={onUploadLogo} name="img" />
                <Button onClick={onChangeLogo}>로고변경</Button>
              </label>
            </form>
          </BoardContent>
        )}
        {tableType === "INFORM" && (
          <BoardContent>
            {!changeForm ? (
              <>
                <span>
                  상호
                  <div>
                    {admin?.id?.slice(
                      admin?.id?.indexOf("@") + 1,
                      admin?.id?.lastIndexOf(".")
                    )}
                  </div>
                </span>
                <span>
                  주소 <div>{admin?.addr1 + admin?.addr2}</div>
                </span>
                <span>
                  개인정보관리책임자 <div>{admin?.nick}</div>
                </span>
                <span>
                  전화번호
                  <div>{admin?.phone}</div>
                </span>
                <Button onClick={onChangeForm}>수정</Button>
              </>
            ) : (
              <>
                <span>
                  상호
                  <input
                    name="new_id"
                    type="text"
                    ref={businessNameRef}
                    onChange={onChange}
                  />
                </span>
                <span>
                  주소
                  <button onClick={openModal}>주소찾기</button>
                </span>
                {addr1 ? (
                  <span>
                    <SubIdInput
                      placeholder="우편번호"
                      name="new_zipcode"
                      ref={zipcodeRef}
                      disabled={true}
                    />
                    <SubIdInput
                      placeholder="주소"
                      name="new_addr1"
                      type="text"
                      ref={address1Ref}
                      disabled={true}
                    />
                  </span>
                ) : (
                  <span>
                    <SubIdInput
                      placeholder="우편번호"
                      name="new_zipcode"
                      ref={zipcodeRef}
                      disabled={true}
                    />
                    <SubIdInput
                      placeholder="주소"
                      name="new_addr1"
                      type="text"
                      ref={address1Ref}
                      disabled={true}
                    />
                  </span>
                )}
                <div>
                  <span>상세주소</span>
                  <input
                    placeholder="상세주소"
                    name="new_addr2"
                    type="text"
                    ref={address2Ref}
                    onChange={onChange}
                  />
                </div>
                <span>
                  개인정보관리책임자
                  <input
                    name="new_nick"
                    type="text"
                    ref={masterNameRef}
                    onChange={onChange}
                  />
                </span>
                <span>
                  전화번호
                  <input
                    name="new_phone"
                    type="text"
                    ref={phoneNumberRef}
                    onChange={onChange}
                  />
                </span>
                <Button onClick={onChangeInform}>수정완료</Button>
                <Button onClick={onChangeForm}>취소</Button>
              </>
            )}
            <StyledModal
              isOpen={modal} //true = 열림 / false = 닫힘
              ariahideapp={"false"} //에러 안뜨게하기
              onEscapeKeydown={openModal} //esc키 눌렀을경우 함수 실행
              onBackgroundClick={openModal} //esc키 or 오버레이부분 클릭시 함수 실행
            >
              <div>
                <div>주소검색</div>
                <DivInModal onClick={openModal}>X</DivInModal>
              </div>
              <DaumPostcode autoClose onComplete={onCompletePost} />
            </StyledModal>
          </BoardContent>
        )}
        {tableType === "TERMS" && (
          <BoardContent>
            <span>
              이용약관
              <Button onClick={() => onOpenTerms("이용약관")}>수정</Button>
            </span>
            <span>
              개인정보처리방침
              <Button onClick={() => onOpenTerms("개인정보처리방침")}>
                수정
              </Button>
            </span>
            <span>
              이용안내
              <Button onClick={() => onOpenTerms("이용안내")}>수정</Button>
            </span>
            <StyledModal
              isOpen={modal} //true = 열림 / false = 닫힘
              ariahideapp={"false"} //에러 안뜨게하기
              onEscapeKeydown={openModal} //esc키 눌렀을경우 함수 실행
              onBackgroundClick={openModal} //esc키 or 오버레이부분 클릭시 함수 실행
            >
              <div>
                <div>{changeEditForm}</div>
                <DivInModal onClick={openModal}>X</DivInModal>
              </div>
              <StyledTextarea ref={termsRef} />
              <Button onClick={onEditTerms}>수정</Button>
              <Button onClick={openModal}>취소</Button>
            </StyledModal>
          </BoardContent>
        )}
      </BoardContainer>
    </AdminBoardWrap>
  );
};

export default AdminTermsComp;
