import styled from "styled-components";
import Button from "../common/Button";

const ButtonsBlock = styled.div`
  text-align: right;
`;

const Buttons = styled(Button)`
  /* background: #333; */
  /* color: #fff; */
  & + & {
    margin-left: 10px;
  }
`;

const WriteActionbutton = ({ onCancel, onPublish }) => {
  return (
    <ButtonsBlock>
      <Buttons onClick={onPublish}>등록</Buttons>
      <Buttons onClick={onCancel}>취소</Buttons>
    </ButtonsBlock>
  );
};

export default WriteActionbutton;
