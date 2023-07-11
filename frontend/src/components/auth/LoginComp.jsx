import { styled } from "styled-components";

const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 10px;
`;

const ErrorText = styled.h2`
  color: red;
`;

const LoginComp = ({ error, onChange, onSubmit, searchId, searchPwd }) => {
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
        <button onClick={searchId}>ID찾기</button>
        <button onClick={searchPwd}>PW찾기</button>
        <button></button>
      </form>
    </>
  );
};

export default LoginComp;
