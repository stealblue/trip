import { css, styled } from "styled-components";
import Modal from "styled-react-modal";
import DaumPostcode from "react-daum-postcode";
import ThemeComp from "../common/ThemeComp";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

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

const DivInModal = styled.div`
  cursor: pointer;
  color: ${ThemeComp.red};
  margin-left: 400px;
  background: none;
  text-align: center;
`;

const RegisterContainer = styled.div`
  background: ${ThemeComp.bgcolor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .home {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .join-text {
    font-size: 20px;
    color: ${ThemeComp.softblack};
    border-bottom: 2px solid ${ThemeComp.softblack};
    padding: 6px 0;
    display: inline-block;
    text-align: center;
    margin-top: 20px;
  }

  .logo {
    color: ${ThemeComp.white};
    text-align: center;
    font-size: 30px;
  }

  button {
    padding: 10px;
    margin: 5px 10px;
    background: ${ThemeComp.lightblack};
    color: ${ThemeComp.white};
    border: none;
    cursor: pointer;
    transition: 0.3s;
    /* color: ${ThemeComp.softblack}; */
    &:hover {
      background: ${ThemeComp.softblack};
    }
    &.join-btn {
      background: ${ThemeComp.bgcolor};
      border: none;
      margin: 0 auto;
      margin-top: 30px;
      padding: 14px 20px;
      font-size: 16px;
      text-align: center;
      display: block;
      background: ${ThemeComp.softblack};
      box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.3);
    }
    &.join-btn:hover {
      background: ${ThemeComp.subcolor};
    }
    &.addr-btn {
      display: inline-block;
      margin-left: 0;
    }
  }

  .gender {
    margin-top: 20px;
    color: ${ThemeComp.softblack};
    input[type="radio"] {
      margin-left: 10px;
      width: 30px;
    }
  }
`;

const RegisterFormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${ThemeComp.white};
  margin-top: 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
  padding: 50px;
  .emailat {
    color: ${ThemeComp.softblack};
    margin-right: 5px;
  }
`;

const RegisterInput = styled.input`
  height: 27px;
  margin-top: 10px;
  padding: 7px 10px;
  /* border-radius: 10px; */
  border: 1px solid ${ThemeComp.lightblack};
  background: ${ThemeComp.white};
  color: ${ThemeComp.softblack};
  margin-right: 5px;
  width: 200px;
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

const SelectDomain = styled.select`
  border: 1px solid ${ThemeComp.softblack};
  padding: 10px 20px;
  background: ${ThemeComp.white};
`;

const NameTag = styled.span`
  width: 100px;
  text-align: right;
  display: inline-block;
  color: ${ThemeComp.softblack};
  font-weight: 500;
  margin-right: 10px;
  /* background: #232345; */
`;

const ConfirmMessage = styled.div`
  /* background: skyblue; */
  width: 600px;
  margin-left: 100px;
  margin-top: 5px;
  font-size: 15px;
  height: 20px;
  ${(props) =>
    props.authok &&
    css`
      color: ${ThemeComp.subcolor};
    `}
  ${(props) =>
    props.autherror &&
    css`
      color: ${ThemeComp.red};
    `}

    &:nth-child(1) {
    margin-left: -0px;
  }

  .count {
    font-weight: 600;
    margin-left: 10px;
  }
`;

