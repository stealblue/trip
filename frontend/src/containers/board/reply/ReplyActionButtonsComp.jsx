import { styled } from "styled-components";

const ReplyAction = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 13px;

  span {
    margin-right: 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  span:hover {
    opacity: 0.7;
  }
`;

const ReplyActionButtonsComp = ({ onEdit, onRemove, reply }) => {
  return (
    <>
      <ReplyAction>
        <span onClick={onEdit} data-no={reply.no} data-content={reply.content}>
          수정
        </span>
        <span onClick={onRemove}>삭제</span>
      </ReplyAction>
    </>
  );
};

export default ReplyActionButtonsComp;
