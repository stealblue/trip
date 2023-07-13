import { styled } from "styled-components";
import Modal from "styled-react-modal";
import ThemeComp from "../common/ThemeComp";
import { Link } from "react-router-dom";

const LoginPageContainer = styled.div`
  display: flex;
`;

const LoginLeftPic = styled.div`
  width: 50%;
  height: 100vh;
  background: url("/assets/mainslide2.jpeg");
  background-position: center;
  object-fit: cover;
`;

const LoginWrapper = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  background: #333;
  position: relative;

  .home {
    position: absolute;
    left: 30px;
    top: 20px;
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    margin: 0 auto;
  }

  .logo {
    color: #fff;
    text-align: center;
    margin-top: 200px;
    font-size: 50px;
  }

  .logintext {
    margin: 34px 0;
    font-size: 20px;
    color: #fff;
    border-bottom: 2px solid ${ThemeComp.bgcolor};
    padding: 6px 0;
    display: inline-block;
    text-align: center;
  }

  .input {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .label {
      width: 80px;
      /* background: #fff; */
      text-align: right;
      color: #fff;
    }
  }

  .login-btn {
    width: 100%;
    padding: 17px 20px;
    background: ${ThemeComp.bgcolor};
    cursor: pointer;
    border-radius: 40px;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    margin: 20px 0;
  }

  .login-btn:hover {
    background: ${ThemeComp.green};
  }

  .find {
    color: ${ThemeComp.smoke};
    margin-left: 10px;
    cursor: pointer;
  }

  .find:hover {
    opacity: 0.8;
  }
`;

const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 10px;
  padding: 17px;
  border-radius: 40px;
  margin-left: 20px;
  width: 100%;
`;

const ErrorText = styled.p`
  color: #fff;
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

const LoginComp = ({ error, onChange, onSubmit, changeInform, searchName, findId, onFindId, onFindPwd, modal, switchModal }) => {
  return (
    <LoginPageContainer>
      <LoginLeftPic />
      <LoginWrapper>
        <Link to="/">
          <div className="home">홈페이지 돌아가기 버튼</div>
        </Link>

        <h2 className="logo">TRIPPER MAKER</h2>
        <div className="logintext">LOGIN</div>
        <form onSubmit={onSubmit}>
          <div className="input">
            <div className="label">이메일</div>
            <LoginInput placeholder="E-MAIL" name="id" type="text" onChange={onChange} />
          </div>
          <div className="input">
            <div className="label">비밀번호</div>
            <LoginInput placeholder="비밀번호" name="pwd" type="password" onChange={onChange} />
          </div>
          {error && <ErrorText>{error}</ErrorText>}
          <button className="login-btn">LOGIN</button>
        </form>
        <span onClick={changeInform} name="id" className="find">
          ID 찾기
        </span>
        <span className="find">{"/"}</span>
        <span onClick={changeInform} name="pwd" className="find">
          PW 찾기
        </span>
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
      </LoginWrapper>
    </LoginPageContainer>
  );
};

export default LoginComp;
