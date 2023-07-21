import { styled } from "styled-components";
import Modal from "styled-react-modal";
import ThemeComp from "../common/ThemeComp";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

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
    color: ${ThemeComp.white};
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
    text-align: center;
    margin-top: 20px;
    img {
      width: 250px;
    }
  }

  .logintext {
    margin: 24px 0;
    font-size: 20px;
    color: ${ThemeComp.lightblack};
    border-bottom: 2px solid ${ThemeComp.lightblack};
    padding: 6px 0;
    display: inline-block;
    text-align: center;
  }

  .input {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .label {
      width: 100px;
      text-align: right;
      color: ${ThemeComp.softblack};
    }
  }

  .login-btn {
    width: 100%;
    padding: 17px 20px;
    background: ${ThemeComp.lightblack};
    cursor: pointer;
    border: none;
    color: ${ThemeComp.white};
    font-weight: 600;
    font-size: 18px;
    margin: 20px 0;
  }

  .login-btn:hover {
    background: ${ThemeComp.softblack};
  }

  .find {
    color: ${ThemeComp.lightblack};
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
  background: ${ThemeComp.white};
  border: 2px solid ${ThemeComp.white};
`;

const ErrorText = styled.p`
  color: ${ThemeComp.red};
`;

const StyledModal = Modal.styled`
  background: ${ThemeComp.smoke};
  height: 300px;
  width: 500px;
  text-align :center;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction : column;
  border-radius:20px;
  box-shadow: 2px 3px 3px 3px rgba(0, 0, 0, 0.3);
  position : relative;


  div{
    margin-top:10px;
  }

  .label{
    width :60px;
    display:inline-block;
    text-align:right;
    margin-right:10px;
  }

  input{
    padding: 10px;
    width : 200px;
    margin-left : 10px;
  }

  button{
    padding:10px 17px;
    margin: 10px 8px;
    background: ${ThemeComp.bgcolor};
    border:none;
    font-size:16px;
    border-radius:10px;
    cursor:pointer;
    transition : .3s;

    &:hover{
    background: ${ThemeComp.subcolor};
    color : ${ThemeComp.white};
    }
  }
  p{
    font-size:20px;
  }
  p span{
    font-size : 24px;
    font-weight : 600;
  }
`;

const LoginComp = ({ error, onChange, onSubmit, changeInform, searchName, findId, onFindId, onFindPwd, modal, switchModal }) => {
  return (
    <motion.div key="modal" initial={{ opacity: 0.6, scale: 1.3 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <LoginPageContainer>
        <LoginLeftPic />
        <LoginWrapper>
          <Link to="/">
            <div className="home">
              <FontAwesomeIcon icon={faHouse} size="2xl" />
            </div>
          </Link>

          <h2 className="logo">
            <img src="/assets/triplogo.png" alt="" />
          </h2>
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
            <h3> {searchName} 찾기</h3>
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
                  <div>
                    <p>찾으시는 아이디는</p>
                    <p>
                      <span>{findId}</span>입니다.
                    </p>
                  </div>
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
