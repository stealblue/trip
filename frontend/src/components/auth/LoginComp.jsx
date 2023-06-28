import { styled } from "styled-components";

const LoginInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    padding-left: 10px;
`;

const LoginComp = ({form, onChange, onSubmit}) => {
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
            </form>
        </>
    );
}

export default LoginComp;