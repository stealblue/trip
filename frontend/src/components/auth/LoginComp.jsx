import { styled } from "styled-components";
import Modal from "styled-react-modal";
import ThemeComp from "../common/ThemeComp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LoginPageContainer = styled.div`
  display: flex;
`;

const LoginLeftPic = styled.div`
  width: 45%;
  height: 100vh;
  background: url("/assets/mainslide4.jpeg");
  background-position: center;
  background-size: cover;
  object-fit: cover;
`;

const LoginWrapper = styled.div`
  width: 55%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  background: ${ThemeComp.bgcolor};
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
    color: #555;
    border-bottom: 2px solid #555;
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
      color: #333;
    }
  }

  .login-btn {
    width: 100%;
    padding: 17px 20px;
    /* background: ${ThemeComp.dark}; */
    background: #555;
    cursor: pointer;
    /* border-radius: 40px; */
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    margin: 20px 0;
  }

  .login-btn:hover {
    background: #333;
  }

  .find {
    color: #666;
    margin-left: 10px;
    cursor: pointer;
  }

  .find:hover {
    opacity: 0.8;
  }
`;

const LoginInput = styled.input`
  border: none;
  /* border-bottom: 1px solid black; */
  padding-left: 10px;
  padding: 17px;
  /* border-radius: 40px; */
  margin-left: 20px;
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
`;

const ErrorText = styled.p`
  color: #333;
`;

const StyledModal = Modal.styled`
  background: ${ThemeComp.smoke};
  height: 400px;
  width: 500px;
  text-align :center;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction : column;
  border-radius:20px;
  box-shadow: 2px 3px 3px 3px rgba(0, 0, 0, 0.3);

  div{
    margin-top:10px;
  }

  .label{
    width :56px;
    display:inline-block;
    text-align:right;
    margin-right:10px;
  }

  input{
    padding: 10px;
    width : 200px;
  }

  button{
    padding:10px 17px;
    margin: 10px 8px;
    background: ${ThemeComp.bgcolor};
    border:none;
    font-size:16px;
    border-radius:10px;

    &:hover{
    background: ${ThemeComp.green};
    }

    h5
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
    <motion.div
      key="modal"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <LoginPageContainer>
        <LoginLeftPic />
        <LoginWrapper>
          <Link to="/">
            <div className="home">
              <FontAwesomeIcon icon={faHouse} size="2xl" />
            </div>
          </Link>

          <h2 className="logo">TRIPPER MAKER</h2>
          <div className="logintext">LOGIN</div>
          <form onSubmit={onSubmit}>
            <div className="input">
              <div className="label">이메일</div>
              <LoginInput
                placeholder="E-MAIL"
                name="id"
                type="text"
                onChange={onChange}
              />
            </div>
            <div className="input">
              <div className="label">비밀번호</div>
              <LoginInput
                placeholder="비밀번호"
                name="pwd"
                type="password"
                onChange={onChange}
              />
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
            <h5> {searchName}찾기</h5>
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
                <div>
                  <span className="label">이메일</span>
                  <input name="email" onChange={onChange} />
                </div>
                <div>
                  <span className="label">전화번호</span>
                  <input name="phone" onChange={onChange} />
                </div>
                <div className="find-btn">
                  <button onClick={onFindPwd}>{searchName}찾기</button>
                  <button onClick={switchModal}>확인</button>
                </div>
              </div>
            )}
          </StyledModal>
        </LoginWrapper>
      </LoginPageContainer>
    </motion.div>
  );
};

export default LoginComp;
