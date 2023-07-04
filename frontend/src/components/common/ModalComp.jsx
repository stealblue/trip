import { styled } from "styled-components";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  width: 420px;
  height: 120px;
  background-color: #fff;
  padding: 2%;
  border-radius: 4px;
  border: 1px solid #333;
  h2 {
    margin-bottom: 20px;
  }
`;

const ModalComp = ({ visible, title, description, confirmText = "삭제", cancelText = "취소", onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <ModalBlock>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
          <button onClick={onCancel}>{cancelText}</button>
          <button onClick={onConfirm}>{confirmText}</button>
        </div>
      </ModalBlock>
    </Fullscreen>
  );
};

export default ModalComp;
