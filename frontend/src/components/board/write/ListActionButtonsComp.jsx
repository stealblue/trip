import { styled } from "styled-components";

const ListActionButtonsComp = ({ onEdit }) => {
  return (
    <div>
      <button onClick={onEdit}>수정</button>
      <button>삭제</button>
    </div>
  );
};

export default ListActionButtonsComp;
