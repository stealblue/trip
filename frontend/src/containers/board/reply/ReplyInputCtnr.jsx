import { useEffect, useCallback } from "react";
import ReplyWriteComp from "../../../components/board/reply/ReplyWriteComp";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize } from "../../../modules/board/WriteMod";

const ReplyInputCntr = () => {
  const dispatch = useDispatch();
  // title값과 body값을 리덕스 스토어에서 불러와 EditorComp에 전달
  const { content, id } = useSelector(({ ReplyWriteMod }) => ({
    id: ReplyWriteMod.id,
    content: ReplyWriteMod.content,
  }));

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  //언마운트 되면 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <ReplyWriteComp content={content} onChangeField={onChangeField} />;
};

export default ReplyInputCntr;
