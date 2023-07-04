import ModalComp from "../../common/ModalComp";

const AskRemoveModalComp = ({ visible, onConfirm, onCancel }) => {
  return <ModalComp visible={visible} title="게시글 삭제" description="정말 글을 삭제하시겠습니까?" confirmText="삭제" onConfirm={onConfirm} onCancel={onCancel} />;
};

export default AskRemoveModalComp;
