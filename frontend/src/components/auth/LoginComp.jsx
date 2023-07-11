import { styled } from "styled-components";
import Modal from "styled-react-modal";

const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 10px;
`;

const ErrorText = styled.h2`
  color: red;
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

const LoginComp = ({
  error,
  onChange,
  onSubmit,
  changeInform,
  searchName,
  findId,
  onFindId,
  onFindPwd,
  modal,
  switchModal,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        로그인
        <LoginInput
          placeholder="E-MAIL"
          name="id"
          type="text"
          onChange={onChange}
        />
        비밀번호
        <LoginInput
          placeholder="비밀번호"
          name="pwd"
          type="password"
          onChange={onChange}
        />
        <button>로그인</button>
        {error && <ErrorText>{error}</ErrorText>}
      </form>
      <button onClick={changeInform} name="id">
        ID 찾기
      </button>
      <button onClick={changeInform} name="pwd">
        PW 찾기
      </button>
      <StyledModal
        isOpen={modal} //true = 열림 / false = 닫힘
        ariahideapp={"false"} //에러 안뜨게하기
        onEscapeKeydown={changeInform} //esc키 눌렀을경우 함수 실행
        onBackgroundClick={changeInform} //esc키 or 오버레이부분 클릭시 함수 실행
      >
        {searchName}찾기
        {searchName === "id" ? (
          <div>
            전화번호
            <input name="phone" onChange={onChange} />
            <button onClick={onFindId}>{searchName}찾기</button>
            <StyledModal
              isOpen={findId} //true = 열림 / false = 닫힘
              ariahideapp={"false"} //에러 안뜨게하기
              onEscapeKeydown={changeInform} //esc키 눌렀을경우 함수 실행
              onBackgroundClick={changeInform} //esc키 or 오버레이부분 클릭시 함수 실행
            >
              <h1>찾으시는 아이디는 {findId} 입니다.</h1>
              <button onClick={switchModal}>확인</button>
            </StyledModal>
          </div>
        ) : (
          <div>
            이메일
            <input name="email" onChange={onChange} />
            전화번호
            <input name="phone" onChange={onChange} />
            <button onClick={onFindPwd}>{searchName}찾기</button>
            <button onClick={switchModal}>확인</button>
          </div>
        )}
      </StyledModal>
    </>
  );
};

export default LoginComp;
