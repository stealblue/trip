import { styled } from "styled-components";
import { useState, useCallback } from "react";
import AskRemoveModalComp from "../remove/AskRemoveModalComp";

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
      <div>
        <button onClick={onEdit}>수정</button>
        <button onClick={onRemoveClick}>삭제</button>
      </div>
      <AskRemoveModalComp visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
};

export default ListActionButtonsComp;