const RegisterFormComp = ({
  onChange,
  onSubmit,
  onCheck,
  onIdChk,
  onPwdChk,
  onNickChk,
  changeDomain,
  chooseDomain,
  disabledDomain,
  phoneAuth,
  phoneMsg,
  authNum,
  count,
  openSearchAddress,
  modal,
  onCompletePost,
  addr1,
  address1,
  zipcode1,
}) => {
  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0.6, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <RegisterContainer>
        <Link to="/">
          <div className="home">
            <FontAwesomeIcon icon={faHouse} size="2xl" />
          </div>
        </Link>
        <h2 className="logo">TRIPPER MAKER</h2>
        <div className="join-text">JOIN</div>
        <RegisterFormBlock>
          <div>
            <div>
              <NameTag>이메일</NameTag>
              <RegisterInput
                placeholder="E-MAIL"
                name="id"
                type="text"
                onChange={onChange}
              />
              <span className="emailat">@</span>
              {disabledDomain ? (
                <SubIdInput
                  name="domain"
                  type="text"
                  onChange={onChange}
                  ref={chooseDomain}
                  disabled={true}
                />
              ) : (
                <SubIdInput
                  placeholder="직접입력"
                  name="domain"
                  type="text"
                  onChange={onChange}
                  ref={chooseDomain}
                />
              )}
              <SelectDomain name="SelectDomain" onChange={changeDomain}>
                <option value="directInput">직접입력</option>
                <option value="gmail.com">gmail.com</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
              </SelectDomain>
              <button name="emailChk" onClick={onCheck}>
                중복확인
              </button>
              <ConfirmMessage>
                {onIdChk === "empty" ? (
                  <ConfirmMessage></ConfirmMessage>
                ) : onIdChk === false ? (
                  <ConfirmMessage autherror="true">
                    이미 사용중인 이메일입니다.
                  </ConfirmMessage>
                ) : (
                  <ConfirmMessage authok="true">
                    사용가능한 닉네임입니다.
                  </ConfirmMessage>
                )}
              </ConfirmMessage>
            </div>
            <NameTag>비밀번호</NameTag>
            <RegisterInput
              placeholder="비밀번호"
              name="pwd"
              type="password"
              onChange={onChange}
            />
            <NameTag>비밀번호 확인</NameTag>
            <RegisterInput
              placeholder="비밀번호 확인"
              name="pwdConfirm"
              type="password"
              onChange={onChange}
            />
            {onPwdChk === false ? (
              <ConfirmMessage autherror="true">
                비밀번호를 확인해주세요.
              </ConfirmMessage>
            ) : (
              <ConfirmMessage></ConfirmMessage>
            )}
            <NameTag>닉네임</NameTag>{" "}
            <RegisterInput
              placeholder="닉네임"
              name="nick"
              type="text"
              onChange={onChange}
            />
            <button name="nickChk" onClick={onCheck}>
              중복확인
            </button>
            {onNickChk === "empty" ? (
              <ConfirmMessage></ConfirmMessage>
            ) : onNickChk === false ? (
              <ConfirmMessage autherror="true">
                이미 사용중인 닉네임입니다.
              </ConfirmMessage>
            ) : (
              <ConfirmMessage authok="true">
                사용가능한 닉네임입니다.
              </ConfirmMessage>
            )}
            <NameTag>전화번호</NameTag>
            <RegisterInput
              placeholder="'-' 없이 입력하세요."
              name="phone"
              type="text"
              onChange={onChange}
            />
            <button name="phoneChk" onClick={onCheck}>
              인증번호 받기
            </button>
            {authNum === true ? (
              <SubIdInput name="authNum" onChange={onCheck} disabled={true} />
            ) : (
              <SubIdInput
                placeholder="인증번호를 입력해주세요"
                name="authNum"
                onChange={onCheck}
              />
            )}
            <button name="phoneAuthChk" onClick={onCheck}>
              인증확인
            </button>
            <ConfirmMessage>
              {<span>{phoneMsg}</span>}
              {count === 60 || authNum === true ? (
                ""
              ) : count !== 0 && phoneAuth ? (
                <span className="count">인증 유효시간 {count}초</span>
              ) : (
                ""
              )}
            </ConfirmMessage>
            <NameTag>주소</NameTag>
            <button className="addr-btn" onClick={openSearchAddress}>
              주소찾기
            </button>
            {addr1 ? (
              <span>
                <SubIdInput
                  placeholder="우편번호"
                  name="zipcode"
                  ref={zipcode1}
                  disabled={true}
                />
                <SubIdInput
                  placeholder="주소"
                  name="addr1"
                  type="text"
                  ref={address1}
                  disabled={true}
                />
              </span>
            ) : (
              <span>
                <SubIdInput
                  placeholder="우편번호"
                  name="zipcode"
                  ref={zipcode1}
                />
                <SubIdInput
                  placeholder="주소"
                  name="addr1"
                  type="text"
                  ref={address1}
                />
              </span>
            )}
            <div>
              <NameTag>상세주소</NameTag>{" "}
              <RegisterInput
                placeholder="상세주소"
                name="addr2"
                type="text"
                onChange={onChange}
              />
            </div>
            <div className="gender">
              <NameTag>성별</NameTag>
              <input type="radio" name="gender" value="0" onChange={onChange} />
              남자
              <input type="radio" name="gender" value="1" onChange={onChange} />
              여자
            </div>
            <div>
              <button onClick={onSubmit} className="join-btn">
                가입하기
              </button>
            </div>
          </div>
        </RegisterFormBlock>
      </RegisterContainer>

      <StyledModal
        isOpen={modal} //true = 열림 / false = 닫힘
        ariahideapp={"false"} //에러 안뜨게하기
        onEscapeKeydown={openSearchAddress} //esc키 눌렀을경우 함수 실행
        onBackgroundClick={openSearchAddress} //esc키 or 오버레이부분 클릭시 함수 실행
      >
        <div>
          <div>주소검색</div>
          <DivInModal onClick={openSearchAddress}>X</DivInModal>
        </div>
        <DaumPostcode autoClose onComplete={onCompletePost} />
      </StyledModal>
    </motion.div>
  );
};

export default RegisterFormComp;
