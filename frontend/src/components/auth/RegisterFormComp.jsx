import { css, styled } from "styled-components";

const RegisterFormBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 27px;
  margin-top: 10px;
  padding-left: 10px;
`;

const SubIdInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 27px;
  margin-top: 10px;
  padding-left: 10px;

  ${(props) =>
    props.disabled &&
    css`
      background: gray;
      disabled
    `}
`;

const SelectDomain = styled.select`
  border: none;
  border-bottom: 1px solid black;
`;

const NameTag = styled.div`
  display: flex;
  align-items: start;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  margin-top: 10px;
`;

const ConfirmMessage = styled.div`
  background: skyblue;
  font-size: 15px;
  height: 20px;
  ${(props) =>
    props.authok &&
    css`
      background: #92b8b1;
      color: green;
    `}
  ${(props) =>
    props.autherror &&
    css`
      background: pink;
      color: red;
    `}
`;

const items = [
  "아이디",
  "비밀번호",
  "비밀번호 확인",
  "닉네임",
  "전화번호",
  "주소",
  "상세주소",
  "우편번호",
  "성별",
];

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
}) => {
  return (
    <>
      <RegisterFormBlock>
        <div>
          {items.map((item) => (
            <NameTag key={item}>{item}</NameTag>
          ))}
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <RegisterInput
              placeholder="E-MAIL"
              name="id"
              type="text"
              onChange={onChange}
            />
            @
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
                  이미 사용중인 닉네임입니다.
                </ConfirmMessage>
              ) : (
                <ConfirmMessage authok="true">
                  사용가능한 닉네임입니다.
                </ConfirmMessage>
              )}
            </ConfirmMessage>
          </div>
          <RegisterInput
            placeholder="비밀번호"
            name="pwd"
            type="password"
            onChange={onChange}
          />
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
          <RegisterInput
            placeholder="'-' 없이 입력하세요."
            name="phone"
            type="text"
            onChange={onChange}
          />
          <button name="phoneChk" onClick={onCheck}>
            인증번호 받기
          </button>
          <input
            placeholder="인증번호를 입력해주세요"
            name="authNum"
            onChange={onCheck}
          />
          <button name="phoneAuthChk" onClick={onCheck}>
            인증확인
          </button>
          <ConfirmMessage>
            이미 가입된 번호입니다.//인증 유효시간 60초
          </ConfirmMessage>
          <RegisterInput
            placeholder="주소"
            name="addr1"
            type="text"
            onChange={onChange}
          />
          <RegisterInput
            placeholder="상세주소"
            name="addr2"
            type="text"
            onChange={onChange}
          />
          <input placeholder="우편번호" name="zipcode" onChange={onChange} />
          <input type="radio" name="gender" value="0" onChange={onChange} />
          남자
          <input type="radio" name="gender" value="1" onChange={onChange} />
          여자
          <div>
            <button>가입하기</button>
          </div>
        </form>
      </RegisterFormBlock>
    </>
  );
};

export default RegisterFormComp;
