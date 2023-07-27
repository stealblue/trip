import { styled } from "styled-components";
import { useState, useCallback } from "react";
import AskRemoveModalComp from "../remove/AskRemoveModalComp";
import ThemeComp from "../../common/ThemeComp";

const ListButtons = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 50px;
`;

const Buttons = styled.button`
  padding: 10px 18px;
  background: #333;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  &:first-child {
    background: ${ThemeComp.bgcolor};
  }
  &:last-child {
    margin-left: 10px;
    color: ${ThemeComp.white};
  }
`;

const ListActionButtonsComp = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };

  return (
    <>
      <ListButtons>
        <Buttons onClick={onEdit}>수정</Buttons>
        <Buttons onClick={onRemoveClick}>삭제</Buttons>
      </ListButtons>
      <AskRemoveModalComp visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
};

export default ListActionButtonsComp;
