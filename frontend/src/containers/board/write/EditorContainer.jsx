import { useEffect, useCallback } from "react";
import EditorComp from "../../../components/board/write/EditorComp";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize } from "../../../modules/board/WriteMod";

const EditorContainer = () => {
  const dispatch = useDispatch();
  // title값과 body값을 리덕스 스토어에서 불러와 EditorComp에 전달
  const { title, body } = useSelector(({ WriteMod }) => ({
    title: WriteMod.title,
    body: WriteMod.body,
  }));

  const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

  //언마운트 되면 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <EditorComp title={title} body={body} onChangeField={onChangeField} />;
};

export default EditorContainer;
