import Theme from "../common/Theme";
import { styled } from "styled-components";

const RegisterFormBlock = styled.div`
    display: flex;
    jsutify-content: center;
    background: ${Theme.bgcolor};
`;

const RegisterComponent = ({children}) => {
    return (
        <RegisterFormBlock>
            {children}
        </RegisterFormBlock>
    );
}

export default RegisterComponent;