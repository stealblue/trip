import styled from "styled-components";
import ButtonComp from "../../common/ButtonComp";

const ButtonsBlock = styled.div`
  text-align: right;
  margin-top: 50px;
`;

const Buttons = styled(ButtonComp)`
  /* background: #333; */
  /* color: #fff; */
  & + & {
    margin-left: 10px;
  }
`;

const WriteActionbuttonsComp = ({ onCancel, onPublish }) => {
  return (
    <ButtonsBlock>
      <Buttons onClick={onPublish}>등록</Buttons>
      <Buttons onClick={onCancel}>취소</Buttons>
    </ButtonsBlock>
  );
};

export default WriteActionbuttonsComp;
