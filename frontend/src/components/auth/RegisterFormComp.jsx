import { styled } from "styled-components";
import ThemeComp from "../common/ThemeComp";

const RegisterFormBlock = styled.div`
  display: flex;
  jsutify-content: center;
`;

const RegisterInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 27px;
  margin-top: 10px;
  padding-left: 10px;
`;
const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 27px;
  margin-top: 10px;
  padding-left: 10px;
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

const RegisterFormComp = ({ onChange, onSubmit }) => {
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
            <select name="selectEmail">
              <option value="directInput">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
            </select>
            <button>중복확인</button>
            <ConfirmMessage>이미 가입된 이메일 입니다.</ConfirmMessage>
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
          />
          <ConfirmMessage>비밀번호를 다시 확인해주세요.</ConfirmMessage>
          <RegisterInput
            placeholder="닉네임"
            name="nick"
            type="text"
            onChange={onChange}
          />
          <button>중복확인</button>
          <ConfirmMessage>이미 존재하는 닉네임입니다.</ConfirmMessage>
          <RegisterInput
            placeholder="010-0000-0000"
            name="phone"
            type="text"
            onChange={onChange}
          />
          <button>인증번호 받기</button>
          <input placeholder="인증번호를 입력해주세요" />
          <button>인증확인</button>
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
          <input type="radio" name="gender" value="0" />
          남자
          <input type="radio" name="gender" value="1" />
          여자
        </form>
      </RegisterFormBlock>
    </>
  );
};

// const RegisterFormComp = ({ onChange, onSubmit }) => {
//   return (
//     <>
//       <div>
//         {items.map((item) => (
//           <NameTag key={item}>{item}</NameTag>
//         ))}
//       </div>
//       <form onSubmit={onSubmit}>
//         <div>
//           <LoginInput placeholder="E-MAIL" name="id" autoComplete="on" type="text" onChange={onChange} />@
//           <select name="selectEmail">
//             <option value="directInput">직접입력</option>
//             <option value="gmail.com">gmail.com</option>
//             <option value="naver.com">naver.com</option>
//             <option value="hanmail.net">hanmail.net</option>
//           </select>
//           <button>중복확인</button>
//           <ConfirmMessage>이미 가입된 이메일 입니다.</ConfirmMessage>
//         </div>
//         <LoginInput placeholder="비밀번호" name="pwd" autoComplete="on" type="password" onChange={onChange} />
//         <LoginInput placeholder="비밀번호 확인" name="pwdConfirm" autoComplete="on" type="password" />
//         <ConfirmMessage>비밀번호를 다시 확인해주세요.</ConfirmMessage>
//         <LoginInput placeholder="닉네임" name="nickname" autoComplete="on" type="text" onChange={onChange} />
//         <button>중복확인</button>
//         <ConfirmMessage>이미 존재하는 닉네임입니다.</ConfirmMessage>
//         <LoginInput placeholder="010-0000-0000" name="phone" autoComplete="on" type="text" onChange={onChange} />
//         <button>인증번호 받기</button>
//         <input placeholder="인증번호를 입력해주세요" />
//         <button>인증확인</button>
//         <ConfirmMessage>이미 가입된 번호입니다.//인증 유효시간 60초</ConfirmMessage>
//         <LoginInput placeholder="주소" name="addr1" type="text" onChange={onChange} />
//         <LoginInput placeholder="상세주소" name="addr2" type="text" onChange={onChange} />
//         <input placeholder="우편번호" name="zipcode" onChange={onChange} />
//         <input type="radio" name="gender" value="0" />
//         남자
//         <input type="radio" name="gender" value="1" />
//         여자
//       </form>
//     </>
//   );
// };

export default RegisterFormComp;
